import React, { useRef, useState, useCallback } from "react";
import "../../assets/scss/AddProfile.scss";
import { AiOutlineCloudUpload } from "react-icons/ai";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { MdUpload } from "react-icons/md";

const AddProfile = () => {
  const navigate = useNavigate();
  const fileInput = useRef<HTMLInputElement>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [crop, setCrop] = useState<Crop>({ unit: "%", width: 100});
  const [image, setImage] = useState<string | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

  const handleUploadClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const onSelectFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImage(reader.result as string);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  }, []);

  const onLoad = useCallback((img: HTMLImageElement) => {
    imgRef.current = img;
  }, []);

  const makeClientCrop = useCallback(
    async (crop: Crop) => {
      if (imgRef.current && crop.width && crop.height) {
        createCropPreview(imgRef.current, crop, "newFile.jpeg");
      }
    },
    []
  );

  const createCropPreview = async (
    image: HTMLImageElement,
    crop: Crop,
    fileName: string
  ) => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width!;
    canvas.height = crop.height!;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.drawImage(
        image,
        crop.x! * scaleX,
        crop.y! * scaleY,
        crop.width! * scaleX,
        crop.height! * scaleY,
        0,
        0,
        crop.width!,
        crop.height!
      );

      const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob((blob) => {
          resolve(blob);
        }, "image/jpeg")
      );

      if (blob) {
        const imageUrl = URL.createObjectURL(blob);
        setCroppedImage(imageUrl);
        console.log(imageUrl);
      }
    }
  };

  const onSave = () => {
    if (croppedImage) {
      localStorage.setItem("image", JSON.stringify(croppedImage));
      navigate("/userprofile");
      toast.success("Profile image uploaded!");
    }
  };

  return (
    <>
      <div className="container main-main">
        <div className="main-container mx-auto" onClick={handleUploadClick}>
          <input
            type="file"
            id="file"
            accept="image/*"
            hidden
            ref={fileInput}
            onChange={onSelectFile}
          />
          <div>
            <AiOutlineCloudUpload className="img-area" />
            <h3>Upload Image</h3>
            <p>
              Image size must be less than <span>2MB</span>
            </p>
          </div>
        </div>
        <div className="mx-auto">
          {image && (
            <ReactCrop
              src={image}
              crop={crop}
              onImageLoaded={onLoad}
              onChange={setCrop}
              onComplete={makeClientCrop}
            />
          )}
          {croppedImage && (
            <div>
              <h2 className=" preview-text gradient-text">Preview</h2>
              <img src={croppedImage} alt="Cropped" />
              <MdUpload
                style={{ position: "absolute", top: "81%", right: "35%" }}
                onClick={onSave}
                className="text-danger fs-5 fw-4"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddProfile;

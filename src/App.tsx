import "./index.css";
import { Toaster } from "react-hot-toast";

import Signup from "./views/signup/Signup";
import RouterPath from "./routes/RouterPath";

function App() {
  return (
    <>
      <Toaster />

      <RouterPath />
    </>
  );
}

export default App;

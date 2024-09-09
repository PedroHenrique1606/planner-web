import ReactDOM from "react-dom/client";
import { App } from "./app";
import './index.css'
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster position="top-right" richColors />
    <App />
  </>
);

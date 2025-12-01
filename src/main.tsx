import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./app/styles/global.less";

createRoot(document.getElementById("root")!).render(<App />);

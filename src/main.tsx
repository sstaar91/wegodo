import { createRoot } from "react-dom/client";
import Router from "./Router";
import "./styles/reset.scss";
import "./styles/common.scss";

createRoot(document.getElementById("root")!).render(<Router />);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FindJobs } from "./screens/FindJobs/FindJobs";


createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <FindJobs />
  </StrictMode>,
);

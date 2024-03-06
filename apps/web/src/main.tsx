import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { TestComponent } from "@repo/ui";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div>
      <TestComponent variant="secondary">Hello World2 Matt</TestComponent>
    </div>
  </React.StrictMode>
);

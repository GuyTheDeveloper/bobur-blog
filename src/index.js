import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { AuthProvider } from "./contexts/auth-context";
//styles
import "antd/dist/antd.min.css";
import "./main.css";
import { InputProvider } from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <AuthProvider>
        <InputProvider>
          <App />
        </InputProvider>
      </AuthProvider>
    </BrowserRouter>
  </>
);

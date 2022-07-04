import React, { Suspense } from "react";
import { MainLayout } from "./components/layouts/main-layout/main-layout";
import { Loader } from "./components/loader/loader";
import { Routes } from "./routes/router";

export const Private = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </MainLayout>
  );
};

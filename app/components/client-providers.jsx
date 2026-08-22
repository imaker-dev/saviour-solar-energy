"use client";

import { Suspense } from "react";
import SplashScreen from "./splash-screen";
import AppLayout from "./app-layout";

export default function ClientProviders({ children }) {
  return (
    <>
      <Suspense fallback={<SplashScreen />}>
        <AppLayout>{children}</AppLayout>
      </Suspense>
    </>
  );
}

import { Suspense } from "react";
import ClientPage from "./ClientPage";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientPage />
    </Suspense>
  );
}

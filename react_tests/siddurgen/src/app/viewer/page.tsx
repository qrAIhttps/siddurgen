import React from "react";
import Viewer from "./viewer";

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-4 m-4 text-center min-w-auto">
        <Viewer />
    </div>
  );
}
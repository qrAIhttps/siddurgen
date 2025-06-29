import React from "react";
import Editor from "./editor";

export default async function Page() {
  return (
    <div className="flex-col flex justify-center bg-blue-50">
      <div className="flex flex-col items-center justify-center bg-blue-50 p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Siddur Generator!</h1>
        <p className="text-lg">Feel free to explore and test the features.</p>
        <p className="text-lg">This is a work in progress, so expect changes and improvements over time.</p>
        <br />
        <Editor />
      </div>
    </div>
  );
}

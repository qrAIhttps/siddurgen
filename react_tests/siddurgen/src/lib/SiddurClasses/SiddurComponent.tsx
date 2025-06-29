"use client";

import React from "react";
import SiddurPrayer from "./SiddurPrayer";

interface SiddurComponentProps {
  /** The text to display inside the button */
  SiddurComponent: string;
}
export default function SiddurComponent(props: SiddurComponentProps) {
  const Component: SiddurPrayer = JSON.parse(props.SiddurComponent);
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 m-12 bg-gray-100 rounded-lg shadow-sm text-center min-w-auto">
      <div className="">
        <h1 className="title text-2xl font-bold mb-4 justify-center">{Component.title}</h1>
        {Component.subtitle &&<h2 className="subtitle text-lg text-gray-600">{Component.subtitle}</h2>}
        {Component.description &&<h2 className="text-lg text-gray-600">{Component.description}</h2>}
        {Component.leader &&<h2 className="subtitle text-lg text-gray-600">{Component.leader}</h2>}
      </div>
      <br />
      <div>
        <ul className="list-none flex flex-row gap-4">
            {Component.sources.map((source,index) => (
              <li key={index} className="flex-1 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-100">
                <div className="font-bold">{source.title}</div>
                <div className="text-sm text-gray-700">{source.text}</div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}



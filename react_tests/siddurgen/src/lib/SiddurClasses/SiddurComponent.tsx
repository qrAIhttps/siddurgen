"use server";

import React from "react";
import SiddurPrayer from "./SiddurPrayer";

interface SiddurComponentProps {
  /** The text to display inside the button */
  SiddurComponent: SiddurPrayer;
  /** Whether the button can be interacted with */
  disabled: boolean;
}
export default async function SiddurComponent(props: SiddurComponentProps) {


  return (
    <div className="flex flex-col items-center justify-center p-16 m-12 bg-gray-100 rounded-lg shadow-sm text-center min-w-auto">
      <div className="">
        <h1 className="title text-2xl font-bold mb-4 justify-center">{props.SiddurComponent.title}</h1>
        {props.SiddurComponent.subtitle &&<h2 className="subtitle text-lg text-gray-600">{props.SiddurComponent.subtitle}</h2>}
        {props.SiddurComponent.description &&<h2 className="text-lg text-gray-600">{props.SiddurComponent.description}</h2>}
        {props.SiddurComponent.leader &&<h2 className="subtitle text-lg text-gray-600">{props.SiddurComponent.leader}</h2>}
      </div>
      <br />
      <div>
        {/* {props.SiddurComponent.sources.map((source, index) => (
            <div></div>))} */}

        <ul className="list-none flex flex-row gap-4">
            {props.SiddurComponent.sources.map((source,index) => (
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

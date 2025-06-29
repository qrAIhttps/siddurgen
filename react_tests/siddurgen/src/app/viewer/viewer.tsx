"use client";
import SiddurComponent from "@/lib/SiddurClasses/SiddurComponent";
import React, { useState } from "react";
import { examplePrayer, exampleSiddur } from "@/lib/SiddurClasses/examples";
import Siddur from "@/lib/SiddurClasses/Siddur";
import styles from "./viewer.module.css";

export default function Viewer() {
  const [opened, setOpened] = useState<boolean>(false);
  const [siddur, setSiddur] = useState<Siddur>(exampleSiddur);
  return (
    <div className={`flex flex-col items-center justify-center text-center min-w-lg bg-grey-100 ${styles.viewer}`}>
      {!opened && (
        <div>
          <h1 className="text-2xl font-bold mb-4">SiddurGen Viewer</h1>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
            onClick={() => setOpened(true)}
          >
            Open Default
          </button>
        </div>
      )}
      {opened && (
        

        <div className="list-none flex flex-col gap-4">
            <div>
                <h1 className="text-4xl font-bold">{siddur.title}</h1>
                <h2 className="text-2xl font-semibold">{siddur.subtitle}</h2>
                <p className="text-xl">{siddur.description}</p>
            </div>
          <ul >
            {siddur.Components.map((prayer, index) => (
              <li key={index}>
                <SiddurComponent SiddurComponent={JSON.stringify(prayer)} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

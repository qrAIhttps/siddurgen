"use client";
import { useEffect, useState } from "react";

export default function SefariaText(props) {
  //const [ref, setRef] = useState("Genesis 1:1");
  const [textData, setTextData] = useState(null);

  async function loadText() {
    const res = await fetch(`https://www.sefaria.org/api/v3/texts/${encodeURIComponent(props.sefariaRef)}?return_format=text_only&version=${props.sefariaLanguage}`);
    const json = await res.json();
    setTextData(json.versions[0].text);
  }
  useEffect(() => { loadText(); });

  return (
    <div>
      {textData && (
        <div>
          <h3>{props.sefariaRef}</h3>
          {textData}{console.log(textData)}
          <p><strong>Hebrew:</strong> {Array.isArray(textData.he) ? textData.he.join(" ") : textData.he}</p>
          <p><strong>English:</strong> {Array.isArray(textData.text) ? textData.text.join(" ") : textData.text}</p>
        </div>
      )}
    </div>
  );
}

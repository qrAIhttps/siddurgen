'use client';
import { getSiddurPrayerFromSefaria } from "@/lib/SefariaIntegration/SefariaTextSiddurComponent";
import Siddur from "@/lib/SiddurClasses/Siddur";
import SiddurComponent from "@/lib/SiddurClasses/SiddurComponent";
import SiddurPrayer from "@/lib/SiddurClasses/SiddurPrayer";
import React, { Suspense, useState } from "react";

interface SourceInfo {
  slug: string;
  title: string;
  hebrewTitle: string;
  englishTitle: string;
}
export default function Page() {

    const [query, setQuery] = useState<SourceInfo>({
    slug: "",
    title: "",
    hebrewTitle: "",
    englishTitle: ""
  });
  const [textData, setTextData] = useState<SiddurPrayer>();
  const [loading, setLoading] = useState(false)
  const fetchText = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const response = await getSiddurPrayerFromSefaria(query.slug, query.title, query.hebrewTitle, query.englishTitle);
      setTextData(response);
    } catch (error) {
      console.error('Failed to fetch text:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sefaria Text Lookup</h1>
      <form className="mb-4">
        <label className="block mb-2">
          Slug:
          <input
        type="text"
        placeholder="e.g. Genesis 1:1"
        value={query.slug}
        onChange={(e) => setQuery({ ...query, slug: e.target.value })}
        className="border px-2 py-1 mr-2"
          />
        </label>
        <label className="block mb-2">
          Title:
          <input
        type="text"
        placeholder="e.g. Modeh Ani"
        value={query.title}
        onChange={(e) => setQuery({ ...query, title: e.target.value })}
        className="border px-2 py-1 mr-2"
          />
        </label>
        <label className="block mb-2">
          Hebrew Title:
          <input
        type="text"
        placeholder="e.g. מודה אני"
        value={query.hebrewTitle}
        onChange={(e) => setQuery({ ...query, hebrewTitle: e.target.value })}
        className="border px-2 py-1 mr-2"
          />
        </label>
        <label className="block mb-2">
          English Title:
          <input
        type="text"
        placeholder="e.g. Modeh Ani"
        value={query.englishTitle}
        onChange={(e) => setQuery({ ...query, englishTitle: e.target.value })}
        className="border px-2 py-1 mr-2"
          />
        </label>
      </form>
      
      <button onClick={fetchText} className="bg-blue-500 text-white px-4 py-1 rounded">
        Fetch
      </button>

      {loading && <p className="mt-4">Loading...</p>}

      {textData && (
        <div className="mt-4">
          <SiddurComponent SiddurComponent={JSON.stringify(textData)} />
        </div>
      )}
    </main>
  );
  // return (
  //   <div className="flex-col flex justify-center bg-blue-50">
  //     <div className="flex flex-col items-center justify-center bg-blue-50 p-8">
  //       <h1 className="text-4xl font-bold mb-4">Welcome to the Siddur Generator!</h1>
  //       <p className="text-lg">Feel free to explore and test the features.</p>
  //       <p className="text-lg">This is a work in progress, so expect changes and improvements over time.</p>
  //       <br />
  //         {/* <Editor /> */}

  //     </div>
  //   </div>
  // );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">SiddurGen</h1>
      <p className="text-lg">Generate your own Siddur</p>
    </div>
    </div>
  );
}

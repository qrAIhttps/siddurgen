import SefariaTextLoader from "./sefariacomponent";
export default async function Page() {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <SefariaTextLoader sefariaRef="Genesis 1:2" sefariaLanguage="hebrew"/>
    </div>
  );
}


import { useState } from "react";

export default function ManualAutoInputSlider(props) {
    const [isManualInput, setIsManualInputInternal] = useState(false);
    const setIsManualInput = (value) => {
    setIsManualInputInternal(value);
    props.onDataSend(value);
    }
  return (
    <div
      onClick={() => setIsManualInput(!isManualInput)}
      className={`relative rounded-full flex flex-row mb-4 transition-colors duration-300 cursor-pointer w-l ${
        isManualInput
          ? "bg-gradient-to-r from-purple-500 to-indigo-500"
          : "bg-gradient-to-r from-yellow-400 to-orange-500"
      } bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg`}
    >
      {/* Glassy oval toggle */}
      <div
        className={`absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300 bg-grey-100 backdrop-filter backdrop-blur-lg rounded-full h-13 ${
          isManualInput ? "w-1/2 translate-x-0" : "w-1/2 translate-x-0"
        }`}
        style={{
          transform: isManualInput ? "translateX(100%)" : "translateX(0%)",
          opacity: 0.9, // Adjust transparency
        }}
      ></div>

      <div
        className={`p-4 rounded flex items-center transition-all ${
          isManualInput ? "bg-opacity-50" : ""
        }`}
      >
        <label htmlFor="manualInput" className="ml-2 text-white font-semibold">
          Manual Input
        </label>
      </div>
      <div
        className={`p-4 rounded flex items-center ml-4 transition-all ${
          !isManualInput ? "bg-opacity-50" : ""
        }`}
      >
        <label htmlFor="sefariaInput" className="ml-2 text-white font-semibold">
          Sefaria Input
        </label>
      </div>
    </div>
  );
}

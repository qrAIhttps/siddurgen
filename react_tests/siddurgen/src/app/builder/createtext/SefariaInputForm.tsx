import { useState } from "react";
import SiddurPrayer from "@/lib/SiddurClasses/SiddurPrayer";
import { getSiddurPrayerFromSefaria, SourceInfo } from "@/lib/SefariaIntegration/SefariaTextSiddurComponent";

export default function ManualAutoInputSlider(props) {
    const [sefariaSourceInfo, setSefariaSourceInfo] = useState<SourceInfo>({
        slug: "Numbers 24:5",
        title: "Mah Tovu",
        hebrewTitle: "מה טובו",
        englishTitle: "Mah Tovu",
    });

    return (
        <div>
            <div className="flex flex-col items-center justify-center m-4">
                <div className="flex items-center mb-2">
                    <label className="font-semibold mr-2">Slug:</label>
                    <input
                        type="text"
                        placeholder="e.g. Siddur_Ashkenaz,_Weekday,_Shacharit,_Preparatory_Prayers,_Modeh_Ani"
                        value={sefariaSourceInfo.slug}
                        onChange={(e) =>
                            setSefariaSourceInfo({
                                ...sefariaSourceInfo,
                                slug: e.target.value,
                            })
                        }
                        className="border px-2 py-1 flex-1"
                    />
                </div>
                <div className="flex items-center mb-2">
                    <label className="font-semibold mr-2">Title:</label>
                    <input
                        type="text"
                        placeholder="e.g. Modeh Ani"
                        value={sefariaSourceInfo.title}
                        onChange={(e) =>
                            setSefariaSourceInfo({
                                ...sefariaSourceInfo,
                                title: e.target.value,
                            })
                        }
                        className="border px-2 py-1 flex-1"
                    />
                </div>
                <div className="flex items-center mb-2">
                    <label className="font-semibold mr-2">Hebrew Title:</label>
                    <input
                        type="text"
                        placeholder="e.g. מודה אני"
                        value={sefariaSourceInfo.hebrewTitle}
                        onChange={(e) =>
                            setSefariaSourceInfo({
                                ...sefariaSourceInfo,
                                hebrewTitle: e.target.value,
                            })
                        }
                        className="border px-2 py-1 flex-1"
                    />
                </div>
                <div className="flex items-center mb-2">
                    <label className="font-semibold mr-2">English Title:</label>
                    <input
                        type="text"
                        placeholder="e.g. Modeh Ani"
                        value={sefariaSourceInfo.englishTitle}
                        onChange={(e) =>
                            setSefariaSourceInfo({
                                ...sefariaSourceInfo,
                                englishTitle: e.target.value,
                            })
                        }
                        className="border px-2 py-1 flex-1 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    className="bg-gradient-to-r from-blue-400 to-blue-600 px-8 py-2 rounded-full w-full text-white shadow-lg hover:shadow-lg "
                    onClick={() => {
                        const fetchData = async () => {
                            const response = await getSiddurPrayerFromSefaria(
                                sefariaSourceInfo.slug,
                                sefariaSourceInfo.title,
                                sefariaSourceInfo.hebrewTitle,
                                sefariaSourceInfo.englishTitle
                            );
                            props.setPrayer(response);
                        };
                        fetchData();
                    }}
                >
                    Update
                </button>
            </div>
        </div>
    );
}
import Radios from "@/components/helpers/Radios";

export default function Filter() {
    return (
        <div className="flex flex-col w-[20%] mt-20 pr-10">
            <div className="flex flex-col relative">
                <button className="p-1 border-1 border-black hover:bg-stone-300">
                    Type
                </button>
                <div className="flex flex-col absolute">
                    <Radios
                        type="radio"
                        id="classicalRadio"
                        name="Classical"
                        value="classical"
                    ></Radios>
                    <Radios
                        type="radio"
                        id="hiphopRadio"
                        name="Hiphop"
                        value="hiphop"
                    ></Radios>
                    <Radios
                        type="radio"
                        id="rockRadio"
                        name="rock"
                        value="rock"
                    ></Radios>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}

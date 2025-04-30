import Image from "next/image";

export default function ResultItem({ data }) {
    return (
        <div className="flex flex-col p-2 hover:bg-green-300 grow">
            <div className="w-full">
                <Image
                    src={data.image[3]["#text"]}
                    alt="Album cover"
                    height={300}
                    width={300}
                />
            </div>
            <div className="h-[50%] pt-2">
                <div className="flex justify-between px-1 mb-2">
                    <p className="text-xs">{data.artist}</p>
                    <p className="text-xs">{1989}</p>
                </div>
                <p className="text-s">{data.name}</p>
                <div></div>
            </div>
        </div>
    );
}

import Image from "next/image";
import albumphoto from "../../public/ExileMainSt.jpg";

export default function ResultItem({ data }) {
  console.log(data);
  return (
    <div className="flex flex-col p-2 hover:bg-green-300 grow">
      <div className="w-full">
        <Image src={albumphoto} placeholder="blur" alt="Album cover" />
      </div>
      <div className="h-[50%] pt-2">
        <div className="flex justify-between px-1 mb-2">
          <p className="text-xs">The Rolling Stones</p>
          <p className="text-xs">1989</p>
        </div>
        <p className="text-s">Exile On Main Street</p>
        <div></div>
      </div>
    </div>
  );
}

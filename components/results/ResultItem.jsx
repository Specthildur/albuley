import Image from "next/image";
import albumphoto from "../../public/ExileMainSt.jpg";

export default function ResultItem({ title, age, artist, image, rating }) {
  return (
    <div className="flex flex-col p-2 relative h-[380px] hover:bg-green-300">
      <div className="h-[70%] relative">
        <Image
          src={albumphoto}
          placeholder="blur"
          layout="fill"
          className="rounded-t-2xl"
        />
      </div>
      <div className="h-[30%] pt-2">
        <div className="flex mx-3">
          <p className="size">the rolling stones</p>
          <p>2</p>
        </div>
        <p className="text-s">{title}</p>
        <p>exile on main street</p>
        <p>5</p>
      </div>
    </div>
  );
}

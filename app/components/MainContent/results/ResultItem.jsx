"use client";
import ImageFallback from "../../helpers/ImageFallback";
import Image from "next/image";
import Link from "next/link";
import supabase from "@/app/config/supbaseClient";

export default function ResultItem({ data }) {
    console.log(supabase);
    return (
        <li className="flex flex-col p-2 hover:bg-green-300 grow align-middle">
            <Link href={`/result/${data.id}`}>
                <div className="w-full content-center">
                    {data.cover_big ? (
                        <Image
                            src={data.cover_big}
                            alt="Album cover"
                            height={300}
                            width={300}
                            title={data.title}
                        />
                    ) : (
                        <ImageFallback
                            alt="Album cover"
                            height={300}
                            width={300}
                            title={data.title}
                        ></ImageFallback>
                    )}
                </div>
                <div className="h-[50%] pt-2 text-clip truncate">
                    <div className="flex justify-between px-1 mb-2">
                        <p className="text-xs font-medium">
                            {data.artist.name}
                        </p>
                        <p className="text-xs">{1989}</p>
                    </div>
                    <p className="text-s">{data.title}</p>
                    <div></div>
                </div>
            </Link>
        </li>
    );
}

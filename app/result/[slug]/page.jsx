import Details from "@/components/details/Details";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getAlbum(albumId) {
  const res = await fetch(`https://api.deezer.com/album/${albumId}`);
  const data = res.json();
  if (!data) notFound();
  return data;
}

export default async function Page({ params }) {
  const { slug } = await params;
  const album = await getAlbum(slug);

  return (
    <div className="w-full flex px-15 pt-5">
      <div className="w-1/4 flex grow flex-col items-start px-5">
        <Image
          src={album.cover_xl}
          height={400}
          width={400}
          alt={album.artist}
          className="mb-3 rounded-t-2xl"
        ></Image>
        <ul className="inline-block w-full">
          <li className="inline-flex gap-6 mb-4">
            <p>Album release date: </p>
            <p>{album.release_date}</p>
          </li>
          <li className="inline-flex gap-6 mb-4">
            <p>Album release date: </p>
            <p>{album.release_date}</p>
          </li>
          <li className="inline-flex gap-6 mb-4">
            <p>Album release date: </p>
            <p>{album.release_date}</p>
          </li>
          <li className="inline-flex gap-6 mb-4">
            <p>Album release date: </p>
            <p>{album.release_date}</p>
          </li>
          <li>
            <p>{album.genres.data.map((e) => e.name)}</p>
            <p>{album.release_date}</p>
            <p>{album.release_date}</p>
          </li>
        </ul>
        <ul className="align-middle">
          <Details data={album.tracks.data}></Details>
        </ul>
      </div>
      <div className="w-3/4">
        <p>Test</p>
      </div>
    </div>
  );
}

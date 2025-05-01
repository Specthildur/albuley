import Details from "@/app/components/details/Details";

export default async function Page({ params }) {
    const { slug } = await params;

    return <Details resultId={Number(slug)} />;
}

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;

  // fetching data API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}` //tambahin "/anime?q=${keyword}" untuk menambahkan endpoint dari keyword
  );
  const searchAnime = await response.json();

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${keyword}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;

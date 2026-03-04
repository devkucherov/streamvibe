import ShowBanner from "@/section/ShowBanner";
import MovieDetails from "@/section/MovieDetails";
import Seasons from "@/components/Seasons";

export const metadata = {
  title: 'Show - Stranger Things',
}

export default () => {
  return (
    <>
      <ShowBanner />
      <MovieDetails
        seasons={<Seasons />}
      />
    </>
  )
}

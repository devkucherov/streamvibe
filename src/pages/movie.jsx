import MovieBanner from "@/section/MovieBanner";
import MovieDetails from "@/section/MovieDetails";

export const metadata = {
  title: 'Movies - Kantara',
}

export default function () {
  return (
    <>
      <MovieBanner />
      <MovieDetails />
    </>
  )
}

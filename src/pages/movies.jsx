import MoviesBanner from "@/section/MoviesBanner";
import Collections from "@/section/Collections";

export const metadata = {
  title: 'Movies & Shows',
}

export default function () {
  return (
    <>
      <MoviesBanner />
      <Collections />
    </>
  )
}

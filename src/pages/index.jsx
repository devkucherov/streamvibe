import Hero from "@/section/Hero";
import Categories from "@/section/Categories";

export const metadata = {
  title: 'Home',
  isHeaderFixed: true,
}

export default function () {
  return (
    <>
      <Hero />
      <Categories />
    </>
  )
}

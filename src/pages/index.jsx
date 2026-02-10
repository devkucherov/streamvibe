import Hero from "@/section/Hero";
import Categories from "@/section/Categories";
import Devices from "@/section/Devices";

export const metadata = {
  title: 'Home',
  isHeaderFixed: true,
}

export default function () {
  return (
    <>
      <Hero />
      <Categories />
      <Devices />
    </>
  )
}

import Plans from "@/section/Plans";
import PlansComparison from "@/section/PlansComparison";

export const metadata = {
  title: 'Subscriptions',
}

export default function () {
  return (
    <>
      <Plans />
      <PlansComparison />
    </>
  )
}

import Plans from "@/section/Plans";
import PlansComparison from "@/section/PlansComparison";

export const metadata = {
  title: 'Subscriptions',
}

export default () => {
  return (
    <>
      <Plans />
      <PlansComparison />
    </>
  )
}

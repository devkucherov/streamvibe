import './Content'

const Content = (props) => {
  const  { children } = props

  return (
    <main className="contetn">
      {children}
    </main>
  )
}

export default Content
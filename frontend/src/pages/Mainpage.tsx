import GlassMainboard from '../components/GlassMainboard'
import Header from '../components/Header'

function MainPage() {
  return (
    <>
      <Header />
      <div className="heading-container">
        <h1 id="heading">
          Pick an artist whose music is going to get stuck in your head for
          today!
        </h1>
      </div>
      <div className="glass-container">
        <GlassMainboard />
      </div>
    </>
  )
}

export default MainPage

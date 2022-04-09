import { useNavigate } from 'react-router-dom'

function MainPage() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/daily_pick')
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Today's pick</button>
      </div>
    </>
  )
}

export default MainPage

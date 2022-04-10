import { useNavigate } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()

  const handleClick = () => navigate('/')
  return (
    <div className="header">
      <button onClick={handleClick}>DewDew</button>
    </div>
  )
}

export default Header

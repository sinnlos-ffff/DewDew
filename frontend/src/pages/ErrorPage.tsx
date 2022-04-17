import { useLocation, useNavigate } from 'react-router-dom'
import Header from '../components/Header'

type LocationType = {
  status: number
  statusText: string
}

function ErrorPage() {
  const navigate = useNavigate()
  const state = (useLocation().state as LocationType) || {
    status: 404,
    statusText: null,
  }

  return (
    <>
      <Header />
      <div className="heading-container">
        <h1 id="heading">{`${state.status} : ${state.statusText}`}</h1>
      </div>
      <div style={{ display: 'flex' }}>
        <button className="glassbutton" onClick={() => navigate('/')}>
          Go to Main
        </button>
      </div>
    </>
  )
}

export default ErrorPage

import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'

interface LocationType {
  [x: string]: ReactNode
  state: {
    status: number
  }
}

function ErrorPage() {
  const state = (useLocation().state as LocationType) || { status: 404 }

  return (
    <>
      <Header />
      <div className="heading-container">
        <h1 id="heading">{state.status}</h1>
      </div>
    </>
  )
}

export default ErrorPage

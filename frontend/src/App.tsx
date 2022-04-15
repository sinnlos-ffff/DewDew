import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DailyPick from './pages/DailyPick'
import MainPage from './pages/MainPage'
import store from './store'
import './styles/styles.css'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/daily_pick/:slug" element={<DailyPick />} />
            <Route path="*" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

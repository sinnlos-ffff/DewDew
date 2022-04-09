import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DailyPick from './pages/DailyPick'
import MainPage from './pages/Mainpage'
import store from './store'
import './styles.css'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/daily_pick" element={<DailyPick />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

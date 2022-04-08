import { Provider } from 'react-redux'
import Mainpage from './pages/Mainpage'
import store from './store'
import './styles.css'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Mainpage />
      </Provider>
    </>
  )
}

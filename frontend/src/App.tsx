import { Provider } from 'react-redux'
import store from './store'
import './styles.css'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <p>hello</p>
      </Provider>
    </>
  )
}

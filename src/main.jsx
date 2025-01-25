import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* THIS ENSURES THAT THE ENTIRE APPLICATION CAN ACCESS THE STORE */}
    <Provider store={store}> 
      <App />
    </Provider>
  </StrictMode>
)

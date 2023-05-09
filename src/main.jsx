import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux';
import { store } from './app/store';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
    
    <Provider store={store}>
      <Routes>
        <Route path='/*' element={<App />}/>
      </Routes>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

import App from "./App"
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux"
import { store } from './QuoteApp/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < Provider store={store}>
   <App />
  </Provider>
);


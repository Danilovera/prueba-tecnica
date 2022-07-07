import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from './Routes/AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store/store';
import { Provider } from 'react-redux/es/exports';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
   <AppRoutes />
 </Provider>
);



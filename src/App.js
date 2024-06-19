import './App.css';
import HomeScreen from './screen/home-screen';
import CheckoutScreen from './screen/checkout-screen';
import PaginationScreen from './screen/paginated-screen';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import theme from './theme'
import { ThemeProvider } from 'styled-components';
import {Provider} from 'react-redux';
import store from './redux/Store';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Provider store={store}>
    <Router>
      <Routes>
        <Route element={<HomeScreen/>} path='/'/>
        <Route element={<CheckoutScreen/>}  path='/CheckOut'/>
        <Route element={<PaginationScreen/>}  path='/photo/:page'/>
      </Routes>
    </Router>
    </Provider>
    </ThemeProvider>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';
import First from './pages/First/First';
import Leftbar from './components/Leftbar/Leftbar';
import { BrowserRouter } from 'react-router-dom';
import Action from './components/Geners/Action/Action';
import Horor from './components/Geners/Horor/Horor';
import Animation from './components/Geners/Animation/Animation';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/Searchbar/Searchbar';
import MovieList from './components/Movielist/Movielist';
import Homenav from './components/Homenav/Homenav';
import Newhome from './components/Newhome/Newhome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <First/>  */}
      {/* <Leftbar/> */}
      {/* <Action/> */}
      {/* <Horor/> */}
      {/* <Animation /> */}
      {/* <Navbar/> */}
      <App/>
      {/* <SearchBar /> */}
      {/* <MovieList/> */}
      {/* <First/> */}
      {/* <Homenav/> */}
      {/* <Newhome/> */}
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

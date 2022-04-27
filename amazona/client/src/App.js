import {useEffect} from 'react';
import i18next from 'i18next';
import './App.css';
import RootPage from './pages/RootPage';

function App() {
  
  useEffect(()=>{
    i18next.changeLanguage("en")
  },[])
  return (
    <RootPage/>
  );
}

export default App;

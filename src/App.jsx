import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect ,useContext } from 'react';
import axios from 'axios';
import './App.css';

// Layout
import DefaultLayout from './pages/DefaultLayout';

// Pages
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import FoodPage from './pages/FoodPage';
import ErrorPage from './pages/ErrorPage'
import PostForm from './pages/PostForm';
import CardPage from './pages/CardPage';

//Contexts
import MainContext from './contexts/MainContext'

function App() {

  const [posts, setPosts] = useState([]); 

  // dati da node backend
  useEffect(() => {
    axios
      .get('http://localhost:3000/posts')
      .then((response) => {
        setPosts(response.data.data); 
      })
      .catch((error) => {
        console.error(`errore nell api: ${error}`);
      });
  }, []);

  return (
      <MainContext.Provider value= {{posts, setPosts}}>
        <BrowserRouter>
         <Routes>
           <Route element={<DefaultLayout />}>
             <Route index element={<HomePage />} />
             <Route path="/contact" element={<ContactPage />} />
             <Route path="/food" element={<FoodPage />} />
             <Route path="/food/:id" element={<CardPage />} />
             <Route path="/addCard" element={<PostForm />} />
             <Route path="*" element={<ErrorPage />} />
           </Route>
         </Routes>
       </BrowserRouter>
      </MainContext.Provider>
       
  );
}

export default App;

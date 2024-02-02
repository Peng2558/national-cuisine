
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import Home from '../Home/Home';
import NavBar from '../../components/NavBar/NavBar';
import DifferentCuisines from '../../components/DifferentCuisines.jxs/DifferentCuisines';
import Cuisine from '../Cuisine/Cuisine';
import Recipe from '../Recipe/Recipe';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
       { user ?
         <>
         <NavBar user={user} setUser={setUser}/>
          <DifferentCuisines/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/cuisine/:type" element={<Cuisine />} />
         <Route path="/recipe/:name" element={<Recipe />} />
         <Route path="/recipes/favorites" element={<FavoritesPage />} />
      </Routes>
      </>
      :
      <AuthPage  setUser={setUser}/>
    }
    </main>
  );
}

export default App;

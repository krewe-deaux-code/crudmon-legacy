import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import Profile from './components/userProfiles/profile.jsx';
import NonUserProf from './components/userProfiles/nonUserProf.jsx';

const Collection = lazy(() => import('./components/cardCollection/collection.jsx')); // working?
const MarketPlace = lazy(() => import('./components/marketPlace/marketPlace.jsx'));
const Pokedex = lazy(() => import('./components/pokedex/Pokedex.jsx'));
const Inbox = lazy(() => import ('./components/Messages/Inbox.jsx'));
const Compose = lazy(() => import('./components/Messages/Compose.jsx'));
const LeaderBoard = lazy(() => import('./LeaderBoard.jsx'));



//
const App = () => (
  <BrowserRouter>
    <NavBar />
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='inbox' element={< Inbox />} />
        <Route path='compose:id' element={<Compose />} />
        <Route path="marketPlace" element={<MarketPlace />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="collection" element={<Collection />} />
        <Route path="userProfile:id" element={<NonUserProf />} />
        <Route path="leaderBoard" element={<LeaderBoard />} />
        
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </React.Suspense>
  </BrowserRouter>
);




export default App;


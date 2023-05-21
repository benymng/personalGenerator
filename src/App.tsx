import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import JobList from './pages/JobList'
import Profile from './pages/Profile';
import Generate from './pages/Generate';
import NavBar from './components/NavBar';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/view-experience' />
        <Route path='/profile/new-experience' />
        <Route path='profile/edit-experience' />
        <Route path='/generate' element={<Generate />} />
        <Route path='/saved' />
        <Route path='/job-list' element={<JobList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

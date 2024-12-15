import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; 
import Home from './pages/Home';
import Login from './components/Login'; 
import SignUp from './components/SignUp';
import TopHeadlines from './components/TopHeadlines';
import NewsArchive from './components/NewsArchive';
import Notes from './components/Notes';
import NewsFeed from './components/NewsFeed';


import Criminal from './components/Criminal';
import Category from './components/Category';
import Medical from './components/Medical';
import Sports from './components/Sports';
import Ent from './components/Ent';
import WeatherPage from './components/Weather';
import Bot from './components/Bot'; // Import the Bot component

import './styles.css';

const App = () => {
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const toggleNotes = () => {
    setIsNotesOpen(!isNotesOpen);
  };

  return (
    <Router>
      <Routes>
        {/* Pages without Navbar and Footer */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/top-headlines" element={<TopHeadlines />} />
        <Route path="/news-archive" element={<NewsArchive />} />
        <Route path="/bot" element={<Bot />} /> {/* Add route for Bot */}

        {/* Pages with Navbar and Footer */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/criminals"
          element={
            <Layout>
              <Criminal />
            </Layout>
          }
        />
        <Route
          path="/medical"
          element={
            <Layout>
              <Medical />
            </Layout>
          }
        />
        <Route
          path="/sports"
          element={
            <Layout>
              <Sports />
            </Layout>
          }
        />
        <Route
          path="/ent"
          element={
            <Layout>
              <Ent />
            </Layout>
          }
        />
        <Route
          path="/category"
          element={
            <Layout>
              <Category />
            </Layout>
          }
        />
        <Route
          path="/newsfeed"
          element={
            <Layout>
              <NewsFeed />
            </Layout>
          }
        />
        <Route
          path="/notes"
          element={
            <Layout>
              <Notes isOpen={isNotesOpen} onClose={toggleNotes} />
            </Layout>
          }
        />
        <Route
          path="/weather"
          element={
            <Layout>
              <WeatherPage />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Header.css';

const Header = () => {
    const navigate = useNavigate();

    const handleExploreNow = () => {
        navigate('/news-archive');
    };

    return (
        <div className="header-container">
            <div className="header-text">
                <h1>Welcome to NewsPeriod</h1>
                <p>
                    "Welcome to NewsPeriod! Step into the past and explore historical newspapers from any date. Our archives span decades, allowing you to relive moments from yesterday, last year, or even centuries ago. Simply select a date, and we'll deliver the corresponding newspaper to your fingertips. Uncover forgotten stories, revisit memories, and gain new insights into the events that shaped our world. Start your journey through time now!"
                </p>
                <button onClick={handleExploreNow}>Explore Now</button>
            </div>
            <div className="header-image">
                <img src="https://i.pinimg.com/736x/3a/dd/80/3add80f4702acf18a0d184df4ffedea5.jpg" alt="Welcome" />
            </div>
        </div>
    );
};

export default Header;

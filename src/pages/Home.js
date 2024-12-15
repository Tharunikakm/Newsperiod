import React from 'react';
import NewspaperSelector from '../components/NewspaperSelector';
import Header from '../components/Header';
import Feeds from '../components/Feeds';
import Reviews from '../components/Reviews';
import { Box } from '@mui/material';
import Category from '../components/Category';
import Notes from '../components/Notes';
import Helpline from '../components/Helpline';
import WbSunny from '@mui/icons-material/WbSunny';
import '../styles.css'; 

const Home = () => {
    const newspapers = [
        { name: 'Times of India', url: 'https://timesofindia.indiatimes.com/' },
        { name: 'Hindu', url: 'https://www.thehindu.com/' },
        { name: 'Economic Times', url: 'https://economictimes.indiatimes.com/' }
    ];

    const openWeatherPage = () => {
        
        window.location.href = '/weather';
    };

    return (
        <>
            
            <Box sx={{ width: '100%', marginBottom: '40px' }}>
                <Helpline />
            </Box>
            <Notes />
            <main>
                <Box className="main" sx={{ width: '100%', padding: '20px' }}>
                    <Box className="header-container">
                        <Header />
                        {/* Weather Icon */}
                        <div className="icon-container">
                            <div className="sun-icon-container" onClick={openWeatherPage}>
                                <WbSunny fontSize="large" className="sun-icon" />
                            </div>
                        </div>
                    </Box>
                    <Box sx={{ width: '100%', marginBottom: '40px' }}>
                        <Feeds />
                    </Box>
                    <Box sx={{ width: '100%', marginBottom: '40px' }}>
                        <Category />
                    </Box>
                    <Box sx={{ width: '100%', marginBottom: '40px' }}>
                        <NewspaperSelector newspapers={newspapers} />
                    </Box>
                    <Box sx={{ width: '100%', marginBottom: '40px' }}>
                        <Reviews />
                    </Box>
                </Box>
            </main>
        </>
    );
};

export default Home;

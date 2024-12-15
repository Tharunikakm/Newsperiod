import React from 'react';
import { Box, Typography, Divider } from '@mui/material';

const reviews = [
    {
        user: 'John Doe',
        review: 'Great app! The news selection is very comprehensive and easy to navigate.',
    },
    {
        user: 'Jane Smith',
        review: 'I love the clean design and the variety of newspapers available. Highly recommend!',
    },
    {
        user: 'Samuel Lee',
        review: 'Very user-friendly and informative. The search functionality could be improved though.',
    }
];

const Reviews = () => {
    return (
        <Box className="container">
            <Box className="imageContainer">
                <img 
                    src="https://i.pinimg.com/236x/0d/83/ad/0d83ad168a77df0e545d4cb60bdf5fe3.jpg" 
                    alt="Review illustration" 
                    className="image"
                />
            </Box>
            <Box className="reviewsContent">
                <Typography 
                    variant="h4" 
                    className="title"
                >
                    Reviews
                </Typography>
                {reviews.map((review, index) => (
                    <Box key={index} className="reviewItem">
                        <Typography variant="h6" className="user">
                            {review.user}
                        </Typography>
                        <Typography variant="body1" className="reviewText">
                            "{review.review}"
                        </Typography>
                        {index < reviews.length - 1 && <Divider className="divider" />}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Reviews;

import React from 'react';
import { Box, Typography, Card, CardContent, Divider, CardMedia, Grid } from '@mui/material';
import '../styles.css';

const feeds = [
    {
        title: 'Colon Cancer Screening',
        content: 'A new study has shown that at-home colon cancer screening tests are as effective as colonoscopies in reducing the risk of colorectal cancer death​ ',
        imageUrl: 'https://i.pinimg.com/236x/6d/34/c6/6d34c60357a92d176d7e8a044e0576fa.jpg',
    },
    {
        title: 'Sports Highlights',
        content: 'Paris 2024 OLYMPICS opening ceremony: pv sindhu, sharath kamal to lead indian contingent as history beckons on the river seine',
        imageUrl: 'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/kalglnsjjscx9iwdg1ju',
    },
    {
        title: 'Technology Advances',
        content: 'Google AI systems make headway with math in progress toward reasoning.Current class of AI models have struggled with abstract math',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbptFf7Hd80HzpXr78b80sGIGYnBOT_Cy9_w&s',
    }
];

const Feeds = () => {
    return (
        <Box className="feeds-container">
            <Typography variant="h4" className="feeds-header">
                Latest Feeds
            </Typography>
            <Grid container spacing={3}>
                {feeds.map((feed, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card className="feed-card">
                            <CardMedia
                                component="img"
                                height="200"
                                image={feed.imageUrl}
                                alt={feed.title}
                                className="feed-card-image"
                            />
                            <CardContent>
                                <Typography variant="h6" component="div" className="feed-card-title">
                                    {feed.title}
                                </Typography>
                                <Divider className="feed-card-divider" />
                                <Typography variant="body1" className="feed-card-content">
                                    {feed.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Feeds;
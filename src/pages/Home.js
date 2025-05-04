import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  CardMedia
} from '@mui/material';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'
import { sampleArticles } from './Articles';

const featuredArticles = sampleArticles.slice(0, 3); // Pick top 3 for carousel

export default function Home() {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 5 }, py: 4 }}>
      {/* Hero Section */}
      <Typography variant="h3" gutterBottom align="center">
        Welcome to AIO TECH Blog
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Explore articles and insights on technology, development, and innovation.
      </Typography>

      {/* Carousel Section */}
      <Box sx={{ mb: 5 }}>
        <Slider {...carouselSettings}>
          {featuredArticles.map((article, idx) => (
            <Card
              key={idx}
              sx={{
                backgroundColor: '#121212',
                color: '#fff',
                px: 2,
                py: 4,
                mx: 1,
                borderRadius: 2,
                height: 400
              }}
            >
              {article.image && (
                <CardMedia
                  component="img"
                  height="180"
                  image={article.image}
                  alt={article.title}
                />
              )}
              <Typography variant="h4" gutterBottom>
                {article.title}
              </Typography>
              <Typography variant="body1" paragraph>
                {article.description}
              </Typography>
              <Link to={`/article/${encodeURIComponent(article.title.toLowerCase().replace(/\s+/g, '-'))}`} style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={article.link}
                >
                  Read More
                </Button>
              </Link>
            </Card>
          ))}
        </Slider>
      </Box>

      {/* Articles Section */}
      <Typography variant="h4" gutterBottom>
        Articles
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our latest tech tips, tricks, tutorials, and news articles.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }} direction='column'>
        {sampleArticles.map((article, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff', height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2">{article.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  color="primary"
                  href={article.link}
                >
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid
} from '@mui/material';
import { Link } from 'react-router-dom'

export const sampleArticles = [
    {
        title: 'Phone as Gamepad',
        description:
            'How to use Android Phone as Gamepad for Android TV, Phone & VR',
        link: '#',
        content: `
            <h3>Bluetooth Gamepad</h3>
            <p> DownLoad Bluetooth Gamepad <a href="https://drive.google.com/file/d/1HebNnuW1NIzRx7Q3eNTkeyhvOFaS4m9l/view?usp=drive_link">click here</a></p>
            <p>Bored to read Articles, check out the video! <a href="https://youtu.be/4RQ7HeC_Ayw">click here</a></p>
            
            <h3>How this Works?</h3>
            <p>Gamepad for VR/TV is a Bluetooth-based application which turns your Android Phone into a Gamepad.</p>
      
            <h3>Installation Process for other than Android TV</h3>
            <p>You can use this application for VR and also for phones just by following the same process as mentioned above.</p>
      
            <h3>Supported Apps</h3>
            <p>We tried to use this application on various apps and found the best results. This application works well with apps requiring only four buttons.</p>
      
            <h3>BT Controller</h3>
            <p> DownLoad BT Controller <a href="https://drive.google.com/file/d/1O8eqLPepUH86jDNc4IR-uUceoGqW--WE/view?usp=sharing">click here</a></p>
            <p>Still facing Problem? Check out the <a href="https://youtu.be/4RQ7HeC_Ayw">video tutorial</a>!</p>
          `,
        image: 'https://i9.ytimg.com/vi/4RQ7HeC_Ayw/sddefault.jpg?v=5f90924a&sqp=CLT53sAG&rs=AOn4CLCH8ON8_3863jmAidHTBVdzmcUmVg', // Add the relevant image URL for this article
    },
      
    {
      title: 'OnePlus Nord Review after 2 Years',
      description:
        ' I have given Oxygen OS 12 F.14 update review along with 2 years of my Experience and Review of this smartphone i.e. OnePlus Nord. I have been using this device as my daily driver/primary smartphone for 2 years.',
      link: '#',
      image: 'https://i9.ytimg.com/vi_webp/pJZrdxtaWPY/maxresdefault.webp?v=62fa9ded&sqp=CJCF38AG&rs=AOn4CLDGY8vzLy7IFvpURUetF7Gto9Hwww',
    },
    {
      title: 'Best Budget Laptops for Students in 2025',
      description:
        'A curated list of top affordable laptops perfect for students and light usage.',
      link: '#',
      image: '/images/laptop.png',
    },
    {
      title: 'How to Install Custom ROMs on Android Devices',
      description:
        'A complete beginner-friendly guide to flashing custom ROMs safely.',
      link: '#',
      image: 'https://source.unsplash.com/featured/?android,customrom,root',
    },
    {
      title: '10 VS Code Extensions That Will Boost Your Coding Productivity',
      description:
        'Explore some must-have VS Code extensions that help streamline development workflow.',
      link: '#',
      image: 'https://source.unsplash.com/featured/?code,developer,vscode',
    },
    {
      title: 'What’s New in React 19 – A Quick Overview',
      description:
        'React 19 introduces powerful updates. Here’s a quick overview of the key new features.',
      link: '#',
      image: 'https://source.unsplash.com/featured/?reactjs,frontend,webdev',
    },
  ];
  

export default function Articles() {
  return (
    <Box sx={{ px: { xs: 2, sm: 5 }, py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Articles
      </Typography>
      <Typography variant="body1" paragraph>
        Explore our latest tech tips, tricks, tutorials, and news articles.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }} direction="column" >
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
              <Link to={`/article/${encodeURIComponent(article.title.toLowerCase().replace(/\s+/g, '-'))}`} style={{ textDecoration: 'none' }}>
                  <Button size="small" variant="outlined" color="primary">
                    Read More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

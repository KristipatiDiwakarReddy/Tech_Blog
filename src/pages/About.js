import React from 'react';
import { Box, Grid, Card, CardContent, Avatar, Typography } from '@mui/material';

const team = [
  {
    name: "K. V. Diwakar Reddy",
    role: "Video Creator",
    email: "diwakar@aiotechkd.com",
    image: "/images/diwakar.jpeg",
    instagram: "https://www.instagram.com/kristipatidiwakarreddy/"
  },
  {
    name: "Mohammed Kaif",
    role: "Web Designer",
    image: "/images/kaif.jpg",
    instagram: "https://www.instagram.com/mohammedkaifns/",
    email: "mohammedkaifns@gmail.com",
  },
  {
    name: "Nikhil Dalabanjan",
    role: "Web Developer",
    image: "/images/nikhil.png",
    instagram: "https://www.instagram.com/nikhil_djn_/",
    email: "dnikhil0306@gmail.com",
  },
  {
    name: "Fahad Sait",
    role: "Content Creator",
    image: "/images/fahad.jpeg",
    instagram: "https://www.instagram.com/fksait/",
    email: "fksait9038@gmail.com",
  },
  {
    name: "S. KOUSHIK",
    role: "DevOps",
    image: "/images/koushik.jpeg",
    instagram: "https://www.instagram.com/salanki_koushik/",
    email: "salankikoushik07@gmail.com",
  }
];
  

export default function About() {
  return (

    <Box sx={{ px: { xs: 2, sm: 5 }, py: 4 }}>
      <Typography variant="h3" gutterBottom>
        ABOUT
      </Typography>

      <Typography variant="body1" paragraph>
        We aim to serve people by resolving their tech problems. On this website, we post content related to tech — including tips, tricks, and tutorials — mainly focusing on phones, computers, and other gadgets.
      </Typography>

      <Typography variant="body1" paragraph>
        We generally post three kinds of content:
        <ul>
          <li>Latest Tech News</li>
          <li>Knowledge to enhance your tech skills</li>
          <li>Installation guides, tricks, & tips</li>
        </ul>
      </Typography>
   
      <Typography variant="h3" gutterBottom>
        Our Squad
      </Typography>

      <Grid container spacing={3} direction="column">
        {team.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ backgroundColor: '#1e1e1e', color: '#fff' }}>
            <CardContent>
                <Grid container alignItems="center" justifyContent="space-evenly">
                {/* Left: Name and Role */}
                <Grid
                    item
                    sx={{
                    flexBasis: '200px',
                    maxWidth: '200px',
                    textAlign: 'center',
                    }}
                >
                    <Typography variant="h6">{member.name}</Typography>
                    <Typography variant="body2" color="gray">{member.role}</Typography>
                </Grid>

                {/* Center: Image with Instagram link */}
                <Grid item xs={12} sm={4} textAlign="center">
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                    {member.image ? (
                        <Avatar
                        alt={member.name}
                        src={member.image}
                        sx={{ width: 100, height: 100, mx: 'auto', cursor: 'pointer' }}
                        />
                    ) : (
                        <Avatar sx={{ bgcolor: '#2196f3', width: 100, height: 100, mx: 'auto', cursor: 'pointer' }}>
                        {member.name[0]}
                        </Avatar>
                    )}
                    </a>
                </Grid>

                {/* Right: Contact */}
                <Grid
                    item
                    sx={{
                    flexBasis: '200px',
                    maxWidth: '200px',
                    textAlign: 'center',
                    }}
                >
                    <Typography variant="body2">
                    Contact –{' '}
                    <a href={`mailto:${member.email}`} style={{ color: '#90caf9' }}>
                        {member.email}
                    </a>
                    </Typography>
                </Grid>
                </Grid>
            </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

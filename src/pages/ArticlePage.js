import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { sampleArticles } from './Articles'; // Import sampleArticles

export default function ArticlePage() {
  const { slug } = useParams(); // Get the slug from the URL
  const article = sampleArticles.find(a => slug === a.title.toLowerCase().replace(/\s+/g, '-'));

  if (!article) {
    return <Typography variant="h5">Article not found!</Typography>;
  }

  return (
    <Box sx={{ px: { xs: 2, sm: 5 }, py: 4 }}>
      <Typography variant="h3" gutterBottom>
        {article.title}
      </Typography>
      <div
        dangerouslySetInnerHTML={{ __html: article.content }} // Render the HTML content
      />
    </Box>
  );
}

import React from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

export default function Contact() {
  return (
    <Box sx={{ px: { xs: 2, sm: 5 }, py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Contact Us
      </Typography>

      <Typography variant="body1" paragraph>
        We'd love to hear from you! Please reach out with any questions, feedback, or collaboration ideas.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }} direction="column">
        <Grid item xs={12} sm={6}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            label="Your Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Your Message"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
            required
            InputLabelProps={{ style: { color: 'white' } }}
            InputProps={{ style: { color: 'white' } }}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Direct Contact
        </Typography>
        <Typography>
          📧 Email: <strong>diwakar@aiotechkd.com</strong>
        </Typography>
      </Box>
    </Box>
  );
}

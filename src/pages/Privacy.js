import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Privacy() {
  return (
    <Box sx={{ px: { xs: 2, sm: 5 }, py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Privacy Policy
      </Typography>

      <Typography variant="h5" gutterBottom>
        AIO TECH Privacy Policy
      </Typography>

      <Typography paragraph>
        This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from <Link href="https://www.aiotechkd.com" target="_blank" rel="noopener" color="primary">www.aiotechkd.com</Link> (the “Site”).
      </Typography>

      <Typography variant="h6" gutterBottom>
        PERSONAL INFORMATION WE COLLECT
      </Typography>
      <Typography paragraph>
        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.”
      </Typography>

      <Typography variant="h6" gutterBottom>
        HOW DO WE USE YOUR PERSONAL INFORMATION?
      </Typography>
      <Typography paragraph>
        We use this information to: communicate with you;
        and when in line with the preferences you have shared with us, provide you with information or advertising relating to our products or services.
      </Typography>
      <Typography paragraph>
        We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
      </Typography>
      <Typography paragraph>
        Finally, we may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
      </Typography>

      <Typography variant="h6" gutterBottom>
        BEHAVIOURAL ADVERTISING
      </Typography>
      <Typography paragraph>
        As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For more information about how targeted advertising works, you can visit the Network Advertising Initiative’s educational page at{' '}
        <Link href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work" target="_blank" rel="noopener" color="primary">
          www.networkadvertising.org
        </Link>.
      </Typography>

      <Typography variant="h6" gutterBottom>
        DO NOT TRACK
      </Typography>
      <Typography paragraph>
        Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.
      </Typography>

      <Typography variant="h6" gutterBottom>
        CHANGES
      </Typography>
      <Typography paragraph>
        We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
      </Typography>

      <Typography variant="h6" gutterBottom>
        CONTACT US
      </Typography>
      <Typography paragraph>
        For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at{' '}
        <Link href="mailto:diwakar@aiotechkd.com" color="primary">diwakar@aiotechkd.com</Link> or by mail using the details provided below:
      </Typography>
    </Box>
  );
}

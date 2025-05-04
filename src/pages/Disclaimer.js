import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export default function Disclaimer() {
  return (
    <Box sx={{ px: { xs: 2, sm: 5 }, py: 4 }}>
      <Typography variant="h3" gutterBottom>
        Disclaimer
      </Typography>

      <Typography variant="h5" gutterBottom>
        AIO TECH
      </Typography>

      <Typography paragraph>
        If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at{' '}
        <Link href="mailto:diwakar@aiotechkd.com" color="primary">diwakar@aiotechkd.com</Link>
      </Typography>

      <Typography variant="h6" gutterBottom>
        Disclaimers for AIO TECH
      </Typography>
      <Typography paragraph>
        All the information on this website – <Link href="https://www.aiotechkd.com" target="_blank" rel="noopener" color="primary">www.aiotechkd.com</Link> – is published in good faith and for general information purpose only. AIO TECH does not make any warranties about the completeness, reliability and accuracy of this information.
      </Typography>
      <Typography paragraph>
        Any action you take upon the information you find on this website (AIO TECH), is strictly at your own risk. AIO TECH will not be liable for any losses and/or damages in connection with the use of our website.
      </Typography>
      <Typography paragraph>
        From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.
      </Typography>
      <Typography paragraph>
        Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Consent
      </Typography>
      <Typography paragraph>
        By using our website, you hereby consent to our disclaimer and agree to its terms.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Update
      </Typography>
      <Typography paragraph>
        If we update, amend or make any changes to this document, those changes will be prominently posted here.
      </Typography>
    </Box>
  );
}

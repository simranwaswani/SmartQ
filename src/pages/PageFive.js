import React from 'react';
import { Container, Typography } from '@mui/material';
import Page from '../components/Page';
import CompleteQueue from '../components/general-app/CompleteQueue'; 

export default function PageFive() {
  return (
    <Page title="Page Five | Minimal-UI">
      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph>
          Page Five
        </Typography>
        <CompleteQueue /> 
       
      </Container>
    </Page>
  );
}

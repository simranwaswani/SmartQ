import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';
import { TextField, Grid, Card, Stack, Box, Button } from '@mui/material';

export default function AccountLocation() {
  const UpdateLocationSchema = Yup.object().shape({
    address: Yup.string().required('Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    postalCode: Yup.string().required('Postal code is required'),
    longitude: Yup.string().required('Longitude is required'),
    latitude: Yup.string().required('Latitude is required'),
  });

  const formik = useFormik({
    initialValues: {
      address: '',
      city: '',
      state: '',
      postalCode: '',
      longitude: '',
      latitude: '',
    },
    validationSchema: UpdateLocationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Add your submit logic here
    },
  });

  const { handleSubmit, getFieldProps, touched, errors } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, width: '100%' }}>
              <Stack spacing={2}>
                <TextField
                  fullWidth
                  label="Address"
                  {...getFieldProps('address')}
                  error={touched.address && !!errors.address}
                  helperText={touched.address && errors.address}
                />
                <TextField
                  fullWidth
                  label="City"
                  {...getFieldProps('city')}
                  error={touched.city && !!errors.city}
                  helperText={touched.city && errors.city}
                />
                <TextField
                  fullWidth
                  label="State"
                  {...getFieldProps('state')}
                  error={touched.state && !!errors.state}
                  helperText={touched.state && errors.state}
                />
                <TextField
                  fullWidth
                  label="Postal Code"
                  {...getFieldProps('postalCode')}
                  error={touched.postalCode && !!errors.postalCode}
                  helperText={touched.postalCode && errors.postalCode}
                />
                <TextField
                  fullWidth
                  label="Longitude"
                  {...getFieldProps('longitude')}
                  error={touched.longitude && !!errors.longitude}
                  helperText={touched.longitude && errors.longitude}
                />
                <TextField
                  fullWidth
                  label="Latitude"
                  {...getFieldProps('latitude')}
                  error={touched.latitude && !!errors.latitude}
                  helperText={touched.latitude && errors.latitude}
                />
              </Stack>
              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
                <Button type="submit" variant="contained">
                  Save Changes
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Form>
    </FormikProvider>
  );
}

import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Card,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Switch,
  TextField,
  Typography,
  FormHelperText,
  InputLabel,
  Select,
  Button // Add this import
} from '@mui/material';

// Define the validation schema
const BusinessProfileSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  type: Yup.string().required('Type is required'),
  service: Yup.string().required('Service is required'),
  subcategory: Yup.string().when('service', {
    is: (val) => val && val.length > 0,
    then: Yup.string().required('Subcategory is required')
  }),
  price: Yup.number().required('Price is required'),
  description: Yup.string().required('Description is required')
});

const services = [
  { label: 'Health', value: 'health', subcategories: ['Dentist', 'Dermatologist', 'Neurologist'] },
  { label: 'Technology', value: 'technology', subcategories: ['Software Development', 'Network Administration', 'Data Analysis'] }
];

export default function AccountBusinessProfile() {
  const formik = useFormik({
    initialValues: {
      name: '',
      type: '',
      service: '',
      subcategory: '',
      price: '',
      description: '',
      isPublic: false
    },
    validationSchema: BusinessProfileSchema,
    onSubmit: (values) => {
      console.log(values);
      // Your submit logic here
    }
  });

  const { values, errors, touched, isSubmitting, handleSubmit, handleChange, setFieldValue } = formik;
  const [subcategories, setSubcategories] = useState([]);

  const handleServiceChange = (event) => {
    const { value } = event.target;
    setFieldValue('service', value);
    const selectedService = services.find((service) => service.value === value);
    setSubcategories(selectedService ? selectedService.subcategories : []);
  };

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Business Profile
      </Typography>

      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Type"
              name="type"
              value={values.type}
              onChange={handleChange}
              error={touched.type && Boolean(errors.type)}
              helperText={touched.type && errors.type}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth error={touched.service && Boolean(errors.service)}>
              <InputLabel id="service-label">Service</InputLabel>
              <Select
                labelId="service-label"
                id="service"
                name="service"
                value={values.service}
                onChange={handleServiceChange}
              >
                {services.map((service) => (
                  <MenuItem key={service.value} value={service.value}>
                    {service.label}
                  </MenuItem>
                ))}
              </Select>
              {touched.service && <FormHelperText>{errors.service}</FormHelperText>}
            </FormControl>
          </Grid>

          {values.service && (
            <Grid item xs={12}>
              <FormControl fullWidth error={touched.subcategory && Boolean(errors.subcategory)}>
                <InputLabel id="subcategory-label">Subcategory</InputLabel>
                <Select
                  labelId="subcategory-label"
                  id="subcategory"
                  name="subcategory"
                  value={values.subcategory}
                  onChange={handleChange}
                >
                  {subcategories.map((subcategory) => (
                    <MenuItem key={subcategory} value={subcategory}>
                      {subcategory}
                    </MenuItem>
                  ))}
                </Select>
                {touched.subcategory && <FormHelperText>{errors.subcategory}</FormHelperText>}
              </FormControl>
            </Grid>
          )}

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              type="number"
              value={values.price}
              onChange={handleChange}
              error={touched.price && Boolean(errors.price)}
              helperText={touched.price && errors.price}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              multiline
              rows={4}
              value={values.description}
              onChange={handleChange}
              error={touched.description && Boolean(errors.description)}
              helperText={touched.description && errors.description}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={<Switch checked={values.isPublic} onChange={handleChange} name="isPublic" />}
              label="Public Profile"
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}

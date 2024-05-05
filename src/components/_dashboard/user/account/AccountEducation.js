import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Card,
  Grid,
  Stack,
  TextField,
  Typography,
  FormHelperText,
  Button
} from '@mui/material';

// Define the validation schema
const EducationSchema = Yup.object().shape({
  school: Yup.string().required('School is required'),
  fieldOfStudy: Yup.string().required('Field of Study is required'),
  degree: Yup.string().required('Degree is required'),
  startAt: Yup.date().required('Start date is required'),
  endAt: Yup.date().required('End date is required'),
  description: Yup.string().required('Description is required')
});

export default function AccountEducation() {
  const formik = useFormik({
    initialValues: {
      school: '',
      fieldOfStudy: '',
      degree: '',
      startAt: '',
      endAt: '',
      description: ''
    },
    validationSchema: EducationSchema,
    onSubmit: (values) => {
      console.log(values);
      // Your submit logic here
    }
  });

  const { values, errors, touched, isSubmitting, handleSubmit, handleChange } = formik;

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Education
      </Typography>

      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="School"
              name="school"
              value={values.school}
              onChange={handleChange}
              error={touched.school && Boolean(errors.school)}
              helperText={touched.school && errors.school}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Field of Study"
              name="fieldOfStudy"
              value={values.fieldOfStudy}
              onChange={handleChange}
              error={touched.fieldOfStudy && Boolean(errors.fieldOfStudy)}
              helperText={touched.fieldOfStudy && errors.fieldOfStudy}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Degree"
              name="degree"
              value={values.degree}
              onChange={handleChange}
              error={touched.degree && Boolean(errors.degree)}
              helperText={touched.degree && errors.degree}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Start At"
              name="startAt"
              type="date"
              value={values.startAt}
              onChange={handleChange}
              error={touched.startAt && Boolean(errors.startAt)}
              helperText={touched.startAt && errors.startAt}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="End At"
              name="endAt"
              type="date"
              value={values.endAt}
              onChange={handleChange}
              error={touched.endAt && Boolean(errors.endAt)}
              helperText={touched.endAt && errors.endAt}
              InputLabelProps={{
                shrink: true,
              }}
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
            <Button variant="contained" type="submit" disabled={isSubmitting}>
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}

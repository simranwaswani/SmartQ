import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Card, FormControlLabel, Grid, Stack, Switch, TextField, Typography } from '@mui/material';

export default function AccountOperation() {
  const formik = useFormik({
    initialValues: {
      from: '',
      to: '',
      start: '',
      end: ''
    },
    validationSchema: Yup.object().shape({
      from: Yup.string().required('From is required'),
      to: Yup.string().required('To is required'),
      start: Yup.string().required('Start time is required'),
      end: Yup.string().required('End time is required')
    }),
    onSubmit: (values) => {
      console.log(values);
      // Your submit logic here
    }
  });

  const { values, errors, touched, handleSubmit, handleChange } = formik;

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Weekday
      </Typography>

      <form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="From"
              name="from"
              value={values.from}
              onChange={handleChange}
              error={touched.from && Boolean(errors.from)}
              helperText={touched.from && errors.from}
            >
              <option value="">Select</option>
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              select
              label="To"
              name="to"
              value={values.to}
              onChange={handleChange}
              error={touched.to && Boolean(errors.to)}
              helperText={touched.to && errors.to}
            >
              <option value="">Select</option>
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Operation Time
            </Typography>
            <TextField
              fullWidth
              type="time"
              name="start"
              value={values.start}
              onChange={handleChange}
              error={touched.start && Boolean(errors.start)}
              helperText={touched.start && errors.start}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>&nbsp;</Typography> {/* Spacer to align with other text fields */}
            <TextField
              fullWidth
              type="time"
              name="end"
              value={values.end}
              onChange={handleChange}
              error={touched.end && Boolean(errors.end)}
              helperText={touched.end && errors.end}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </form>
    </Card>
  );
}

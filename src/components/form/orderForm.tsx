import React, { FC } from 'react';
import { Button, FormGroup, Grid, TextField, Typography } from '@mui/material';
import TextInput from '../shared/textInput/textInput';
import {
  orderForm,
  textInput,
  button,
  buttonContainer,
} from './orderForm.module.css';

const OrderForm: FC = () => (
  <FormGroup className={orderForm}>
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Typography align="center" variant="h4" component="h3">
          Want to make order?
        </Typography>
        <Typography align="center" variant="body2" component="p">
          Fill the form and we will contact with you
        </Typography>
      </Grid>
      <Grid item sm={12} md={6}>
        <TextInput label="Name" id="name" />
      </Grid>
      <Grid item sm={12} md={6}>
        <TextInput label="Last Name" id="last-name" />
      </Grid>
      <Grid item sm={12}>
        <TextInput label="E-mail" id="e-mail" type="email" />
      </Grid>
      <Grid item sm={12}>
        <TextField
          id="message"
          placeholder="Message"
          multiline
          rows={4}
          fullWidth
          className={textInput}
        />
      </Grid>
      <Grid item sm={12} className={buttonContainer}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={button}
        >
          Send
        </Button>
      </Grid>
    </Grid>
  </FormGroup>
);

export default OrderForm;

import React, { useState } from 'react';
import {
  Button,
  FormControl,
  Icon,
  Input,
  InputLabel,
  makeStyles,
  TextField,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import './form.css';
import useForm from '../../hooks/useForm';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(2, 0),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },

  buttonIcon: {
    paddingLeft: 1,
  },
}));

const initial = {
  nom: '',
  email: '',
  nomSociete: '',
  numTel: '',
  message: '',
};

const ContactForm = () => {
  const { state, handleInputChange } = useForm(initial);

  const { nom, email, nomSociete, numTel, message } = state;

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('envoyer');
  };

  return (
    <form
      noValidate
      autoComplete='off'
      className={classes.root}
      onSubmit={handleSubmit}>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel>Nom</InputLabel>
        <Input value={nom} name='nom' onChange={handleInputChange} required />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel>Adresse Mail</InputLabel>
        <Input
          type='email'
          name='email'
          onChange={handleInputChange}
          value={email}
          required
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel>Nom de la société</InputLabel>
        <Input
          value={nomSociete}
          name='nomSociete'
          onChange={handleInputChange}
          required
        />
      </FormControl>
      <FormControl fullWidth className={classes.margin}>
        <InputLabel>Numéro de Téléphone</InputLabel>
        <Input
          value={numTel}
          name='numTel'
          onChange={handleInputChange}
          required
        />
      </FormControl>

      <TextField
        fullWidth
        className={classes.margin}
        id='outlined-multiline-static'
        label='Message'
        multiline
        rows={5}
        name='message'
        value={message}
        onChange={handleInputChange}
        variant='outlined'
      />

      <Button
        type='submit'
        variant='contained'
        color='primary'
        className='submit'
        style={{
          display: 'flex',
          margin: 'auto',
        }}
        endIcon={<SendIcon />}>
        Envoyer
      </Button>
    </form>
  );
};

export default ContactForm;

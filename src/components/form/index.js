import React from 'react';
import {
  Button,
  FormControl,
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
    margin: theme.spacing(1.5, 0),
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
  const { state, handleInputChange, errors, setErrors } = useForm(initial);

  const { nom, email, nomSociete, numTel, message } = state;

  const classes = useStyles();

  const estValide = () => {
    const validator = {};

    validator.nom = nom ? null : 'le champ nom est obligatore';
    validator.message =
      message.length > 10
        ? null
        : 'le champ message doit avoir au moins 10 caractères';
    validator.nomSociete = nomSociete
      ? null
      : 'le champ nom societé est obligatore';

    validator.email = /([a-zA-Z0-9-_.+]{5,})@.+\..+/.test(email)
      ? null
      : "Email n'est pas valide";

    validator.numTel = /(?:(\+(\d{1,2})?)[ -]?)?\(?(?<first>\d{3})\)?[-\s]?(\d{3})[- ]?(\d{4})/.test(
      numTel
    )
      ? null
      : "Numéro de téléphone n'est pas valide";

    setErrors({ ...validator });

    return Object.values(validator).every((el) => !el);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (estValide()) {
      alert('envoyer');
    }
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
      <div className='error'>{errors.nom}</div>

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
      <div className='error'>{errors.email}</div>

      <FormControl fullWidth className={classes.margin}>
        <InputLabel>Nom de la société</InputLabel>
        <Input
          value={nomSociete}
          name='nomSociete'
          onChange={handleInputChange}
          required
        />
      </FormControl>
      <div className='error'>{errors.nomSociete}</div>

      <FormControl fullWidth className={classes.margin}>
        <InputLabel>Numéro de Téléphone</InputLabel>
        <Input
          value={numTel}
          name='numTel'
          onChange={handleInputChange}
          required
        />
      </FormControl>
      <div className='error'>{errors.numTel}</div>

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
      <div className='error'>{errors.message}</div>

      <Button
        type='submit'
        variant='contained'
        color='primary'
        className='submit'
        endIcon={<SendIcon />}>
        Envoyer
      </Button>
    </form>
  );
};

export default ContactForm;

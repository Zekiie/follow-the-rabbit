import React, { FC } from 'react';
import { FormControl, OutlinedInput } from '@mui/material';
import { textInput } from './textInput.module.css';

interface TextInputInterface {
  label: string;
  id: string;
  type?: string;
}
const TextInput: FC<TextInputInterface> = ({ label, id, type }) => (
  <FormControl variant="outlined" fullWidth>
    <OutlinedInput
      id={id}
      inputProps={{
        'aria-label': label,
      }}
      type={type}
      placeholder={label}
      className={textInput}
    />
  </FormControl>
);

export default TextInput;

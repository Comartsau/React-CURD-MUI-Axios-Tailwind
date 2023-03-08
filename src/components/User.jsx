import * as React from 'react';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

function User() {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 5 },
    }}
    noValidate
    autoComplete="off"
  >
    <FormControl>
      <InputLabel htmlFor="component-outlined">ID</InputLabel>
      <OutlinedInput
        id="component-outlined"
        defaultValue="Composed TextField"
        label="ID"
      />
    </FormControl>
    
  </Box>
  )
}

export default User
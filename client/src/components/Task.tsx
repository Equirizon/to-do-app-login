import TextField from '@mui/material/TextField';

export default function Task({ label }) {
  return (
    <TextField
      required
      id="outlined-required"
      label="Required"
      defaultValue={label}
      sx={{ width: '100%' }}
    />
  );
}

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

export default function AddTask({setTasks}) {
  return (
    <div className="textfield">
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Enter new task here."
        sx={{ width: '100%' }}
      />
      <IconButton sx={{ background: 'blue', color: 'white' }} onClick={() => setTasks()}>
        <SpeedDialIcon />
      </IconButton>
    </div>
  );
}

import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

export default function AddTask({ setValue, value, setTasks }) {
  return (
    <div className="textfield">
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Enter new task here."
        value={value}
        sx={{ width: '100%' }}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton sx={{ background: 'blue', color: 'white' }} onClick={() => setTasks((tasks) => tasks.concat(value))}>
        <SpeedDialIcon />
      </IconButton>
    </div>
  );
}

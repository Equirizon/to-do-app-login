import Card from '@mui/material/Card';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
export default function Task({ label, deleteTask }) {
  return (
    <div style={{ position: 'relative' }}>
      <Card
        sx={{
          minWidth: 275,
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '100px',
        }}
      >
        {label}
      </Card>
      <IconButton
        sx={{
          background: 'blue',
          color: 'white',
          position: 'absolute',
          top: 1,
          right: -10,
        }}
        onClick={() => deleteTask()}
      >
        <CloseIcon />
      </IconButton>
    </div>
  );
}

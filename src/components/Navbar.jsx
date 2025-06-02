// components/Navbar.js
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const NAVBAR_HEIGHT = 58;

export default function Navbar({ toggleSidebar }) {
  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={1}
      sx={{
        height: NAVBAR_HEIGHT,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ minHeight: NAVBAR_HEIGHT }}>
        <IconButton edge="start" color="inherit" onClick={toggleSidebar} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Panel
        </Typography>
        <Typography variant="body1">👤 Admin</Typography>
      </Toolbar>
    </AppBar>
  );
}

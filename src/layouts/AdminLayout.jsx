import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery, useTheme, Drawer } from '@mui/material';

const SIDEBAR_WIDTH = 240;
const NAVBAR_HEIGHT = 58;

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar at top */}
      <Navbar toggleSidebar={toggleSidebar} />

      <Box sx={{ display: 'flex', flexGrow: 1, pt: `${NAVBAR_HEIGHT}px` }}>
        {/* Sidebar - Desktop only */}
        {!isMobile && sidebarOpen && (
          <Box
            sx={{
              width: SIDEBAR_WIDTH,
              flexShrink: 0,
              overflowX: 'hidden',
              position: 'relative',
              zIndex: theme.zIndex.drawer,
            }}
          >
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          </Box>
        )}

        {/* Sidebar Drawer - Mobile only */}
        {isMobile && (
          <Drawer
            variant="temporary"
            open={sidebarOpen}
            onClose={toggleSidebar}
            ModalProps={{ keepMounted: true }} // Better open performance on mobile
            sx={{
              '& .MuiDrawer-paper': {
                width: SIDEBAR_WIDTH,
              },
            }}
          >
            <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
          </Drawer>
        )}

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2,
            width: '100%',
            height: 'calc(100vh - 58px)',  // full height minus navbar
            overflowY: 'auto',             // scroll if content overflows
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

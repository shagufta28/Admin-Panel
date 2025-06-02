import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ExpandLess, ExpandMore, Close } from '@mui/icons-material';
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const SIDEBAR_WIDTH = 240;
const NAVBAR_HEIGHT = 58;

const menu = [
  { name: 'Dashboard', path: '/admin' },
  {
    name: 'Analytics',
    children: [
      { name: 'Signups', path: '/admin/analytics/signups' },
      { name: 'Payment', path: '/admin/analytics/payment' },
    ],
  },
  {
    name: 'Content',
    children: [
      {
        name: 'Imports',
        children: [
          { name: 'Import from Database', path: '/admin/content/imports/database-import' },
          { name: 'Unsubscribe', path: '/admin/content/imports/unsubscribe' },
        ],
      },
      {
        name: 'Personal Content',
        children: [
          {
            name: 'Add New',
            children: [
              { name: 'Test', path: '/admin/content/personal-content/test' },
              { name: 'Categories', path: '/admin/content/personal-content/categories' },
              { name: 'Import from Doc / CSV', path: '/admin/content/personal-content/importfromdoc' },
            ],
          },
          { name: 'All Tests', path: '/admin/content/all-tests' },
          { name: 'Edit Categories', path: '/admin/content/edit-categories' },
        ],
      },
    ],
  },
  {
    name: 'Courses & Packages',
    children: [
      { name: 'Live Class Courses', path: '/admin/courses/live-class' },
      { name: 'Video Courses', path: '/admin/courses/video-courses' },
      { name: 'E-Library', path: '/admin/courses/e-library' },
      { name: 'Test Series', path: '/admin/courses/test-series' },
    ],
  },
  {
    name: 'Activation Keys & Coupons',
    children: [
      { name: 'Activation Keys', path: '/admin/activation-keys' },
    ],
  },
  {
    name: 'Customization',
    children: [
      {
        name: 'Customize Webpages',
        children: [
          { name: 'Homepage', path: '/admin/customization/homepage' },
          { name: 'Login/Signup', path: '/admin/customization/login-signup' },
        ],
      },
      { name: 'Current Affairs', path: '/admin/customization/current-affairs' },
      { name: 'Daily News', path: '/admin/customization/daily-news' },
      { name: 'Exam Reordering', path: '/admin/customization/exam-reordering' },
      { name: 'Add Exam Images', path: '/admin/customization/exam-images' },
      { name: 'Homepage Offer Ads', path: '/admin/customization/offer-ads' },
    ],
  },
  {
    name: 'Settings',
    children: [
      { name: 'Update Site Info', path: '/admin/settings/site-info' },
      { name: 'Social Login & SSO', path: '/admin/settings/social-login' },
    ],
  },
  {
    name: 'Manage Users',
    children: [
      { name: 'Add User', path: '/admin/users/add' },
      { name: 'Edit User', path: '/admin/users/edit' },
    ],
  },
  { name: 'Notifications', path: '/admin/notifications' },
  { name: 'Marketing & Dev Kit', path: '/admin/marketing' },
  { name: 'Test Report', path: '/admin/test-report' },
  { name: 'Add-ons Marketplace', path: '/admin/addons' },
  { name: "User's Feedback", path: '/admin/feedback' },
  { name: 'Support', path: '/admin/support' },
  { name: 'Logout', path: '/home' },
];

export default function Sidebar({ isOpen = true, toggleSidebar }) {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [open, setOpen] = useState({});

  useEffect(() => {
    const newOpen = {};

    const checkAndOpenParents = (items) => {
      items.forEach((item) => {
        if (item.children) {
          const isChildActive = item.children.some(
            (child) =>
              (child.path && location.pathname.startsWith(child.path)) ||
              (child.children && checkAndOpenParents([child]))
          );
          if (isChildActive) {
            newOpen[item.name] = true;
          }
          checkAndOpenParents(item.children);
        }
      });
    };

    checkAndOpenParents(menu);
    setOpen((prev) => ({ ...prev, ...newOpen }));
  }, [location.pathname]);

  const handleToggle = (section) => {
    setOpen((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const renderMenuItems = (items, level = 0) =>
    items.map((item) => {
      const hasChildren = Array.isArray(item.children);
      const isOpen = open[item.name] || false;

      return (
        <div key={item.name}>
          <ListItemButton
            onClick={() => hasChildren && handleToggle(item.name)}
            component={!hasChildren && item.path ? NavLink : 'div'}
            to={item.path || undefined}
            sx={{
              pl: 2 + level * 2,
              '&.active': {
                backgroundColor: '#e0e0e0',
              },
            }}
          >
            <ListItemText primary={item.name} />
            {hasChildren && (isOpen ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>

          {hasChildren && (
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List disablePadding>
                {renderMenuItems(item.children, level + 1)}
              </List>
            </Collapse>
          )}
        </div>
      );
    });

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      anchor="left"
      open={isOpen}
      onClose={isMobile ? toggleSidebar : undefined}
      ModalProps={{ keepMounted: true }}
      sx={{
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: SIDEBAR_WIDTH,
          top: isMobile ? 0 : `${NAVBAR_HEIGHT}px`,
          height: isMobile ? '100vh' : `calc(100% - ${NAVBAR_HEIGHT}px)`,
          boxSizing: 'border-box',
        },
      }}
    >
      {/* Show close button only on mobile */}
      {isMobile && (
        <IconButton onClick={toggleSidebar} sx={{ ml: 'auto', display: 'block' }}>
          <Close />
        </IconButton>
      )}

      <List>{renderMenuItems(menu)}</List>
    </Drawer>
  );
}

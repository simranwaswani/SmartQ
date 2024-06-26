// ----------------------------------------------------------------------
function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';
const ROOTS_AUTH = '/auth';

// ----------------------------------------------------------------------
export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  register: path(ROOTS_AUTH, '/register'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify'),
  newPassword: path(ROOTS_AUTH, '/new-password'),
  page401: path(ROOTS_AUTH, '/401')
};

export const PATH_LANDING ={
  root: '/',
  home: path('/', '/home'),
  about: path('/', '/about'),
  contact: path('/', '/contact'),
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  auth:{
    login: path(ROOTS_DASHBOARD, '/login'),
    register: path(ROOTS_DASHBOARD, '/register'),
    resetPassword: path(ROOTS_DASHBOARD, '/reset-password'),
    verify: path(ROOTS_DASHBOARD, '/verify'),
    newPassword: path(ROOTS_DASHBOARD, '/new-password'),
    page401: path(ROOTS_DASHBOARD, '/401')
  },
  general: {
    home: path(ROOTS_DASHBOARD, '/home'),
    transactions: path(ROOTS_DASHBOARD, '/transactions'),
    queue: path(ROOTS_DASHBOARD, '/queue'),
    pageFive: path(ROOTS_DASHBOARD, '/page-five'),
    request: path(ROOTS_DASHBOARD, '/request') 
  },
  app: {
    root: path(ROOTS_DASHBOARD, '/app'),
    pageFour: path(ROOTS_DASHBOARD, '/app/four'),
   pageFive: path(ROOTS_DASHBOARD, '/app/five'),
    pageSix: path(ROOTS_DASHBOARD, '/app/six')
  },
  user: {
    root: path(ROOTS_DASHBOARD, '/user-account') 

  }
};

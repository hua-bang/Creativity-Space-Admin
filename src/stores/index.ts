import React from 'react';
import UserStore from './user';

const storesContext = React.createContext({
  userStore: new UserStore()
});

export default storesContext;
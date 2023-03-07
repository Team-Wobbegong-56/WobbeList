import React from 'react';

const UserContext = React.createContext({
  user: null, 
  setUser: () => {}
});

export default UserContext;
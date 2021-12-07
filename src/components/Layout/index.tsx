import React from 'react';

import Chat from '../Chat';
import ChatData from '../ChatData';
import ContactInfo from '../ContactInfo';
import Sidebar from '../Sidebar';
import UserAccount from '../UserAccount';
import { Grid } from './styles';

const Layout = function () {
  return (
    <Grid>
      <UserAccount />
      <Sidebar />
      <ContactInfo />
      <Chat />
      <ChatData />
    </Grid>
  );
};

export default Layout;

import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { Button, Toolbar } from '@material-ui/core';
const Navigation = () => {
  return (
    <Toolbar>
      <Button color="inherit">
        <NavLink to="/">Home</NavLink>
      </Button>
      <Button component={({ ...props }) => <Link to="/path" {...props} />}>
        Path
      </Button>
      <Button color="inherit" component={Link} to="/home">
        Home
      </Button>
      <Button color="inherit" component={Link} to="/login">
        Login
      </Button>
      <Button color="inherit" component={Link} to="/profile">
        Profile
      </Button>
      <Button
        label="Details"
        containerElement={<Link to="/coder-details" />}
        linkButton={true}
      />
      <Button>
        <Link to="/login">Login</Link>
      </Button>

      <Link to="/">
        <Button color="inherit">Home</Button>
      </Link>
      <Button color="inherit">Button</Button>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/" />
    </Toolbar>
  );
};

export default Navigation;

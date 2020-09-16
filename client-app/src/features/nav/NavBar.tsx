import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img src="/images/logo.png" alt="logo" style={{marginRight:'10px'}}/>
          Reactivites
          </Menu.Item>
        <Menu.Item name='Activites'>




        </Menu.Item>
        <Menu.Item>
            <Button positive content='Create Activity'></Button>


        </Menu.Item>
          
      </Container>
    </Menu>
  );
};

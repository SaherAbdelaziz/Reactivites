import React from "react";
import { Interface } from "readline";
import { Button, Container, Menu } from "semantic-ui-react";

interface IProps {
  openCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <img
            src="/images/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivites
        </Menu.Item>
        <Menu.Item name="Activites"></Menu.Item>
        <Menu.Item>
          <Button
            onClick={openCreateForm}
            positive
            content="Create Activity"
          ></Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

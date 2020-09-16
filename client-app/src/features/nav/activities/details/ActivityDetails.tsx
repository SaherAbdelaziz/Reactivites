import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";

export const ActivityDetails = () => {
  return (
    <Card fluid>
      <Image
        src="/Images/placeholder.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
            <Button basic color='blue' content='Edit'></Button>
            <Button basic color='grey' content='Cancel'></Button>


        </Button.Group>
      </Card.Content>
    </Card>
  );
};

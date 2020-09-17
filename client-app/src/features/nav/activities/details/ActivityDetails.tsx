import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { IActivity } from "../../../../app/layout/models/activity";

interface IProps {
  activity: IActivity;
  setEditMode: (editMode: boolean) => void;
  SetSelectedActivity: (activity: IActivity | null) => void;
}

export const ActivityDetails: React.FC<IProps> = ({
  activity,
  setEditMode,
  SetSelectedActivity,
}) => {
  return (
    <Card fluid>
      <Image
        src={`/Images/categoryImages/${activity.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span className="date">{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => setEditMode(true)}
            basic
            color="blue"
            content="Edit"
          ></Button>
          <Button
            onClick={() => SetSelectedActivity(null)}
            basic
            color="grey"
            content="Cancel"
          ></Button>
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

import React, { FormEvent, useState } from "react";
import { Button, Form, Segment, TextArea } from "semantic-ui-react";
import { IActivity } from "../../../../app/layout/models/activity";
import { v4 as uuid } from "uuid";
interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
}

export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialFormState,
  createActivity,
  editActivity,
}) => {
  const initializeForm = () => {
    if (initialFormState) return initialFormState;

    return {
      id: "",
      title: "",
      category: "",
      description: "",
      date: "",
      city: "",
      venue: "",
    };
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm);
  const handleSubmit = () => {
    console.log(activity);

    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
  };

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          {/* <label>Title</label> */}
          <input
            onChange={handleInputChange}
            placeholder="Title"
            name="title"
            value={activity.title}
          />
        </Form.Field>
        <Form.Field>
          <TextArea
            onChange={handleInputChange}
            name="description"
            rows={4}
            placeholder="Description"
            value={activity.description}
          />
        </Form.Field>
        <Form.Field>
          <input
            onChange={handleInputChange}
            name="category"
            placeholder="Category"
            value={activity.category}
          />
        </Form.Field>
        <Form.Field>
          <input
            onChange={handleInputChange}
            name="date"
            type="datetime-local"
            placeholder="Date"
            value={activity.date}
          />
        </Form.Field>
        <Form.Field>
          <input
            onChange={handleInputChange}
            name="city"
            placeholder="City"
            value={activity.city}
          />
        </Form.Field>
        <Form.Field>
          <input
            onChange={handleInputChange}
            name="venue"
            placeholder="Venue"
            value={activity.venue}
          />
        </Form.Field>

        <Button.Group floated="right">
          <Button
            onClick={() => setEditMode(false)}
            type="button"
            content="Cancel"
          />
          <Button.Or />
          <Button positive type="submit" content="Submit" />
        </Button.Group>
      </Form>
    </Segment>
  );
};

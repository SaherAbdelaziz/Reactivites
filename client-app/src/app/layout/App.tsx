import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Container } from "semantic-ui-react";
import { IActivity } from "./models/activity";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashBoard } from "../../features/nav/activities/dashboard/ActivityDashBoard";

// interface Istate{
//   activities:IActivity[]
// }

const App = () => {
  const [activities, Setactivities] = useState<IActivity[]>([]);
  const [selectedActivity, SetSelectedActivity] = useState<IActivity | null>(
    null
  );
  const [editMode, setEditMode] = useState(false);

  const handleSelectedActivity = (id: string) => {
    SetSelectedActivity(activities.filter((a) => a.id === id)[0]);
    setEditMode(false);
  };

  const handleOpenCreateForm = () => {
    SetSelectedActivity(null);
    setEditMode(true);
  };

  const handleCreateActivity = (activity: IActivity) => {
    Setactivities([...activities, activity]);
    SetSelectedActivity(activity);
    setEditMode(false);
  };

  const handleEditActivity = (activity: IActivity) => {
    Setactivities([
      ...activities.filter((a) => a.id !== activity.id),
      activity,
    ]);
    SetSelectedActivity(activity);
    setEditMode(false);
  };

  const handleDeleteActivity = (id: string) => {
    Setactivities([...activities.filter((a) => a.id !== id)]);
  };

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/Activities")
      .then((response) => {
        let activities: IActivity[] = [];

        response.data.forEach((activity) => {
          activity.date = activity.date.split(".")[0];
          activities.push(activity);
        });

        console.log(response);
        Setactivities(activities);
      });
  }, []);

  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashBoard
          activities={activities}
          selectActivity={handleSelectedActivity}
          selectedActivity={selectedActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          SetSelectedActivity={SetSelectedActivity}
          createActivity={handleCreateActivity}
          editActivity={handleEditActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </Fragment>
  );
  // }
};

export default App;

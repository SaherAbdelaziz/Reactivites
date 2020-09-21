import React, { useState, useEffect, Fragment, SyntheticEvent } from "react";
import { Container } from "semantic-ui-react";
import { IActivity } from "./models/activity";
import { NavBar } from "../../features/nav/NavBar";
import { ActivityDashBoard } from "../../features/nav/activities/dashboard/ActivityDashBoard";
import agent from "./api/agent";
import { LoadingComponent } from "./LoadingComponent";

// interface Istate{
//   activities:IActivity[]
// }

const App = () => {
  const [activities, Setactivities] = useState<IActivity[]>([]);
  const [selectedActivity, SetSelectedActivity] = useState<IActivity | null>(
    null
  );
  const [editMode, setEditMode] = useState(false);
  const [loding, setLoding] = useState(true);
  const [submmiting, setSubmmiting] = useState(false);
  const [target, setTarget] = useState("");
  // handle functions
  // handle functions
  const handleSelectedActivity = (id: string) => {
    SetSelectedActivity(activities.filter((a) => a.id === id)[0]);
    setEditMode(false);
  };

  const handleOpenCreateForm = () => {
    SetSelectedActivity(null);
    setEditMode(true);
  };
  //create
  const handleCreateActivity = (activity: IActivity) => {
    setSubmmiting(true);
    agent.Activities.create(activity)
      .then(() => {
        Setactivities([...activities, activity]);
        SetSelectedActivity(activity);
        setEditMode(false);
      })
      .then(() => setSubmmiting(false));
  };
  //edit
  const handleEditActivity = (activity: IActivity) => {
    setSubmmiting(true);
    agent.Activities.update(activity)
      .then(() => {
        Setactivities([
          ...activities.filter((a) => a.id !== activity.id),
          activity,
        ]);
        SetSelectedActivity(activity);
        setEditMode(false);
      })
      .then(() => setSubmmiting(false));
  };
  //delete
  const handleDeleteActivity = (
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    setSubmmiting(true);
    setTarget(event.currentTarget.name);
    agent.Activities.delete(id)
      .then(() => {
        Setactivities([...activities.filter((a) => a.id !== id)]);
      })
      .then(() => setSubmmiting(false));
  };
  // handle functions
  // handle functions

  useEffect(() => {
    agent.Activities.list()
      .then((response) => {
        let activities: IActivity[] = [];

        response.forEach((activity) => {
          activity.date = activity.date.split(".")[0];
          activities.push(activity);
        });

        console.log(response);
        Setactivities(activities);
      })
      .then(() => setLoding(false));
  }, []);

  if (loding) return <LoadingComponent content="Loding actitivties..." />;

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
          submmiting={submmiting}
          target={target}
        />
      </Container>
    </Fragment>
  );
  // }
};

export default App;

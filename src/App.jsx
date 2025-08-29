import React, { useState } from "react";
import TrainingForm from "./components/TrainingForm";
import TrainingList from "./components/TrainingList";
import "./App.css";

function App() {
  const [trainings, setTrainings] = useState([]);

  const addTraining = (newTraining) => {
    setTrainings([...trainings, newTraining]);
  };

  return (
    <div className="app-container">
      <h1>Training Tracker App</h1>
      <TrainingForm addTraining={addTraining} />
      <TrainingList trainings={trainings} />
    </div>
  );
}

export default App;

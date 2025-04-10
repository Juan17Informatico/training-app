import React from "react";
import "./TrainingList.css";

function TrainingList({ trainings }) {
  return (
    <div className="training-list">
      <h2>Training History</h2>
      {trainings.length === 0 ? (
        <p>No training recorded yet.</p>
      ) : (
        <ul>
          {trainings.map((training) => (
            <li key={training.id}>
              <strong>{training.exercise}</strong>: {training.sets} sets x {training.reps} reps @ {training.weight} kg
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TrainingList;

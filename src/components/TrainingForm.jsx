import { useState } from "react";
import "./TrainingForm.css";

const TrainingForm = ({ addTraining }) => {
  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (exercise && sets && reps && weight) {
      addTraining({ exercise, sets, reps, weight, id: Date.now() });
      setExercise("");
      setSets("");
      setReps("");
      setWeight("");
    }
  };

  return (
    <form className="training-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Sets"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Reps"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />
      <button type="submit">Add Training</button>
    </form>
  );
}

export default TrainingForm;

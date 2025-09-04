import { useState } from "react";
import "./TrainingForm.css";

const initialState = {
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
};

const TrainingForm = ({ addTraining }) => {
    const [form, setForm] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { exercise, sets, reps, weight } = form;
        if (exercise.trim() && Number(sets) > 0 && Number(reps) > 0 && Number(weight) >= 0) {
            addTraining({
                exercise: exercise.trim(),
                sets: Number(sets),
                reps: Number(reps),
                weight: Number(weight),
                id: Date.now(),
            });
            setForm(initialState);
        }
    };

    return (
        <form className="training-form" onSubmit={handleSubmit} autoComplete="off">
            <input
                type="text"
                name="exercise"
                placeholder="Exercise"
                value={form.exercise}
                onChange={handleChange}
                required
                minLength={2}
            />
            <input
                type="number"
                name="sets"
                placeholder="Sets"
                value={form.sets}
                onChange={handleChange}
                required
                min={1}
            />
            <input
                type="number"
                name="reps"
                placeholder="Reps"
                value={form.reps}
                onChange={handleChange}
                required
                min={1}
            />
            <input
                type="number"
                name="weight"
                placeholder="Weight (kg)"
                value={form.weight}
                onChange={handleChange}
                required
                min={0}
                step="any"
            />
            <button type="submit">Add Training</button>
        </form>
    );
};

export default TrainingForm;

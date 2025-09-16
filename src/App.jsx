import { useState, useCallback } from "react";
import TrainingForm from "./components/TrainingForm";
import TrainingList from "./components/TrainingList";
import "./App.css";

const App = () => {
    const [trainings, setTrainings] = useState([]);

    const addTraining = useCallback((newTraining) => {
        setTrainings((prevTrainings) => [
            ...prevTrainings,
            {
                ...newTraining,
                id: Date.now(),
                createdAt: new Date().toISOString(),
            },
        ]);
    }, []);

    const deleteTraining = useCallback((trainingId) => {
        setTrainings((prevTrainings) =>
            prevTrainings.filter((training) => training.id !== trainingId)
        );
    }, []);

    return (
        <div className="app-container">
            <header>
                <h1>Training Tracker App</h1>
            </header>
            <main>
                <TrainingForm addTraining={addTraining} />
                <TrainingList trainings={trainings} onDelete={deleteTraining} />
            </main>
        </div>
    );
};

export default App;

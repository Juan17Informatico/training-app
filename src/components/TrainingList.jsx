import React from "react";
import PropTypes from "prop-types";
import "./TrainingList.css";

const TrainingList = ({ trainings }) => (
  <section className="training-list">
    <h2>Training History</h2>
    {(!trainings || trainings.length === 0) ? (
      <p className="empty-message">No training recorded yet.</p>
    ) : (
      <ul>
        {trainings.map(({ id, exercise, sets, reps, weight, date }) => (
          <li key={id} className="training-item">
            <div>
              <strong>{exercise}</strong>
              <span>
                {" — "}
                {sets} sets × {reps} reps @ {weight} kg
              </span>
            </div>
            {date && (
              <div className="training-date">
                <small>{new Date(date).toLocaleDateString()}</small>
              </div>
            )}
          </li>
        ))}
      </ul>
    )}
  </section>
);

TrainingList.propTypes = {
  trainings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      exercise: PropTypes.string.isRequired,
      sets: PropTypes.number.isRequired,
      reps: PropTypes.number.isRequired,
      weight: PropTypes.number.isRequired,
      date: PropTypes.string,
    })
  ),
};

TrainingList.defaultProps = {
  trainings: [],
};

export default TrainingList;

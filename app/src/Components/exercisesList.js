import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Exercise = props => {
  const { username, description, duration, date, _id } = props.exercise;
  return (
    <tr>
      <td>{username}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{date}</td>
      <td>
        <Link to={`/edit/${_id}`}>Edit</Link> |{" "}
        <a href="#" onClick={() => props.deleteExercise(_id)}>
          Delete
        </a>
      </td>
    </tr>
  );
};

const ExercisesList = props => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/exercises")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setExercises(data);
      })
      .catch(err => console.log(err));
  }, []);

  const deleteExercise = id => {
    fetch(`http://localhost:5000/exercises/${id}`, {
      method: "delete"
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setExercises(old => old.filter(el => el._id !== id));
      });
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, i) => (
            <Exercise
              exercise={exercise}
              deleteExercise={deleteExercise}
              key={exercise._id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExercisesList;

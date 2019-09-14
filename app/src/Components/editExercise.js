import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditExercise = props => {
  const [username, setUsername] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/exercises/${props.match.params.id}`)
      .then(res => res.json())
      .then(data => {
        setUsername(data.username);
        setDescription(data.description);
        setDuration(data.duration);
        setDate(new Date(data.date));
      })
      .catch(err => console.log(err));

    fetch("http://localhost:5000/users")
      .then(res => {
        console.log(res);
        if (res.ok) return res.json();
        else throw res;
      })
      .then(data => {
        setUsers(data.map(user => user.username));
        console.log(data);
      });
  }, []);

  /**
   *Sets new username on change
   * @param {EventListenerOrEventListenerObject} e HTML Event Object
   */
  const onChangeUsername = e => {
    setUsername(e.target.value);
  };

  /**
   *Sets new description on change
   * @param {EventListenerOrEventListenerObject} e HTML Event Object
   */
  const onChangeDescription = e => {
    setDescription(e.target.value);
  };

  /**
   *Sets new duration on change
   * @param {EventListenerOrEventListenerObject} e HTML Event Object
   */
  const onChangeDuration = e => {
    setDuration(e.target.value);
  };

  /**
   *Sets new date on change
   * @param {date} date Date Object
   */
  const onChangeDate = date => {
    setDate(date);
  };

  /**
   * Submits for to add new exercise log
   * @param {EventListenerOrEventListenerObject} e HTML Event Object
   */
  const onSubmit = e => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date
    };

    console.log(exercise);

    fetch(`http://localhost:5000/exercises/update/${props.match.params.id}`, {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(exercise)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        props.history.push({ pathname: "/" });
      });
  };

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          >
            {users.map(function(user) {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;

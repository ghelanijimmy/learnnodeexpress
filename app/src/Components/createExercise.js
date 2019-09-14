import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = props => {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(["test user"]);
    setUsername("test user");
  }, []);

  /**
   *Sets new username on change
   * @param {event} e HTML Event Object
   */
  const onChangeUsername = e => {
    setUsername(e.target.value);
  };

  /**
   *Sets new description on change
   * @param {event} e HTML Event Object
   */
  const onChangeDescription = e => {
    setDescription(e.target.value);
  };

  /**
   *Sets new duration on change
   * @param {event} e HTML Event Object
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

  const onSubmit = e => {
    e.preventDefault();

    const exercise = {
      username,
      description,
      duration,
      date
    };

    console.log(exercise);

    props.history.push({ pathname: "/" });
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
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
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateExercise;

import React, { useState } from "react";

const CreateUser = props => {
  const [username, setUsername] = useState("");

  /**
   * Change usename
   * @param {EventListenerOrEventListenerObject} e HTML Event Object
   */
  const onChangeUsername = e => {
    setUsername(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username
    };

    console.log(user);

    fetch("http://localhost:5000/users/add", {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ username })
    })
      .then(res => res.json())
      .then(data => console.log(data));

    setUsername("");
  };

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={onChangeUsername}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;

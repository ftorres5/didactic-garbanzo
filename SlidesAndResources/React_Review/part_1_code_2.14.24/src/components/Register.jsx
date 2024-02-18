import { useState } from "react";

function Register() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  });

  const eventHandler = (event) => {
    event.preventDefault();
    console.log("in eventHandler", `USERINFO${userInfo.username}`);
  };

  const onUserInput = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={eventHandler}>
        <label>
          Username
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={userInfo.username}
            onChange={onUserInput}
          />
        </label>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={userInfo.password}
          onChange={onUserInput}
        />
        <label>
          Email
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userInfo.email}
            onChange={onUserInput}
          />
        </label>
        <label htmlFor="first_name">First Name</label>
        <input
          name="first_name"
          type="text"
          placeholder="first_name"
          value={userInfo.first_name}
          onChange={onUserInput}
        />
        <label>
          Last Name
          <input
            type="text"
            placeholder="last_name"
            name="last_name"
            value={userInfo.last_name}
            onChange={onUserInput}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;

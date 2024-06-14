import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
    } else {
      setError("");
      console.log(name, email, password);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNameChange} type="text" name="name" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default StatefulForm;

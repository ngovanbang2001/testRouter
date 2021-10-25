import React from "react";
import { Redirect } from "react-router-dom";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };
  onLogin = (e) => {
    var { username, password } = this.state;
    if (username === "admin" && password === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: username,
          password: password,
        })
      );
    }
  };
  render() {
    var { username, password } = this.state;
    var loggedInUser = localStorage.getItem("user");
    if (loggedInUser !== null) {
      return <Redirect to="/product" />;
    }
    return (
      <form onSubmit={this.onLogin}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUser1"
            name="username"
            value={this.state.username}
            placeholder="Enter User Name"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
export default Home;

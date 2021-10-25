import React from "react";
class Home extends React.Component {
  render() {
    const { match } = this.props;
    console.log(match);
    return <h2>Detail {match.params.slug}</h2>;
  }
}
export default Home;

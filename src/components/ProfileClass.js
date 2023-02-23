import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor");
    console.log(this.props)
  }

  componentDidMount() {
    console.log("ComponentDidMount");
  }
  render() {
    console.log("render")
    return (
      <>
        <h3>{this.props.name}</h3>
        <h3>{this.state.count}</h3>
        <button
          className="bg-green-200 o-2 m-2"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click Me
        </button>
      </>
    );
  }
}

export default ProfileClass;

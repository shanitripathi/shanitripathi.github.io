import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
// import axios from "axios";
import { connect } from "react-redux";

class Post extends Component {
  // state = {
  //   post: null,
  // };
  // componentDidMount() {
  //   let id = this.props.match.params.post_id;
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/" + id)
  //     .then((res) => {
  //       this.setState({
  //         post: res.data,
  //       });
  //       console.log(res);
  //     });
  // }

  handleClick() {
    return this.props.deletePost(this.props.match.params.post_id);
  }
  render() {
    console.log(this.props);
    const post = this.props.post ? (
      <div>
        <h1>{this.props.post.title}</h1>
        <p>{this.props.post.body}</p>
        <button onClick={this.handleClick}>Delete</button>
      </div>
    ) : (
      <h1>Post Doesn't exist</h1>
    );
    return <div>{post}</div>;
  }
}

const mapStateToProps = (state, selfProps) => {
  let id = selfProps.match.params.post_id;
  return {
    post: state.posts.find((post) => post.id === id),
  };
};

const mapDispatchToProps = () => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id: id });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);

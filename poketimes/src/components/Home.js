import React, { Component } from "react";
// import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// class Home extends Component {
//   state = {
//     posts: [],
//   };
//   componentWillMount() {
//     axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
//       // console.log(res);
//       this.setState({
//         posts: res.data.slice(1, 10),
//       });
//     });
//   }
//   render() {
//     const { posts } = this.state;
//     const postsList = posts.length ? (
//       posts.map((post) => {
//         return (
//           <div>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//           </div>
//         );
//       })
//     ) : (
//       <h1>No posts yet</h1>
//     );
//     return <div className="container">{postsList}</div>;
//   }
// }

class Home extends Component {
  // state = {
  //   posts: [],
  // };
  // componentWillMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
  //     let posts = res.data.slice(0, 10);
  //     this.setState({
  //       posts: posts,
  //     });
  //   });
  // }
  render() {
    const { posts } = this.props;
    const postsList = posts.length ? (
      posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={"/" + post.id}>
              <h1>{post.title}</h1>
            </Link>
            <p>{post.body}</p>
          </div>
        );
      })
    ) : (
      <h1>No posts</h1>
    );
    return <div>{postsList}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Home);

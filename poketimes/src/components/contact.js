import React from "react";

const Contact = (props) => {
  console.log(props);
  setTimeout(() => {
    props.history.push("/about");
  }, 2000);
  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>lorem nbcasbcoal bkjeabck bidkcadc cakceshac </p>
    </div>
  );
};

export default Contact;

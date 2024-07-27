import React from "react";

const myStyle = StyleSheet.style({
  wrapper: { backgroundColor: "pink", padding: "20px", margin: "0px" },
  h1: { color: "red", fontWeight: bold },
  p: { fontSize: "20px", lineHeight: "2rem" },
  a: { color: "lemon", textDecoration: "none" },
});

const Help = () => {
  return (
    <div style={myStyle.wrapper}>
      <h1 style={myStyle.h1}>Welcome to React world</h1>
      <p style={myStyle.p}>Lorem ipsum dolor sit amet consectetur adipisicing eli </p>
      <a style={myStyle.a} href="http://google/com"> Search at google </a>
    </div>
  );
};

export default Help;

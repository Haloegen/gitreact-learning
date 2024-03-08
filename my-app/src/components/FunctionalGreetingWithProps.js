import React from "react";

const FunctionalGreetingWithProps = (props) => {
  console.log(props);
return <h1>Hello,  {props.greeting}, I see you are {props.age} years old and your name is {props.name}</h1>;
}

export default FunctionalGreetingWithProps
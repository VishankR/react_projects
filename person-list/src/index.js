import React from "react";
import ReactDom from "react-dom"
import './index.css'


const Person = ({imgNo, name, job, children}) => {
  // console.log(props);
  const url = `https://randomuser.me/api/portraits/thumb/men/${imgNo}.jpg`;
  return (
    <article className="person">
      <img src={url}
      alt="person" ></img>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </article>
  )
}


const PersonList = () => {
  return (
    <section className="person-list">
      <Person imgNo="34" name="John" job="developer"></Person>
      <Person imgNo="22" name="Bob" job="designer">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, assumenda?</p>
      </Person>
      <Person imgNo="56" name="David" job="artist"></Person>
    </section>
  );
}

ReactDom.render(<PersonList></PersonList>, document.getElementById('root'));
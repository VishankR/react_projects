import React, { Component } from "react";
// import Banner from "./components/header/Banner";
import BookList from "./BookList";
import './App.css'
// const App = () => {
//   return (
  // <section>
  //   <Banner></Banner>
  // </section>
//   );
// }

// class App1 extends Component {
  
//   render(){
//     return (
//       <section>
//       <Banner></Banner>
//     </section>
//     )
//   }
// }

const App = () => {
  return (
  <section>
    <BookList />
  </section>
  );
}

export default App; 
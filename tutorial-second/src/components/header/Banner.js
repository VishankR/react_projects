import React from 'react'
import {name, age} from '../../data'

export default function Banner() {
  return (
    <div>Hello {name} From Banner</div>
  )
}

// import * as data from '../../data'
// const App = () => {
//   return (
//   <section>
//     <p>{data.name}</p>
//     <p>{data.age}</p>
//     <p>{data.person.name}</p>
//   </section>
//   );
// }
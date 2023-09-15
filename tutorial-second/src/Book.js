import React, { Component } from 'react'
import Buttons from './Buttons';
export default class Book extends Component {

    state= {
        // count: 0,
        // name: "vishank"
        showInfo: true
    }

  render() {
    // console.log(this.props);
    const { id, img, title, author} = this.props.info;
    const { handleDelete } = this.props;
    const checkInfo = (info) => {
        if(info == true) {
            return <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, facilis!</p>
        }else {
            return null;
        }
    }
    return (
        <article className="book">
            <img src={img} width="150" alt="book" />
            <div>
                <h3>Title : { title }</h3>
                <h5>Author : { author } </h5>
                {/* <button type='button' onClick={() => handleDelete(id)}>
                    Delete Me
                </button> */}
                <button type='button' onClick={this.toggleInfo}>
                    Toggle Info
                </button>
                {/* {using function} */}
                {checkInfo(this.state.showInfo)}
                {/* {using and condition} */}
                {/* {
                    this.state.showInfo && (<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, neque.</p>)
                } */}
                {/* {using ternary operator} */}
                {/* {
                    this.state.showInfo ? <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, consectetur!</p> : null
                } */}


                {/* <Buttons handleDelete={handleDelete}></Buttons> */}
                {/* <h3>count: { this.state.count }</h3>
                <h3>name: { this.state.name }</h3> */}
                {/* <button type="button" onClick={this.addCount}>add count</button>
                <button type="button" onClick={this.lowerCount}>lower count</button>
                <button type="button" onClick={this.resetCount}>reset count</button> */}
            </div>
        </article>
    )
  }

  toggleInfo = () => {
    this.setState({
        showInfo: !this.state.showInfo
    })
  }

//   addCount =  () => {
//     this.setState(
//         {
//             count: this.state.count + 1
//         }
//     )
//   }
//   lowerCount =  () => {
//     this.setState(
//         {
//             count: this.state.count - 1
//         }
//     )
//   }
//   resetCount =  () => {
//     this.setState(
//         {
//             count: 0
//         }
//     )
//   }

//   constructor(props){
//     super(props);
//     this.state = {
//         count: 1
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick () {
//     console.log("You clicked me");
//     console.log(this.state.count);
//   }

}

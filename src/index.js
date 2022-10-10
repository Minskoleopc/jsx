//1 Import the react and React DOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
//  Get the reference of div with id root
let element = document.querySelector('#root')
//Tell react to take the control  of that element 
let root = ReactDOM.createRoot(element)
// Component

// jsx

// program1
//React.createElement('h1',null,"Hello I am learning")
// function App(){
//   return <h1>Hello I am learning</h1>
// }

// program2  
// passing variable jsx

// function App(){
//   let message = "hello"
//   return <h1>{message}</h1>
// }
// Program conditional based
// program3

// function App(){
//   let message = undefined;
//   if(Math.random() > 0.5){
//     message = "hi"
//   }
//   else {
//     message = "bye"
//   }
//   return <h1>{message}</h1>
// }

// program 4 // two or more values
// function App(){
//   let firstName = "chinmay";
//   let lastName = "deshpande"
//   return <h1>My firstName is {firstName} and last name is {lastName}</h1>
// }

// program5

// function App(){
//   let sum = 1 + 1
//   let firstName = "chinmay";
//   let lastName = "deshpande"
 
//   return (
//     <div>
//        <h1>{sum}</h1>
//        <h1>My firstName is {firstName} and last name is {lastName}</h1>
//     </div>
//   )
// }

// program 6

// function App(){
//   //let sum = true NV
//   //let sum = [3,4,5]  NV
//   //let  sum = {firstName:"chinmay"} NV
//   //let q2 = new Date().toLocaleString() // V
//   return (
//     <div>
//        <h1>{new Date().toLocaleString()}</h1>
//     </div>
//   )
// }

// program 7 (props)
// function App(){
//  let minA = 5
//  let maxA = 10
//   return (
//     <div>
//        <input type = "number" min={minA} max={maxA}></input>
//     </div>
//   )
// }
// program 8
// function App(){
//    return (
//      <div>
//         <textarea autoFocus className='hello'></textarea>
//      </div>
//    )
//  }

// program 9

function App(){
   return (
     <div>
        <h1 style={{color:"red"}} autoFocus className='hello'>Hello</h1>
     </div>
   )
 }








// Show the component on the screen
root.render(<App/>);



import React, { Component } from 'react'
import axios from 'axios'
import './Table.css'


class Table extends Component {
   constructor(props) {
      super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
      this.state = { //state is by default an object
         candidates: [
            { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
            { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
            { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
            { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
         ]
      }
   }

   renderTableData() {
    return this.state.candidates.map((candidate, index) => {
       const { id, name, age, email } = candidate //destructuring
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 };
 renderTableHeader() {
    let header = Object.keys(this.state.candidates[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }


   render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
        
          <div>
            <h1 id='title'>React Dynamic Table</h1>
            <table id='candidates'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
     )
   }
}

export default Table //exporting a component make it reusable and this is the beauty of react

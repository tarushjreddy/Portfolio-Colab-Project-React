// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
 // npm install is used to reacreate the modules
import React from 'react';
import logo from './logo.svg';
import './App.css';
import './car.css';
import ls from 'local-storage'

import car from './clock.jpg';
// function App(){
// return (
// <div>
//   <div class="decoration">
//     <h1 class="heddings">React</h1>
// <div class="spacing">
//       <img src={logo} alt="" x className="App-logo"></img>
//  </div>
//   </div>
//   </div>

  
  
// );
// }
// export default App;
class App extends React.Component{ 
  constructor(props){
    super(props);
    this.state ={
      newItem: "",
      list : []
    }
  }
addItem(todoValue){
  if (todoValue !== "" ) {
    const newItem ={
      id: Date.now(),
      value : todoValue,
      isDone : false
    };
    const list = [...this.state.list];
    list.push(newItem);
    this.setState({
      list,
      newItem: ""
    });
    //  let data = localStorage.getItem(todoValue.value)
    localStorage.setItem(newItem.id, todoValue)
    let data = localStorage.getItem(newItem.id)
    return data
    console.log(data)
    
  }

  
  
}


deleteItem(id){
   const list = [...this.state.list];
   const update = list.filter(item => item.id !== id);
   this.setState({list: update})
}
updatein(input){
  this.setState({newItem:input})
   
}

  render() {

    return <div><div id="main">
      <h1>Todo App</h1>
      <img src= {car} id="logo"></img>
    </div>
    <div className="spacing"></div>
    <div id= "maindrawer">
      <input type="text" placeholder= "Enter the things to be done" id="all" value={this.state.newItem} onChange = {e => this.updatein (e.target.value)}></input>
      <button type="submit" id="final" className="add-btn" onClick= {() => this.addItem(this.state.newItem)} disabled= {!this.state.newItem.length}>Add TODO</button>
    </div>
    <div className="list">
      <ul>
        {this.state.list.map(item => {
          return(
            <li key={item.id}>
               {/* <input type="checkbox" name="iDone" checked= {item.isDone} onClick={() => this.deleteItem(item.id)}>
         
        </input> */}
        {item.value}
        <button type="submit" id="final-small" className="add-btn" onClick={() => this.deleteItem(item.id)}>Delete</button>
        
            </li>
           
          );
        })}
        <li >
 {/* <input type="checkbox">
         
        </input>
        Programming work
         <button type="submit" id="final-small" className="add-btn">Add TODO</button> */}
        </li>
       
      </ul>

    </div>
    </div>
  }
}
export default App;


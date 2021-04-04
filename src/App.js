import React, {useState} from 'react';
import './App.css';
import { User } from './components/Users';
import {data} from './data'
import OnBtn from './components/OnBtns/Button';



function App() {
  const [age , setAge] = useState ('29');
  const renderUsers = () => {
    switch(age) {
      // 1 -render
      case "18" :
        let arr = data.filter((el) => {
          return el.age <= "18";
        });
        return arr.map((el,id) => {
          return <User data={el} key ={id}/>
        });
      // render-2
      case '24':
        let arr2 =data.filter((el) => {
          return el.age > '18' && el.age < '24';
        });
        return arr2.map((el,id) => {
          return <User data={el} key= {id} color = 'red' />
        });
      
      // render -3
      case "25":
        let arr3 =data.filter((el) => {
          return el.age >'25';
        })
        return arr3.map((el,id) => {
          return <User data ={el} key ={id} color="blue"/>
        });
      // render 4
      case "29":
        let arr4 = data.filter((el) => {
          return el.age <= "29";
        })
        return arr4.map((el,id) => {
          return <User data={el} key={id} color="darkred"/>
        });
      default:
        return "";
    }
  }
  

  return (
    <div className="App">
      <div className = "btns-groups">
        {/* btn-1 */}
      <button className="btn"
        onClick ={ ()=> setAge('18')}
        style={
          age >'18'?{backgroundColor: "sage"} : {backgroundColor: "none"}
        }
      >
        under-18 years </button>
        <OnBtn/>
        {/* btn-2 */}
      <button  className="btn"
        onClick ={() => setAge('24')}
        style={
          age >'18'&& age >'24' ?{backgroundColor: "purple"} : {backgroundColor: "gray"}
        }
      >
         18-24 years</button>
      {/* btn-3 */}
      <button  className="btn"
        onClick ={() => setAge('25')}
        style={
          age >='25'?{backgroundColor: "orange"} : {backgroundColor: "none"}
        }
      >more-24 years</button>
      {/* btn-4 */}
      <button  className="btn"
        onClick ={() => setAge('29')}
        style={
          age <'24'?{backgroundColor: "silver"} : {backgroundColor: "none"}
        }
      >all years</button>
       {/* btn-5 */}
      </div>

      <div className = "container">
      {
        renderUsers()
     }
      </div>
    </div>
  )
 }

export default App;

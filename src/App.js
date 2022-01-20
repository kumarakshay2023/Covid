

import './App.css';
import React from 'react';

import Covid from './Covid';
const App=()=> {
  // const [inputList,setInputList ] = useState([]);
  // const [items,setItems]=useState([]);


  

      // another project to show name 
//    const [name, setname] = useState('');
//    const [fullName,setfullname]=useState('');
//    const [flname,setflname]=useState('');
//    const [lname,setlastname]=useState('');
//  const inputchange=(eve)=>{
//     // setname(eve.target.value);
  
//    setname(eve.target.value)
//  }
//  const linputchange=(e)=>{
//      setlastname(e.target.value);
//  }
//  const submitname=(e)=>{
//    e.preventDefault();
//        setfullname(name);
//        setflname(lname);
//  }

// const itemEvent=(e)=>{
//      setInputList(e.target.value);
// }
// const listofItems=()=>{
//   setItems((oldval)=>{return[...oldval,inputList]})
//   setInputList("")
// }
  return (
    // show name wala project
    // <div >
    //   <form onSubmit={submitname}>
    //   <h1>Hello{" "}{fullName}{flname}</h1>
    //   <input type={'text'} value={name} onChange={inputchange}/>
    //   <input type={'text'} value={lname} onChange={linputchange}/>
    //    <button type='submit'  >Click me</button>
    //   </form>
     
    // </div>
    <>
    {/* <div>
   
       <div>
         <br/>
         <h1>TO do List</h1>
         <br/>
         <input onChange={itemEvent} type="text" placeholder="Add a Item"/>
         <button onClick={listofItems} >+</button>
         <ol>
          {items.map((ele)=>{
           return (
            <todoList/>
           )
           })}
           
         </ol>
       </div>
    </div>
     */}


 {/* <h1>Home page</h1>
 <Menu/>

    <Switch>

      <Route exact path="/" component={Contact}/>
      <Route exact path='/about' component={()=><About name="about"/ >}/>
      <Route path="/about/name" component={()=><Name name="Name"/>}/>
      <Route path="/user/:fname/:lname" component={User}></Route>
      <Route path="/search" component={Search}></Route>

    </Switch> */}


      <Covid/>


    </>
  );
   
   
  }



export default App;

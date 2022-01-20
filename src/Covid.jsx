/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect,useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Covid = () => {
    const [Data, setData] = useState([]);
 const getApidata =async()=>{
     const data=await fetch('https://data.covid19india.org/data.json');
     const oridata=await data.json();
    //  console.log(oridata.statewise);
     setData(oridata.statewise);
 }
    useEffect(()=>getApidata(),[]);
    return (
        <div>
            <h1 className='text-center'>India Covid Data</h1>
        <table className="table table-dark">
  <thead>
    <tr>
        
      <th scope="col">State</th>
      <th scope="col">Confirmed</th>
      <th scope="col">recovered</th>
      <th scope="col">deaths</th>
      <th scope="col">active</th>
      <th scope="col">updated</th>
    </tr>
  </thead>
  <tbody>
      {Data.map((ele,index)=>{
          return (
            <tr key={index}>
            
            <td>{ele.state}</td>
            <td>{ele.cofirmed}</td>
            <td>{ele.recovered}</td>
            <td>{ele.deaths}</td>
            <td>{ele.active}</td>
            <td>{ele.lastupdatedtime}</td>
            
          </tr>
          );
            
      })}
 
    
  </tbody>
</table>
        </div>
    )
}

export default Covid

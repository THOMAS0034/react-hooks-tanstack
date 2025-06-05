import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios'
import { Productcard } from './components/Productcard';
import { useProductData } from './useproductdata';


const App = () => {

  const {data,isLoading,isError} = useProductData();

  const [inputval,setinputval] = useState("ryan");

  const [search,setSearch] = useState('');

  if (isLoading) return <p>isLoading</p>

  if (isError)  return <p>error</p>

  const filtered = data.filter((product) => 
    product.name.toLowerCase().includes(search.toLowerCase())
);

  onchange =(event)=>{
    const newval=event.target.value;
    setinputval(newval)
  }
  

  return (
    <div className="App">
      <input placeholder='enter the value' onChange={onchange}/>
      <input
  type="text"
  placeholder="Search by name"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  style={{ padding: '10px', marginBottom: '20px', fontSize: '16px' }}
/>
      <h1>{inputval}</h1>
       <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {filtered.map((product,index)=>(
          <Productcard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
          rating={product.rating}
      />
      ))}
       </div>
    </div>
  );
}
export default App;

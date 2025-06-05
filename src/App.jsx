import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import axios from 'axios'
import { Productcard } from './components/Productcard';
import { useProductData } from './useproductdata';
import { usePagination } from './usePagination';

const App = () => {

  const [inputval,setinputval] = useState("ryan");

  const [search,setSearch] = useState('');

  const [page,setPage] = useState(1);

  const { data ,isLoading, isError }=usePagination(page);

  if (isLoading) return <p>isLoading</p>

  if (isError)  return <p>error</p>

  const filtered = data?.filter((product) => 
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
        {filtered?.map((product,index)=>(
          <Productcard
          key={index}
          name={product.name}
          price={product.price}
          image={product.image}
          rating={product.rating}
      />
      ))}
       </div>
        <div style={{ marginTop: '20px' }}>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))} disabled={page === 1}>
          Previous
        </button>

        <span style={{ margin: '0 10px' }}>Page {page}</span>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={data.length < 10} 
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default App;

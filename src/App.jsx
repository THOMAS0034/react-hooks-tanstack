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


{/* <header class=" flex justify-evenly items-center text-2xl text-center sticky top-0 bg-gray-50 h-10">
  <h1 class="text-[15px] font-bold text-amber-500 hover:text-3xl transition-all cursor-pointer hover:text-amber-600">hello</h1>
  <h1 class="text-[15px] font-bold text-amber-500 hover:text-3xl transition-all cursor-pointer hover:text-amber-600"">home</h1>
  <h1 class="text-[15px] font-bold text-amber-500 hover:text-3xl transition-all cursor-pointer hover:text-amber-600"">shop</h1>
  <h1 class="text-[15px] font-bold text-amber-500 hover:text-3xl transition-all cursor-pointer hover:text-amber-600"">links</h1>
</header>

<h1 class="text-2xl text-pink-500 text-center m-5 font-bold">Welcome</h1>
<p class="text-[#6e6e6e] m-10 text-justify leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea esse eligendi beatae reiciendis, nemo ipsum suscipit architecto ratione optio expedita deserunt cum, voluptate impedit. Molestias alias laboriosam optio tenetur excepturi.</p>

<div class="card-container grid grid-cols-3">
  <div class="card bg-amber-50 rounded-2xl m-5 ">
    <h1 class="text-center">Name</h1>
    <h3 class="text-center p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, aperiam?</h3>
  </div>
</div>

<div class="login flex justify-center items-center m-10">
<div class="login-container flex bg-[#d3f1ff] w-[650px] h-[450px] rounded-4xl shadow-2xl shadow-blue-200 overflow-hidden">
  <div class="lef flex flex-col items-center w-1/2 p-8 bg-amber-50">
  <h1 class="text-center text-2xl font-bold mb-6 pt-5" >Login into your account</h1>
  <input class="text-center mt-10"  type="text" placeholder="enter">
  <input class="text-center mt-10"  type="text" placeholder="enter">
  <button class="mt-10 bg-blue-200 w-[65px] h-8 text-sm rounded-2xl">login</button>
  </div>
</div>
</div>

<div class="login flex justify-center items-center min-h-screen m-10 bg-white">
  <div class="login-container flex w-[850px] h-[450px] rounded-4xl shadow-2xl shadow-blue-200 overflow-hidden">
    <div class="flex flex-col justify-center items-center w-1/2 bg-[#d3f1ff] p-8">
      <h1 class="text-2xl font-bold mb-6 text-center">Login Into Your Account</h1>

      <input
        class="mb-4 w-[250px] h-[45px] text-center rounded-2xl bg-white hover:bg-violet-300 transition-all"
        type="text"
        placeholder="Enter your name here"
      />
      <input
        class="mb-4 w-[250px] h-[45px] text-center rounded-2xl bg-white hover:bg-violet-300 transition-all"
        type="password"
        placeholder="Enter the password"
      />
      <button
        class="text-sm text-white bg-violet-500 hover:bg-violet-600 h-[40px] w-[120px] rounded-4xl mt-3 transition-all cursor-pointer active:bg-violet-400">
        Login
      </button>
    </div>
      <div class="w-1/2 bg-violet-400 flex items-center justify-center p-8">
      <p class="text-lg font-bold text-center text-white ">
        Welcome back!<br />
        Securely log in and continue where you left off.
      </p>
  </div>
    </div>

</div>
<div class="flex flex-col w-[250px] justify-center bg-gray-300 rounded">
  <div class=" bg-green-500 text-xs leading-none py-1 text-center text-white w-3/4 rounded">75%</div>
</div> */}

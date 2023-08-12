import React from 'react'
import { useState, useEffect } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const{data: blogs, isPending, err, setData: setBlogs, setPending, setErr} = useFetch('http://localhost:8000/blogs')
  

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch('http://localhost:8000/blogs')
  //     .then(res => {
  //       // console.log(res)
  //       if(!res.ok){
  //         throw ("Could'nt fetch the data from the server")
  //       }
  //       return res.json()
  //     })
  //     .then(data => {
  //       setBlogs(data)
  //       setPending(false)
  //     }). catch(err => {
  //       console.log(err)
  //     })
  //   }, 500);
  // }, [])


  // useEffect(() => {
  //   let fetchData = async() => {
  //     try {
  //       const res = await fetch();
  //       if(!res.ok){
  //         throw ('Cannot fetch  data from the server')
  //       }
  //       const data = await res.json();
  //       setBlogs(data);
  //       // console.log(data)
  //       setPending(false)
  //       setErr(null)
  //     } catch(err) {
  //       console.log(err);
  //       setErr(err)
  //       setPending(true)
  //     }
  //   }
  //   setTimeout(() => {
  //     fetchData();
  //     setPending(false)
  //   }, 500);
  // }, [])
  

  return (
    <>
      <div style={{margin:'0rem 5rem'}}>
        {blogs  && <BlogList blogs={blogs} isPending ={isPending}/>}
        {err && <div><h4>{err}</h4></div>}
        {err === undefined ? isPending && <p>Loading...</p>: " "}
        
      </div>
    </>
  )
}

export default Home
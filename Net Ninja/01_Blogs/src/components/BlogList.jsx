import React from 'react'
import Blog from './Blog'

const BlogList = ({blogs,  isPending}) => {
  
  return (
    <>
      <h1 style={{color:'purple'}}>
        <span>
          <i className='fa-solid fa-blog'></i>
        </span>
        <b>Blogs List</b>
      </h1>
      {blogs.length >0 ? <div className='blogList'> 
        {
          blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}/>
          ))
        }
      </div> : isPending === false? <h3 style={{color:'deeppink', marginTop:'2rem'}}>Blogs are Empty</h3> : ''}
    </>
  )
}

export default BlogList
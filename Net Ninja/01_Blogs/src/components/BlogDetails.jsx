import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch'

const BlogDetails = () => {
  const { id } = useParams()
  const { data:blog, err, isPending } = useFetch('http://localhost:8000/blogs/' + id);

  const navigate = useNavigate()

  const deleteBlog = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method : 'DELETE'
    }).then(() => {
      console.log(blog.id)
      navigate('/')
    })
  }

  return (
    <div className='blodDetails'>
      {/* {console.log(blog)} */}
      {isPending && <div>Loading...</div>}
      {err && <div>{err}</div>}
      {blog && (
        <article>
          <h3 className='p-2 px-3 py-3 text-white text-center m-auto tlt' style={{backgroundColor:'blueviolet', width:'fit-content', borderRadius: '10px', fontWeight: 'bolder'}} >{blog.title}</h3>
          <div className="card mt-4 me-4">
            <div className="card-body px-4">
              <h4 className='px-4 py-2 my-3 mb-4 authr' >Author {blog.author}</h4>
              <p>{blog.body}</p>
              <button className="btn btn-danger" onClick={deleteBlog}>Delete</button>
            </div>
          </div>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
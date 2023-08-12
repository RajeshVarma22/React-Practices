import { useState } from "react"
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('')
  const [isPending, setisPending] = useState(false)

  let navigate = useNavigate()

  const submitted = (e) => {
    e.preventDefault()
    const details = {title, body, author}
    // console.log(details)
    setisPending(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(details)
    }).then(() => {
      console.log('Successfully submitted')
      setTimeout(() => {
        setisPending(false);
        navigate('/') //This is used to navigate between the pages after submitting the form it will gies tio homePage.
      }, 1000);
    })
  }

  return (
    <div className="creatingBlog" style={{marginTop :'7rem'}}>
      <div className="formMain" style={{ width: '600px', margin: 'auto', border: '2px solid skyblue' }}>
        <form 
          onSubmit={submitted}
          className="my-5" 
          style={{width : '400px', margin :'auto'}}>
          <div className="form-group mt-2" >
            <label className="form-label"><b>Title</b></label>
            <input
              className="form-control"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label className="form-label"><b>Blogs body</b></label>
            <textarea
              className="form-control"
              type="text"
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="form-group mt-2">
            <label className="form-label"><b>Authors</b></label>
            <input 
              className="form-control" 
              style={{ width: '200px', textAlign: 'center' }}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
            
          </div>
          {/* <div className="form-group mt-2">
            <label className="form-label"><b>Famous Authors</b></label>
            <select 
              className="form-control" 
              style={{ width: '200px', textAlign: 'center' }}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            >
              <option value="Meka">Meka</option>
              <option value="Gorrey">Gorrey</option>
            </select>
          </div> */}
          <div className="mt-2">
            {!isPending && <input type="submit" className="btn btn-success" />}
            {isPending && <button disabled className="btn " style={{backgroundColor :'deeppink'}}><span className="spinner-border spinner-border-sm text-white"></span> <span className="text-white">Submitting...</span></button>}
          </div>
        </form>
      </div>
    </div>
  )
}


export default CreateBlog
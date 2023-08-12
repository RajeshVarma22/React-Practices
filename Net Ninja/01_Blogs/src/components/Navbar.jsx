import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-dark bg-light navbar-expand fixed-top' style={{ boxShadow: '0px 1px 1px grey' }}>
                <a href='#' className='navbar-brand p-2 text-dark'>Practice by NetNinja</a>
                <button className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#simpleNavbar1'>
                    <span className='navbar-toggler-icon'>
                        <i className='fa fa-bars'></i>
                    </span>
                </button>
                <div className='collapse navbar-collapse d-flex flex-row justify-content-end mx-3'>
                    <ul className='navbar-nav ml-auto '>
                        <li className='nav-item px-2 mx-3' style={{ backgroundColor: 'purple', borderRadius: '5px', boxShadow: '0px 2px 2px grey' }}>
                            <Link to="/" className='nav-link text-white'>
                                <i className='fa-solid fa-home'></i> <span className='mx-1'><b>Home</b></span>
                            </Link>
                        </li>
                        <li className='nav-item px-2'>
                            <Link to="/create" className='nav-link text-white' style={{ backgroundColor: 'deeppink', borderRadius: '5px', boxShadow: '0px 2px 2px grey' }}>
                                <i className='fa-solid fa-blog ms-1'></i> <span className='mx-1'><b >New Blog</b></span>
                            </Link>
                        </li>
                        <li>
                            <form className='navbar-form navbar-left' role='search'>
                                <div className='form-group'>
                                    <input type='text' className='form-control' placeholder='Search'></input>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar
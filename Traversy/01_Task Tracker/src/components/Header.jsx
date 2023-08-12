import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title ,onAdd, change}) => {
  return (
    <header className='header'>
        {/* <h1 style={{color : 'blueviolet' , backgroundColor : 'black'}}>{title}</h1>{/*  You can use this as inline style or else use bleow for internal */}
        { /* <h1 style={mainHeadingStyle}>{title}</h1> { /*This is like internal Style */ }
        <h1>{title}</h1>
        <Button  color={change?'red':'green'} text = {change?'close':'Add'} onAdd = {onAdd} />
        {/* <Button color = 'red' text = 'Red' /> */}
        {/* <Button color = 'blue' text = 'Blue' /> */}
        
    </header>
  )
}


Header.defaultProps = { // This is a default props for the header. 
    title : 'Task Tracker'
}


Header.propTypes = {
    title : PropTypes.string.isRequired // If you pass the title other than string it will render but gives warning in console.
}

// Js Css
// const mainHeadingStyle = {
//     color : 'blueviolet' ,
//     backgroundColor : 'black'
// }

export default Header
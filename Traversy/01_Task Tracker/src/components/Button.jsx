import PropTypes  from "react"

const Button = ({color, text, onAdd}) => { 
    return <button onClick = {onAdd} style={{backgroundColor : color}} className="btn">{text} </button>
}

Button.defaultProps = {
    color : 'red',
    text : 'no props given for button'
}

// Button.propTypes = {
//     color : PropTypes.string,
//     text : PropTypes.string,
//     onClick : PropTypes.func
// }

export default Button
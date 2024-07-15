import './Button.css';

const Button = (props) => {

    return (
        <button class="btn" type='submit' >
            {props.label}
        </button>
    )

}


export default Button
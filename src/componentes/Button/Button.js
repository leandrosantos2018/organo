import './Button.css';

const Button = (props)=>{

    return (
        <button class="btn" type='button'  onclick={props.onclick}>{props.label}</button>
    )

}


export default Button
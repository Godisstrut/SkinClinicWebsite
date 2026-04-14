import "./Button.css";

function Button({children}) {
    return(
        <button className="btn-custom" type="submit" >
            {children}
        </button>
    )
}

export default Button
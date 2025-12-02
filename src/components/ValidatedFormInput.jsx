import {useState} from "react";

function ValidatedFormInput({ type = "text", name, value, minLength = 3, onChange }) {
    const [touched, setTouched] = useState(false);

    const isTextInvalid = type === "text" &&
        touched &&
        value.length < minLength &&
        value.length >= 0;

    const handleBlur = () => {
        setTouched(true);
    };

    return (
        <>
            <label htmlFor={name}>{name}</label> <br/>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                minLength={minLength}
                onChange={onChange}
                onBlur={handleBlur} // onBlur = when the input loses focus
                required
            />
            {isTextInvalid && (
                <span className="error"> At least {minLength} characters required. </span>
            )}
        </>
    )
}

export default ValidatedFormInput;
import React from 'react'

export default function Form() {
    return (
        <form>
            <FormInput 
                label="Name" 
                name="name" 
                type="text" 
                classType="form-control"
                placeholder="Type your name" 
            />
            <FormInput 
                label="Email" 
                name="email" 
                type="email" 
                classType="form-control"
                placeholder="Type your email" 
            />
            <FormInput 
                label="Password" 
                name="paswword" 
                type="password" 
                classType="form-control"
                placeholder="Type your password" 
            />
            <FormButtonSend label="Send" type="submit"/>
        </form>
    )
}

function FormInput(props) {
    const { label, name, type, classType, placeholder } = props;

    return(
        <div>
            <label>{label}</label>
            <input type={type} name={name} className={classType} placeholder={placeholder}/>
        </div>
    )
}

function FormButtonSend(props) {
    const { label, type } = props;

    return(
        <div>
            <button className="btn btn-success" type={type}>{label}</button>
        </div>
    )
}

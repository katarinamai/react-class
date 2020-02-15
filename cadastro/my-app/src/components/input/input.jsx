import React from 'react'

export const Input = (props) => {

        const title = props.title;
        const placeholder = props.placeholder;
        const name = props.name;        
        const value = props.value;        
        const handleChange = (event) =>{
            const name = event.target.name;
            const value = event.target.value;
            props.onChange(name, value)
        };        

        return(
            <div>
                <div>{title}</div>
                <input 
                    name={name}
                    type="text" 
                    value={value}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            </div>
        );
    }

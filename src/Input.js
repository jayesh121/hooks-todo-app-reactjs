import React, { useState } from 'react'

export default function Input({ addTodo }) {
    const [value, setvalue] = useState('')

    const onsubmit = (event) => {
        event.preventDefault();
        if (! value) return;
        addTodo(value)
        setvalue('')
    }



    const Handleon = (event) => {
        return setvalue(event.target.value)
    }
    return (
        <div>
            <form onSubmit={onsubmit}>

                <input
                    type="text"
                    className=""
                    placeholder="enter"
                    value={value}
                    onChange={Handleon}
                />
            </form>

        </div>
    )
}

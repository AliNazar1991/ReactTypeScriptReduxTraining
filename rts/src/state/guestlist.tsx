import { useEffect, useRef, useState } from 'react'
import React from 'react'

const GuestList: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null); // you also add any as type here for quickness
    const [name, setName] = useState('')
    const [guests, setGuests] = useState<string[]>([])

    useEffect(() => {
        if(!inputRef.current){
            return;
        }
        inputRef.current.focus()
    }, [])
const onClick = ()=> {
    setName('');
    setGuests([...guests, name]);
    console.log(...guests)
};
    return <div>
        <h3>Guest List</h3>
        <ul>
            {guests.map(guest => <li key={guest}>{guest}</li>)}
        </ul>
        <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={onClick}>Add Guest</button>
    </div>
};
export default GuestList
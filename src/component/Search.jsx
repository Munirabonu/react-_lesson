import React, { useContext, useState } from 'react'
import { ContextHook } from '../context'

export default function Search() {
    const [data, setData] = useContext(ContextHook)
    const [title, setTitle] = useState('')

    console.log(title, 'title');
    const searchData = (e) => {
        const newData = data.filter((value) => value['name'].toLowerCase().includes(e.target.value.toLowerCase()))
        console.log(data);
        setData(newData);
        if (e.target.value == '') {
            console.log(data);
        }
    }
    return (
        <div>
            <input type="search" onChange={searchData} />
        </div>
    )
}

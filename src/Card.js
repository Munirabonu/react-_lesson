import React, { useContext } from 'react'
import './main.css'
import { ContextHook } from './context';

export default function Card() {

    const [mock, setMock] = useContext(ContextHook)

    const deleteData = (id) => {
        let newData = mock.filter((value) => value.id !== id);
        setMock(newData);
    }
    return (
        <React.Fragment>
            <div className='card'>
                {
                    mock.map((value) => {
                        return (
                            <div className="card-item">
                                <div className="card-img"><img src={value.url} alt={value.name} /></div>
                                <div className="card-text">{value.name} as</div>
                                <button onClick={() => deleteData(value.id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

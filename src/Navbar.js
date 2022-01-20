import React, { useContext } from 'react'
import { Link} from 'react-router-dom';
import Search from './component/Search';
import { ContextHook } from './context'
import './main.css'
export default function Navbar() {
    const [count] = useContext(ContextHook);
    return (
        <React.Fragment>
            <div className='navbar'>
                <ul>
                    <Link className='Link' to="/"> Home</Link>
                    <Link className='Link' to="/help">Help</Link>
                    <Link className='Link' to="/about">About</Link>
                    <Link className='Link' to="/sign_up">Sign up</Link>
                    <li>{count.length}</li>
                </ul>
                <Search />
            </div>
        </React.Fragment> 
    )
}

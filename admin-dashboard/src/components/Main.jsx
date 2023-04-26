import React from 'react'
import { BiMenu as Menu, BiSearch as Search } from 'react-icons/bi'

const Main = () => {
  return (
    <>
        <div className="main">
            <div className="topbar">
                <div className="toggle">
                    <Menu/>
                </div>
                <div className="search">
                    <label>
                        <input type="text" placeholder='Search here...' />
                        <Search className='search-icon'/>
                    </label>
                </div>
                <div className="user">
                    <img src="vite.svg"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Main
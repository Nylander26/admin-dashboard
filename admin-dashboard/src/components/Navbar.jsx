import { React, useState } from 'react'
import { MdSpaceDashboard as Dashboard } from 'react-icons/md'
import { RiCustomerServiceFill as Customer } from 'react-icons/ri'
import { FiSettings as Settings, FiLogOut as Logout } from 'react-icons/fi'
import { BiMenu as Menu, BiSearch as Search, BiAperture as Icon } from 'react-icons/bi'
import "../css/index.css"
import Content from './Content'

const Navbar = () => {

    const [dashboard, setDashboard] = useState(false)
    const [customer, setCustomer] = useState(false)
    const [settings, setSettings] = useState(false)
    const [logout, setLogout] = useState(false)
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className="container">
                <div className={toggle ? 'navigation active' : 'navigation'}>
                    <ul>
                        <li>
                            <a href="#">
                                <span className="icon"><Icon /></span>
                                <span className="title">Brand Name</span>
                            </a>
                        </li>
                        <li onMouseLeave={() => {setDashboard(true), setCustomer(false), setSettings(false), setLogout(false)}} onMouseEnter={() => {setDashboard(true), setCustomer(false), setSettings(false), setLogout(false)}} className={dashboard ? "hovered" : ""}>
                            <a href="#">
                                <span className="icon"><Dashboard /></span>
                                <span className="title">Dashboard</span>
                            </a>
                        </li>
                        <li onMouseLeave={() => {setDashboard(false), setCustomer(true), setSettings(false), setLogout(false)}} onMouseEnter={() => {setDashboard(false), setCustomer(true), setSettings(false), setLogout(false)}} className={customer ? "hovered" : ""}>
                            <a href="#">
                                <span className="icon"><Customer /></span>
                                <span className="title">Customers</span>
                            </a>
                        </li>
                        <li onMouseLeave={() => {setDashboard(false), setCustomer(false), setSettings(true), setLogout(false)}} onMouseEnter={() => {setDashboard(false), setCustomer(false), setSettings(true), setLogout(false)}} className={settings ? "hovered" : ""}>
                            <a href="#">
                                <span className="icon"><Settings /></span>
                                <span className="title">Settings</span>
                            </a>
                        </li>
                        <li onMouseLeave={() => {setDashboard(false), setCustomer(false), setSettings(false), setLogout(true)}} onMouseEnter={() => {setDashboard(false), setCustomer(false), setSettings(false), setLogout(true)}} className={logout ? "hovered" : ""}>
                            <a href="#">
                                <span className="icon"><Logout /></span>
                                <span className="title">Sign Out</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={toggle ? 'main active' : 'main'}>
            <div className="topbar">
                <div className={toggle ? 'active toggle' : 'toggle'}>
                    <Menu onClick={() => setToggle(!toggle)} />
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
            <Content/>
        </div>
        </>
    )
}

export default Navbar
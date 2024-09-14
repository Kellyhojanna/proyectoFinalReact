import { motion } from 'framer-motion'
import menu from '../menu';
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
    const logo = '../src/images/logo_fieldtime.jpg';
    return (
        <motion.aside className="aside open" initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="aside-head" >
                <div className="brand">
                    <img src={logo} style={{ width: '150px' }} />
                </div>
            </div>
            <div className="aside-body">
                <nav>
                    <ul className='navigation'>
                        {
                            menu.map((element) => (
                                <li key={element.path} className="navigation-item">
                                    <NavLink className="navigation-link navigation-link-pill" end to={element.path} >
                                        <span className="navigation-link-info">
                                            <span className="navigation-text">{element.name}</span>
                                        </span>
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </motion.aside>
    );
}

export default Sidebar;
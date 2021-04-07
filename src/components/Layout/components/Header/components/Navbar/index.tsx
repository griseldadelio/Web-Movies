import React, { FC } from "react";
import { navLinks } from './datanav';
import { Link } from 'react-router-dom';
import { MenuItem } from './type';
import { Logo } from './components';
import './navbar.css';

export const NavBar: FC = () => {

    const GetNavLinks = () => (
        <ul className='MainNav-List'>
            <Logo />
            {navLinks.map(({ name, Icon, link, isButton }: MenuItem) => (
                isButton ?
                    (
                        <li key={name} className='MainNav-Item'>
                            <Link to={link} className='MainNav-Link' title={name}>
                                <Icon width={24} height={24} />
                            </Link>
                        </li>
                    ) : (
                        <li key={name} className='MainNav-Item'>
                            <Link to={link} className='MainNav-Link' title={name}>
                                <Icon width={24} height={24} />
                            </Link>
                        </li>
                    )
            ))}
        </ul>
    )
    return (
        <nav className='MainNav'>
            <GetNavLinks />
        </nav>
    )
}
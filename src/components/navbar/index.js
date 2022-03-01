import React from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>

		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/board' activeStyle>
			Board
		</NavLink>
		<NavLink to='/signup' activeStyle>
			Signup
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'>Login</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;

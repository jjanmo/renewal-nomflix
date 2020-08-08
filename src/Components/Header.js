import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<ul>
			<li>
				<Link to="/"> Home</Link>
			</li>
			<li>
				<Link to="/movie">movie</Link>
			</li>
			<li>
				<Link to="/tv">TV</Link>
			</li>
			<li>
				<Link to="search">Search</Link>
			</li>
		</ul>
	);
}

export default Header;

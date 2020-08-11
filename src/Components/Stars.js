import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfAlt, faStar } from '@fortawesome/free-solid-svg-icons';

function Stars({ rating, full, isNotHalf }) {
	const defaultStars = [0, 1, 2, 3, 4];
	return (
		<>
			{defaultStars.map((star, index) => {
				if (index < full) {
					return (
						<FontAwesomeIcon
							icon={faStar}
							size="sm"
							style={{ color: '#f8ce0b' }}
						/>
					);
				} else if (index === full && !isNotHalf) {
					return (
						<FontAwesomeIcon
							icon={faStarHalfAlt}
							size="sm"
							style={{ color: '#f8ce0b' }}
						/>
					);
				} else return null;
			})}
		</>
	);
}

export default Stars;

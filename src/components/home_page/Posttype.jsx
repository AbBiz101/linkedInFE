import React from 'react'

export default function Posttype({ title, color, Icon }) {
	return (
		<div className="posting_input_type">
			<Icon style={{ color: color }} />
			<p>{title}</p>
		</div>
	);
}
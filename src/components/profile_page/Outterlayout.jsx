import { Component } from 'react';
import { Container } from 'react-bootstrap';

class Outterlayout extends Component {
	render() {
		return (
			<Container>{this.props.children}</Container>
		);
	}
}

export default Outterlayout;

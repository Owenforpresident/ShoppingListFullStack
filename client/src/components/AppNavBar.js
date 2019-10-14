import React, { Component } from "react"; //brings in react and compnents from react
import {
	// brings in the bits we need from reactstrap
	Collapse, // this splitting into the individual parts
	Navbar, //called de-structuring
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	Container
} from "reactstrap";

class AppNavBar extends Component {
	//a class based component
	state = {
		//defines state as a boolean
		isOpen: false //isOpen:false means its in the negative state
	};
	toggle = () => {
		//a function which switches this state
		this.setState({
			isOpen: !this.state.isOpen
		}); // ! character means "not"
	};

	render() {
		//This is what the browser should actually render (show)
		return (
			<div>
				<Navbar color='dark' dark expand='sm' className='mb-5'>
					<Container>
						<NavbarBrand href='/'>ShoppingList</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className='ml-auto' navbar>
								<NavItem>I dont know</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default AppNavBar;

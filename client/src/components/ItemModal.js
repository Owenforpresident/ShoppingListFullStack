import React, { Component } from "react";
import {										//brings in thethings we need to build this component
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class ItemModal extends Component {				//declares a classed based component
	state = {
		modal: false,					//sets compoenent state to modal not being open
		name: " "						//sets the name property as empty so it can be entered by user
	};
	toggle = () => {					//toggle function for flipping the state (open to closed)
		this.setState({
			modal: !this.state.modal			//and vice versa
		});
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });		//when this event takes place set the user entered value to the "name"
	};

	onSubmit = e => {			//when they click submit 
		e.preventDefault();		//stops the browser from automatically reloading
		const newItem = {			//name entered to build a new item object which fits our schema for mongo
			name: this.state.name
		};

		this.props.addItem(newItem);		//submits the newly created item to the database

		this.toggle(); //toggles the modal so it goes away afer they have added theyre new item
	};
	render() {
		return (
			<div>
				<Button
					color='dark'
					style={{ marginBottom: "2rem" }}
					onClick={this.toggle}>
					Add Item
				</Button>
				<Modal isOpen={this.state.modal} toggle={this.toggle}>
					<ModalHeader toggle={this.toggle}>Add to Shopping List</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit}>
							<FormGroup>
								<Label for='item'> Item</Label>
								<Input
									type='text'
									name='name'
									id='item'
									placeholder='Add shopping item'
									onChange={this.onChange}></Input>
								<Button color='dark' style={{ marginTop: "2rem" }} block>
									Add Item
								</Button>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}
const mapStateToProps = state => ({		{/* Application level state */}
	item: state.item
});

export default connect(  {/* Export so these things can be useful elsewhere, (redux and app.js) */}
	mapStateToProps,
	{ addItem }
)(ItemModal);

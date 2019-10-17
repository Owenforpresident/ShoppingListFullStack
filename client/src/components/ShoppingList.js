import React, { Component } from "react";									//Brings ins everything needed to build the shopping list component 
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

class ShoppingList extends Component {    //declares the component 
	static propTypes = {							//validates the proptypes, basically explicity tells the component  what it needs to know how to
													//treat the props the way I intend it to
		getItems: PropTypes.func.isRequired,
		item: PropTypes.object.isRequired
	};

	componentDidMount() {				//when this component is sucessfully "called upon" call the getitems
		this.props.getItems();			// function (called action with redux)
	}
	onDeleteClick = id => {				//delete click function, calls the deleteitem action
		this.props.deleteItem(id);		// using the ID sent to this function by the delete button
	};
	render() {									//this is where it actually start "showing stuff"
		const { items } = this.props.item;
		return (
		<Container>					{/* Contains everything to kee it tidy */}	
				<ListGroup>
					<TransitionGroup className='shopping-list'>  {/* Gives the wrapped parts a transition porperty so things fade */}	
						{items.map(({ _id, name }) => (			{/* maps through the items and pulls out name and id */}	
							<CSSTransition key={_id} timeout={500} classNames='fade'> {/* Sets the transition to your desires */}	
								<ListGroupItem> {/* from the reactstrap library, handy for making lists */}	
									<Button  {/* Also from reactstrap */}	
										onClick={this.onDeleteClick.bind(this, _id)}> 
										className='remove-btn'     {/* In line jsx styling for the delete button */}	
										color='danger'
										size='sm'
										onClick={this.onDeleteClick.bind(this, _id)}> {/* When the button is clicked bind that item to the id and send that to the delete item function */}
										&times;  {/* The little x symbol for delete */}
									</Button>
									{name}   {/* displays the name of the(each) list item */}
								</ListGroupItem>
							</CSSTransition>
						))}
					</TransitionGroup>
				</ListGroup>
			</Container>
		);
	}
}

const mapStateToProps = state => ({				{/* makes sure items being shown come from the application level state*/}
	item: state.item
});

export default connect(					{/* exports this component along with the actions and the map state to props function */}
	mapStateToProps,
	{ getItems, deleteItem }			{/* this allows us to make use of this info elsewhere*/}
)(ShoppingList);

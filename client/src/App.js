import React from "react"; // Brings in react so we can use it, case sensitive!
import AppNavBar from "./components/AppNavBar"; //Brings in NavBar component we built elsewhere
import ShoppingList from "./components/ShoppingList";
import "bootstrap/dist/css/bootstrap.min.css"; // brings in react strap, bootstrap styling for react
import "./App.css"; //css styling for create-react-app
import { Provider } from "react-redux";
import store from "./store";
import ItemModal from "./components/ItemModal";
import { Container } from "reactstrap";

function App() {
	// a function component called app which returns a div containing
	// our components
	return (
		<Provider store={store}>
			<div className='App'>
				<AppNavBar />
				<Container>
					<ItemModal />
					<ShoppingList />
				</Container>
			</div>
		</Provider>
	);
}

export default App; //allows the app to be exported so it can be rendered?* not sure

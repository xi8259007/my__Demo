import React from "react";
import store from "./store";

class Cmp extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {
			count: store.getState().count
		}
		store.subscribe(() => {
			this.setState({
				count: store.getState().count
			})
		})
	}
	

	render() {
		return <div>
			{
				this.state.count
			}
		</div>
	}
}

export default Cmp;
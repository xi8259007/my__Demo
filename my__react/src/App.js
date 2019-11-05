import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import store from "./store";
import Cmp from "./Cmp";
import Cmp2 from "./Cmp2";


// console.log(store.getState())
class App extends React.Component {
    constructor(...args){
        super(...args);
        this.state = {  }
	}
	fnAdd(){
		store.dispatch({
			type: 'add'
		})
		console.log(store.getState())
	}
	fnMin() {
		store.dispatch({
			type: 'min'
		})
		console.log(store.getState())
	}
	async getJs(){
		let arr = await  (await fetch('/json.txt')).json;
		console.log(arr)
	}

    render(){ 
		return (
			<BrowserRouter>
				<div>
					<input type="button" value="获取JSON" onClick={this.getJs.bind(this)} />
					<input type="button" value="加一个" onClick = {this.fnAdd.bind(this)} />
					<input type="button" value="减一个" onClick={this.fnMin.bind(this)} /> <br />
					<Link to = "/" >组件1</Link>
					<Link to = "/b/123" > 组件2</Link>
					<Switch>
						<Route path="/" component={Cmp} />
						<Route path="/b/:id" component={Cmp2} />
					</Switch>
				</div>
			</BrowserRouter>
		)
        // return <div className="App">
        //     <header className="App-header">
        //         <img src={logo} className="App-logo" alt="logo" />
        //         <p>Edit <code>src/App.js</code> and save to reload.</p>
        //         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
        //     </header>
        // </div>
    }
}


// function App() {
//     return (
//         <header className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>Edit <code>src/App.js</code> and save to reload.</p>
//                 <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
//             </header>
//         </header>
//     );
// }

export default App;

import React, {Component} from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError : false
		}
	}

	componentDidCatch() {
		this.setState({hasError: true})
	}
	render() {
		if(this.state.hasError) {
			return <h1 className='tc yellow'>It seems we are about to be attacked. Run...</h1>
		}
		return this.props.children
	}
}
export default ErrorBoundary;
import React, { Component, PropTypes } from 'react'

class Counter extends Component {
	render() {
    	const { value, onIncrement, onDecrement } = this.props;
		return(
			<p>
				Click: {value} times {' '}
				<button onClick={onIncrement}>+</button>
        {' '}
        <button onClick={onDecrement}>-</button>
        {' '}
			</p>
      );
	}

}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}
export default Counter
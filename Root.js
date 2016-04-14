import React from 'react';
//import { Router, Route, Link, IndexRoute, History } from 'react-router'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')


var Root = React.createClass({
  render: function() {
    return (
      <div >
        <p>Hello, world! I am a CommentBox.</p>
        <Counter> 
          value={store.getState()}
          onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
          onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        </Counter>
      </div>
    );
  }
});

render()
store.subscribe(render)

/*
ReactDOM.render((

 <Root />
), document.body)
*/
const React = require('react');
const ReactDOM = ('react-dom')
require ('index.css')

function App() {
    return(
        <div>
            Hello World!
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
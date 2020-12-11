import React from 'react'
import { render } from 'react-dom'
import './index.css'
export const App = () => {
    return (
        <>
        <div className="test">Created React App without create-react-app?</div>
        <h1 className="test">Hell yeah !</h1>
        </>
    )
}

render(<App />, document.getElementById('app'));
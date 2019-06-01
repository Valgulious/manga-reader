import React from 'react'
import Menu from './menu/Menu.jsx'
import Body from './Body.jsx'

const App = () => {
    return(
        <div className="uk-align-center heig">
            <div className='uk-flex uk-flex-between'>
                <Menu/>
                <Body/>
            </div>
        </div>
    )
};

export default App;
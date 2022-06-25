import './App.css'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import DataContext, {data} from '../data/DataContext';

const App = props => {
    const [state, setState] = React.useState(data);

    return (
        <DataContext.Provider value={{state, setState}}>
        <div className="App">
            <Router>
                <Menu />
                <Content />
            </Router>
        </div>
        </DataContext.Provider>
    )
}

export default App

// ? attr value é o initial data
// ? {{}} -> a primeira chave é o que o React usa para interpolar um valor, a segunda chave é um objeto javascript
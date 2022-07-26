import React from "react";

const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
};

export const AppContext = React.createContext(initialState);

const Store = props => {
    const [state, setState] = React.useState(initialState);
    
    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        });
    }
    
    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: n => updateState('text', n),
        }}>
            {props.children}
        </AppContext.Provider>
    );
};

export default Store;

// ? Caso queira passar um nome de uma key dinamicamente, basta usar o colchete entre o valor que será o nome da key. Ex: [key]: 'valor key'
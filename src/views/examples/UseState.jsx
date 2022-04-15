import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseStateExample = (props) => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Inicial...");
    
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01" />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                <button className="btn" onClick={() => setCount(count + 1)}>+1</button>
                </div>
            </div>
            <SectionTitle title="Exercício #02" />
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)} />
            <span className="text">{name}</span>

        </div>
    )
}

export default UseStateExample

// * Se você passar uma função com parâmetro para o setCount, você coseguirá o valor atual do count
// * Ex: setCount(current => current + 1000)
// * O estado modifica a interface, o contrário não verdadeiro
// * Se você passar um valor null para o value do input, ele não terá um estado vinculado
// * Geramos um evento e o estado foi modificado
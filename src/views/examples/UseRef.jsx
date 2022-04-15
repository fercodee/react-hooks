import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {
    const [value1, setValue1] = React.useState("");
    const [value2, setValue2] = React.useState("");

    const count = React.useRef(0); 
    const myInput1 = React.useRef(null);
    const myInput2 = React.useRef(null);

    React.useEffect(() => {
        count.current++;
        myInput2.current.focus();
    }, [value1]);

    React.useEffect(() => {
        count.current++;
        myInput1.current.focus();
    }, [value2]);
    
     // * Minha implementação
    //  const merge = function(s1, s2) {
    //     let text = '';
    //     for (let index = 0; index < s1.length; index++) {
    //         const element = s1[index];
    //         text += element + (s2[index] || ""); 
    //     }
    //     return text;
    // }

    // * Implementação do professor
    const merge = function (s1, s2) {
        return [...s1]
        .map((e, i) => `${e}${(s2[i] || "")}`)
        .join("");
    }

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                  <span className="text">Valor: </span>
                  <span className="text">{merge(value1, value2)} [</span>
                  <span className="text red">{count.current}</span>
                  <span className="text">]</span>
                </div>
                <input type="text" className="input" 
                ref={myInput1}
                value={value1} 
                onChange={e => setValue1(e.target.value)} />
            </div>
            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <input type="text" className="input"
                ref={myInput2}
                value={value2} onChange={e => setValue2(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseRef

// ? UseRef: controla o número de vezes que esse componente é renderizado
// ? Vai retorna um objeto (passagem de referência), você consegue ter um estado a partir do .current
// ? Quando o ref é alterado, o componente não é renderizado novamente
// ? O valor inicial que você passará para o .useRef ficará em .current
// ? Existe a possibilidade de usar o ref para pegar um elemento HTML
// ? Ao colocar um atributo ref a um elemento HTML, o React automaticamente irá criar uma referência para esse elemento que poderá ser acessada artravés do .current
// ? Obs: você pode usar mais um useEffect no seu componente
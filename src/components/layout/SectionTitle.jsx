import './SectionTitle.css'
import React from 'react'

const SectionTitle = props => {

 const [state, setState] = React.useState('0');
 function teste() {
    return 'isso é uma teste';
 }

    <div className="SectionTitle">
        <h3>{props.title}</h3>
    </div>
}

export default SectionTitle
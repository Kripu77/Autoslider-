import React,{useEffect, useState} from 'react'
import data from "./data"
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa'

const Slider = () => {
const [people, setPeople] = useState(data);
const [ index, setIndex] = useState(0);

useEffect(()=>{

},[])

    return (
      <section className='section'>
<div className="title">
    <h2>
        <span> /</span>

    </h2>
</div>
<div className="section-center">
    {people.map((person, personIndex)=>{
        const{id, image, name, title, quote} = person;

        return <article key= {id}>
            <img src={image} alt={name}  className="person-img"/>
            <h4> {name}</h4>
        </article>
    })}
</div>
      </section>
    )
}

export default Slider

import React,{useEffect, useState} from 'react'
import data from "./data"
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa'

const Slider = () => {
const [people, setPeople] = useState(data);
const [ index, setIndex] = useState(2);

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
        const{id, image, name, text, quote} = person;
let position = 'nextSlide'
if(personIndex === index){
    position= 'activeSlide';
}
        return <article key= {id} className={position}>
            <img src={image} alt={name}  className="person-img"/>
            <h4> {name}</h4>
            <p className="title">{text}</p>
            <p className="text"> {quote}</p>
            <FaQuoteRight className="icon"/>
        </article>
    })}
    <button className="prev" onClick={()=>setIndex(index+1)}> <FiChevronLeft/></button>
       <button className="next" onClick={()=>{setIndex(index-1)}}> <FiChevronRight/></button>
</div>
      </section>
    )
}

export default Slider

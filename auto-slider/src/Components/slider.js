import React,{useEffect, useState} from 'react'
import data from "./data"
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa'

const Slider = () => {
const [people, setPeople] = useState(data);
const [ index, setIndex] = useState(0);

//to check the index size
const checkFn = (index) =>{
    if(index>people.length-1){
        return 0
    }
    if(index<0){
   return people.length-1
    }
    return index
}

useEffect(()=>{
let cleanUp=setInterval(()=>{
    setIndex((prevIndex)=>
    checkFn(prevIndex+1))
}, 4000)
return ()=> clearInterval(cleanUp);
},[])

    return (
      <section className='section'>
<div className="title">
    <h2>
        <span> /</span>
Inspirational Quotes
    </h2>
</div>
<div className="section-center">
    {people.map((person, personIndex)=>{
        const{id, image, name, text, quote} = person;
let position = 'nextSlide'
if(personIndex === index){
    position= 'activeSlide';
}
if(personIndex===index-1 || (index==0 && personIndex === people.length-1)){
    position= 'lastSlide';
}

        return <article key= {id} className={position}>
            <img src={image} alt={name}  className="person-img"/>
            <h4> {name}</h4>
            <p className="title">{text}</p>
            <p className="text"> {quote}</p>
            <FaQuoteRight className="icon"/>
        </article>
    })}
    <button className="prev" onClick={()=>setIndex((()=>checkFn(index-1)))}> <FiChevronLeft/></button>
       <button className="next" onClick={()=>{setIndex((()=>checkFn(index+1)))}}> <FiChevronRight/></button>
</div>
      </section>
    )
}

export default Slider

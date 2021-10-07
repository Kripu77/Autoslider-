import React,{useEffect, useState} from 'react'
import data from "./data"
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaQuoteRight} from 'react-icons/fa'

const Slider = ()=>{
const[people, setPeople] = useState(data);
const[ index, setIndex] = useState(1);


useEffect(()=>{
if(index>people.length-1){
    setIndex(0);

}
if(index<0){
    setIndex(people.length-1)
}

}, [index]) //useEffect will only trrigger if the value of index changes

//for autoslider we will use setInterval function
useEffect(()=>{
   const slider= setInterval(()=>{
        setIndex((prevState)=>{
             return prevState+1
        })
    }, 4000)
    // the slider effect will be faulty if we do not place clear interval inside the useeffect
    return ()=>{clearInterval(slider)}
},[index])

    return (<section className="section">
        <h2 className="title"> <span>//</span>  Inspirational Quotes</h2>
<div className="section-center">
    {people.map((person, personIndex)=>{
        const{id, name, image, text,  job} = person;
let position = "nextSlide";
        if(personIndex === index){
position = "activeSlide"
        }
        if(personIndex=== index-1 || index === 0 && personIndex === people.length-1){
            position= "lastSlide";
        }
        return <article key={id} className={position}>
            <img src={image} alt={name} className="person-img"/>
            <h4 className="name"> {name}</h4>
                <h4 className="name"> {job}</h4>
            <p className="title"> {text}</p>
        
            <FaQuoteRight className="icon"/>
       

        </article> 

    })}
<button  className="prev" onClick={()=>setIndex(index-1)}> <FiChevronLeft/></button>
<button  className="next"onClick={()=>setIndex(index+1)}> <FiChevronRight/></button>
</div>
    </section>)


}

export default Slider;
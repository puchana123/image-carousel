import ImageData from "./ImageData"
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import {useState} from 'react'

const ImageSlider = ()=>{

    const [current,setCurrent] = useState(0)
    const imageLength = ImageData.length

    const nextSlide = ()=>{
        current===imageLength-1 ? setCurrent(0):setCurrent(current+1)
    }

    const prevSlide = ()=>{
        current===0? setCurrent(imageLength-1):setCurrent(current-1)
    }

    return(
        <section className='slider'>
            <AiOutlineArrowLeft className="leftArrow" onClick={prevSlide}/>
            {ImageData.map((data,index)=>{
                return(
                   <div className={ index === current ? 'slide active': 'slide'} key={index}>
                        {index === current&&
                        <div>
                            <img className='image' src={data.src} alt={data.title}/>
                            <p>{data.title}</p>
                        </div>}
                   </div> 
                )
            })}
            <AiOutlineArrowRight className="rightArrow" onClick={nextSlide}/>
        </section>
    )
}

export default ImageSlider
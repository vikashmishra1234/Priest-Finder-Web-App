import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Carousels = () => {
  return (
    <div className="carousel-container">

    <Carousel
 emulateTouch={true}
    showArrows={false}
    infiniteLoop={true}
    swipeable={false}
    >
    <div>
        
        <div id='legend1'>
        <h1 className="">Jai Shree <bold id='bold'>Krishna</bold></h1>
        <p>One of the <span style={{color:'bisque',fontWeight:'bold'}}>Spiritual</span> and sacred places in India, lined with a number of temples along the roads is Mathura City, the birth land of <span style={{color:'bisque',fontWeight:'bold'}}>Lord Krishna</span></p>
        </div>
    </div>
    <div>
        <div id="legend2">
          <h1>About Mathura-Vrindavan</h1>
          <div className="legend">
            <h2>Radhe Radhe</h2>
            <p>

            Mathura is a holy city in Hinduism and is considered the heart of Brij Bhoomi, the land of Krishna.[56][57] The twin-city to Mathura is Vrindavan.

There are many places of historic and religious importance in Mathura and its neighbouring towns.[6]

Krishna Janmasthan Temple Complex is an important group of temples built around what is considered to be the birthplace of Krishna.          </p>
            </div>
        </div>
        
    </div>
    {/* <div>
        <img src="https://blog.yatradham.org/wp-content/uploads/2018/10/44661494112_6052bfda6d_o.jpg" />
        <p className="legend">Legend 2</p>
    </div> */}
</Carousel>
    </div>
  )
}

export default Carousels
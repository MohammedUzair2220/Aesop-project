import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/carousel.css';

const CarouselComp = () => {
    return (
        <div style={{ display: 'block', width:300 , padding: 30 }}>
    
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.aesop.com/u1nb1km7t5q7/1pr54VIGFr7VyVW9UXGXm4/0eeedad1ea45c86f45ce8c724bfbc4cb/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Facial-Hydrating-Cream-60mL-large.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.aesop.com/u1nb1km7t5q7/vj7h54KpQQ7ha4ZP68aYe/6bfa6f01d7b0e4558b82e23bd956891f/Aesop-Skin-Parsley-Seed-Facial-Cleansing-Oil-200mL-large.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.aesop.com/u1nb1km7t5q7/1BNbhQXF8YaNdESg5DDhZS/a41f260793399f1327d1782e213a3e81/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Facial_Treatment_15mL_Web_Large_684x668px.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.aesop.com/u1nb1km7t5q7/18oCIrIJkaPhgw23dVa6xz/29244f678a3fc2b0308a0edac55b2171/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Intense_Serum_60mL_Web_Large_684x668px.png"
      alt="Fourth slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.aesop.com/u1nb1km7t5q7/LL8pUKUiuq1n8mKKpLdbb/b41e1d77b6dfeca7632d6677ee232fcb/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png"
      alt="Fifth slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.aesop.com/u1nb1km7t5q7/X8p8nJaqVBrDKAQReq7rw/59a53d0f37256e15ad05c9e83726ee5f/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Large_901x478px.png"
      alt="Sixth slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>


  
</Carousel>
</div>
    )
}
// const Carousel = () => {
//     return (
//             <div className="wrapper">
//                 <h1>Others also considered</h1>
//                 <div className="container">
//                     <div className="slider">
//                     <div className="items" >
//                         <div className="item-carousel">
//                         <div className="child">
//                         </div>
//                         <div className="footer"></div>
//                         </div>
//                         <div className="item-carousel">
//                         <div className="child">2</div>
//                         <div className="footer"></div>
//                         </div>
//                         <div className="item-carousel">
//                         <div className="child">3</div>
//                         <div className="footer"></div>
//                         </div>
//                         <div className="item-carousel">
//                         <div className="child">4</div>
//                         <div className="footer"></div>
//                         </div>
//                         <div className="item-carousel">
//                         <div className="child">5</div>
//                         <div className="footer"></div>
//                         </div>
//                         <div className="item-carousel">
//                         <div className="child">6</div>
//                         <div className="footer"></div>
//                         </div>
//                         <div className="item-carousel">
//                         <div className="child">7</div>
//                         <div className="footer"></div>
//                         </div>
//                         <div className="item-carousel">
//                         <div className="child">8</div>
//                         <div className="footer"></div>
//                         </div>
//                         <div className="item-carousel">
//                         <div className="child">9</div>
//                         <div className="footer"></div>
//                         </div>
//                         <div className="item-carousel">
//                         <div className="child">10</div>
//                         <div className="footer"></div>
//                         </div>
//                         <div className="item-carousel">
//                         <div className="child">11</div>
//                         <div className="footer"></div>
//                         </div>
                        
//                     </div>
//                     <div className="buttons">
//                         <div id="left">⇠</div>
//                         <div id="right">⇢</div>
//                     </div>
//                     </div>
//                 </div>
//             </div>
//     )
// }

export default CarouselComp;
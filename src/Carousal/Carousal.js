import React from 'react'
import './Carousal.css'

const Carousal = () => {
  return (
    <div id='d1'>
      
     <swiper-container class="mySwiper" navigation="true">
      <swiper-slide> <img src='https://www.reliancedigital.in/medias/Apple-iPhone-13-Smartphones-491997702-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzMDkzMTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGI5L2gxMS85ODc4MTAyNjA1ODU0LmpwZ3w5NGFjNjk3MDQ1ZmU2Y2Q1YmY0ZTljZWM4N2JkMjdhNzE0ZmVlZDQxYzJhNjExNDdkZjY1MmQwYjQ2YTc0NWJm' alt='' height="100%" width="30%"></img></swiper-slide>
     <swiper-slide><img src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71hIfcIPyxS._SL1500_.jpg' alt=''   ></img></swiper-slide>
     <swiper-slide> <img src=' https://cdnmedia.placewellretail.com/pub/media/catalog/product/cache/d2f155c8ae3423b25125c336aa39579e/i/p/iphone-11_purple_1_2.webp' alt='alt'></img></swiper-slide>
     <swiper-slide><img src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone12-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958189616' alt='' ></img></swiper-slide>
     <swiper-slide> <img src ='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQU73?wid=532&hei=582&fmt=png-alpha&.v=1676920930838 ' alt='' ></img></swiper-slide>
     <swiper-slide><img src='data:image/jpeg;base64,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' alt='' ></img></swiper-slide>
          <swiper-slide><img src=' https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.slideshow-medium_2x.jpg' alt='' ></img></swiper-slide>



       </swiper-container>




         </div>
  )
}

export default Carousal
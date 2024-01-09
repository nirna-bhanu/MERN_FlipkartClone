import React from 'react'
import { useEffect } from 'react';
import { Box, styled } from '@mui/material';
import { getProducts } from '../redux/actions/productActions';
import { useDispatch,useSelector } from 'react-redux';


import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';


const Component = styled(Box)`
    padding:10px;
    background: #F2F2F2;
`;


function Home() {

  
 const {products}= useSelector(state=>state.getProducts)




  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(getProducts())
  },[dispatch])
  return (

    <>
     <NavBar/>
     <Component>

     <Banner/>
     
     <MidSlide products={products}
               timer={true}
               title='Discounts for You'
           />
            <MidSection/>
   
                <Slide 
                   timer={false} products={products}
                
                    title='Suggested Items'
                   
                />
                <Slide
                 timer={false}  products={products}
                 
                    title='Top Selection'
                  
                />
                <Slide
                 timer={false}  products={products}
                  
                    title='Recommended Items'
                 
                />
               
     </Component>
     </>
    
  )
}

export default Home

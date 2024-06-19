import React from 'react'
import NtfImage from '../images/nft-img.png'
import {Box, Container, Stack, Button } from '../styled'
import {ReactComponent as RightIcon } from '../images/right-arrow.svg'
import styled from 'styled-components'

const CustomButton = styled(Button) `
  padding-left: 0px; 

  svg {
    margin-left: 16px;
    
    & > * {
      fill: #f31caa; 
    }
  }
`;

const CustomStack = styled(Stack) `
@media screen and (max-width:767px) {
flex-direction:column;

& > * {
    margin-left:0px;
    margin-top:24px;
}
}
`;


function Hero() {
  return (
    <Container mt={['24px','72px']}>
        <CustomStack spacing='118px'>
            <Stack direction='column' align='start' spacing='48px' flex = '1 1 auto' >
                <Box><h1>The easiest way to buy photo as NTF</h1></Box>
                <CustomButton 
                variant='text'
                size ={["lg","xl"]}
                rightIcon={<RightIcon/>}>
                    Start now
                </CustomButton>
            </Stack>
            <Box
            width='100%'
            height='356px'
            position='relative'
            borderradius='16px'
            overflow = 'hidden'
            display = 'flex'
            style={{
                transform : "translateZ(0)", //  ******* in safari and ios the combination of display and overflow does not work correctly, 
                                            //it makes it work well *******
            }}
            >
                <img src={NtfImage} alt='text' style={
                    {
                        position: "absolute",
                        width:"100%",
                        height: "100%",
                    }
                }/>
            </Box>
        </CustomStack>
    </Container>
  )
}


export default Hero

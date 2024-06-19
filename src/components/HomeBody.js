import React from 'react';
import {Box, Container, Stack, Button, InputWrapper } from '../styled'
import { useState, useEffect } from 'react';
import { ReactComponent as SearchIcon } from '../images/search-media.svg';
import instance from '../api';
import {useDispatch, useSelector} from 'react-redux'
import { fetchdata } from '../redux/reducers/api-reducers';




const HomeBody = () => {
  const {photo } = useSelector((state) => state )
  console.log(photo)
 const dispatch = useDispatch();

 useEffect(()=> {
  dispatch(fetchdata('photos'));
 })
  return (
    <Container size='fullwidth'>
     
      <Container mt='96px'>
            <Stack
            justify='space-between'
            align={'end'}
            >
            <h4> Search here </h4>
                <p
                style={
                    {color: "var(--grey-700)"}
                }>
                    Richiesta 50/50
                </p>    
            </Stack>
            <Box>
            <Stack
            width='fit-content'
            bg='grey.900'
            borderradius='100px'
            border='1px solid'
            bordercolor={"grey.700"}
            px = '18px'
            style = {{
                overflowX: "hidden",
            }}
           > 
           <InputWrapper placeholder='cerca photo'
                    border = 'none'
                    pl = '0px'
                    value='React'
                    onChange={() => {
                        return;
                    }  } 
                  /> 
          
                <Button
                rightIcon={<SearchIcon/>}
                isLoading = {false}
                disabled = {false}
                variant = 'text'
                iconcolor = 'grey.700'
                bg = 'grey.300'
                />
            </Stack>
            </Box>
      </Container>
    </Container>
  )
}

export default HomeBody

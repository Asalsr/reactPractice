import React from "react";
import Layout from "../components/layout";
import Hero from "../components/Hero";
import {Box, Container, InputWrapper, Skeleton, Stack, Button } from '../styled'
import HomeBody from "../components/HomeBody";

const HomeScreen = () => {
    
    return (
    <>
        <Layout>
            <Container size='fullwidth'>
            <Hero/>
            <HomeBody/> 
            </Container>
        </Layout>
    </>
    )
}

export default HomeScreen;
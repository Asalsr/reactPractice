import React from "react";
import Layout from "../components/layout";
import { useParams } from "react-router-dom";


const PaginationScreen = () => {
    const {page} = useParams();
    return (
        <>
        <h1> Paginated photo {page} </h1>
        </>
    )
}

export default PaginationScreen;
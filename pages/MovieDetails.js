import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
    const { id } = useParams()
    return (
        <h1>Movie Details {id}</h1>
    ) 
}
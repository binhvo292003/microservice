import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const { id } = useParams();
    return <h2>Product Detail Page for product {id}</h2>;
}

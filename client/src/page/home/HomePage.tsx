import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Carousel from './Carousel';

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: '$10.00',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        name: 'Product 2',
        price: '$20.00',
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 3,
        name: 'Product 3',
        price: '$30.00',
        image: 'https://via.placeholder.com/150',
    },
];

export default function HomePage() {
    return (
        <>
            <Carousel />

            <div className="container mx-auto p-4">
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">
                        Highlighted products
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="border p-4 rounded-lg"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover mb-4"
                                />
                                <h2 className="text-xl font-semibold mb-2">
                                    {product.name}
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    {product.price}
                                </p>
                                <Link to={`/product/${product.id}`}>
                                    <Button>Add to Cart</Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">Sales</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="border p-4 rounded-lg"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover mb-4"
                                />
                                <h2 className="text-xl font-semibold mb-2">
                                    {product.name}
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    {product.price}
                                </p>
                                <Link to={`/product/${product.id}`}>
                                    <Button>Add to Cart</Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">New arrivals</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="border p-4 rounded-lg"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover mb-4"
                                />
                                <h2 className="text-xl font-semibold mb-2">
                                    {product.name}
                                </h2>
                                <p className="text-gray-700 mb-4">
                                    {product.price}
                                </p>
                                <Link to={`/product/${product.id}`}>
                                    <Button>Add to Cart</Button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

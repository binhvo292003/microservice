import ProductCard from './ProductCard';

const list = [
    { title: 'Product 1', price: 100, rating: 4, imageURL: 'https://via.placeholder.com/150' },
    { title: 'Product 2', price: 200, rating: 3, imageURL: 'https://via.placeholder.com/150' },
    { title: 'Product 3', price: 300, rating: 2, imageURL: 'https://via.placeholder.com/150' },
    { title: 'Product 4', price: 400, rating: 1, imageURL: 'https://via.placeholder.com/150' },
    { title: 'Product 5', price: 500, rating: 5, imageURL: 'https://via.placeholder.com/150' }
];

export default function ProductList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {list.map((item, index) => (
                <ProductCard key={index} />
            ))}
        </div>
    );
}

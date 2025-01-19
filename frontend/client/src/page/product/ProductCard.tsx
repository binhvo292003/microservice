interface ProductCardProps {
    product: {
        title: string;
        price: number;
        rating: number;
        imageURL: string;
    };
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="max-w-sm rounded overflow-auto shadow-lg">
            <img className="w-full h-64 object-cover" src={product.imageurl} alt="Product Image" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base">${product.price}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    ★★★★☆
                </span>
            </div>
        </div>
    );
}

import ProductList from './ProductList';
import ProductSearch from './ProductSearch';

export default function ProductPage() {
    return (
        <>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-1">
                    <ProductSearch />
                </div>
                <div className="col-span-5">
                    <ProductList />
                </div>
            </div>
        </>
    );
}

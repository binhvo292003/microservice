import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";

export default function ProductPage() {
    return (
        <>
            <div className="grid grid-cols-6 gap-4">
                <div className='col-span-1'>
                    <div>
                        <ProductSearch />
                    </div>
                    {/* <Paper sx={{ mb: 2, p: 2 }}>
                        <RadioButtonGroup
                            selectedValue={productParams.orderBy}
                            options={sortOptions}
                            onChange={(event) =>
                                dispatch(setProductParams({ orderBy: event.target.value }))
                            }
                        />
                    </Paper>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <CheckboxButtons
                            items={brands}
                            checked={productParams.brands}
                            onChange={(items: string[]) =>
                                dispatch(setProductParams({ brands: items }))
                            }
                        />
                    </Paper>
                    <Paper sx={{ mb: 2, p: 2 }}>
                        <CheckboxButtons
                            items={types}
                            checked={productParams.types}
                            onChange={(items: string[]) =>
                                dispatch(setProductParams({ types: items }))
                            }
                        />
                    </Paper> */}
                </div>
                <div className='col-span-5'>
                    <ProductList/>
                </div>
            </div>
        </>
    );
}

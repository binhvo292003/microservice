import FilterGroup from "./FilterGroup";

export default function ProductSearch() {
    return (
        <>
            <form className="max-w-md mx-auto">
                <div className="relative">
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 text-sm border border-gray-300 rounded-lg"
                        placeholder="Search ..."
                        required
                    />
                    <button
                        type="submit"
                        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Search
                    </button>
                </div>
            </form>
            <FilterGroup />
            <FilterGroup />
            <FilterGroup />
        </>
    );
}

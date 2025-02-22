import FilterItem from './FilterItem';

const filterItem = [
    {
        isCheck: false,
        label: 'Cate A'
    },
    {
        isCheck: false,
        label: 'Cate B'
    },
    {
        isCheck: false,
        label: 'Cate C'
    },
    {
        isCheck: false,
        label: 'Cate D'
    }
];

export default function FilterGroup() {
    return (
        <>
            <div className="flex gap-2 flex-col border-t border-gray-300 pt-2 mt-2">
                <div>Category Group A</div>
                {filterItem.map((item, index) => (
                    <FilterItem key={index} isCheck={item.isCheck} filterItemName={item.label} />
                ))}
            </div>
        </>
    );
}

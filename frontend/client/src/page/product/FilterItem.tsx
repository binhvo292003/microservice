import { Checkbox } from '@/components/ui/checkbox';

interface FilterItemProps {
    isCheck: boolean;
    filterItemName: string;
}

export default function FilterItem({
    isCheck = false,
    filterItemName = 'Filter Item Name'
}: FilterItemProps) {
    return (
        <>
            <div className="flex items-center gap-2">
                <Checkbox checked={isCheck} />
                <div>{filterItemName}</div>
            </div>
        </>
    );
}

type Props = {
    value: number;
    onChange: (value: number) => void;
    label: string;
};

const RangeInput = ({value, onChange, label}: Props) => {
    const handleRangeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(event.target.value));
    };

    return (
        <div className="w-full items-center flex flex-col">
            <label htmlFor="minmax-range1" className="block mt-2 mb-2 text-sm font-medium text-gray-900">
                {label}
            </label>
            <input
                id="labels-range-input1"
                type="range"
                value={value}
                min="0"
                max="10"
                onChange={handleRangeInputChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
        </div>
    );
};

export default RangeInput;

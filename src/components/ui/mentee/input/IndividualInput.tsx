type Props = {
    value: number;
    onChange: (value: number) => void;
};

const IndividualInput = ({value, onChange}: Props) => {
    const handleIndividualChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(Number(event.target.value));
    };

    return (
        <div className="w-full items-center flex flex-col">
            <label htmlFor="minmax-range1" className="block mt-2 mb-2 text-sm font-medium text-gray-900">
                개인적으로 (자기자신의 웰빙)
            </label>
            <input
                id="labels-range-input1"
                type="range"
                value={value}
                min="0"
                max="10"
                onChange={handleIndividualChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
        </div>
    );
};

export default IndividualInput;

function InputBox({
    label,
    amount,
    onAmountChange,
    currency,
    onCurrencyChange,
    currencyOptions = [],
}) {
    return (
        <div className="bg-gray-50 p-4 rounded-lg flex justify-between items-center gap-4">

            <div className="flex flex-col w-1/2">
                <label className="text-sm text-gray-500 mb-1">
                    {label}
                </label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => onAmountChange(e.target.value)}
                    className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="flex flex-col w-1/2 text-right">
                <label className="text-sm text-gray-500 mb-1">
                    Currency
                </label>
                <select
                    value={currency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                    className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    {currencyOptions.map((cur) => (
                        <option key={cur} value={cur}>
                            {cur}
                        </option>
                    ))}
                </select>
            </div>

        </div>
    );
}

export default InputBox;

import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // get currency rates based on FROM currency
  const currencyInfo = useCurrencyInfo(from);

  // dropdown options
  const options = Object.keys(currencyInfo);

  // swap currencies
  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  // convert amount
  const convert = () => {
    if (!currencyInfo[to]) return;
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4">

        <InputBox
          label="From"
          amount={amount}
          currency={from}
          currencyOptions={options}
          onAmountChange={(amount) => setAmount(amount)}
          onCurrencyChange={(currency) => setFrom(currency)}
        />

        <button
          onClick={swap}
          className="bg-blue-600 text-white py-2 rounded-lg font-semibold"
        >
          Swap
        </button>

        <InputBox
          label="To"
          amount={convertedAmount}
          currency={to}
          currencyOptions={options}
          onAmountChange={() => { }}
          onCurrencyChange={(currency) => setTo(currency)}
        />

        <button
          onClick={convert}
          className="bg-green-600 text-white py-2 rounded-lg font-semibold"
        >
          Convert
        </button>

      </div>
    </div>
  );
}

export default App;

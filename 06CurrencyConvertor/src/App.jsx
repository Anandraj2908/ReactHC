import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)
  const [to,setTo] = useState("inr")
  const [from,setFrom] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  //for swapping the to and from components data  
  const swap = () =>{
    setTo(from)
    setFrom(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  //converting the amount
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  
  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1612835362596-4b0b2b1b0b0f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VycmVuY3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80')`,
        }}
    >
        <div className="w-full ">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}

                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App

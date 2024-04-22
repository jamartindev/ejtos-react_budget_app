import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        const selectedCurrency = event.target.value;
        dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
    }

    return (
        <div className="form-floating">
            <select className="form-select bg-primary" id="selectCurrency" aria-label="Floating label" onChange={handleCurrencyChange} value={currency}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
            <label htmlFor="selectCurrency">Currency</label>
        </div>
    )
}

export default Currency;
import DisplayResult from "@/Components/DisplayResult"
import { useState } from "react"

export default function () {

    const [city, setCity] = useState('')
    const [cityError, setCityError] = useState('')
    const [result, setResult] = useState('')

    const handleSubmit = async (e) => {

        e.preventDefault()

        if (city.length === 0) {
            setCityError("City name required")
            return false;
        } else {
            setCityError("")
        }

        try {
            const response = await fetch('/api/weather', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ city }),
            });

            const data = await response.json();
            
            if (data.city) {
                setResult(data)
            } else {
                setResult(null)
                setCityError("Invalid city name")
            }

        } catch (error) {
            setCityError("Server Error")
        }

    }

    const onChangeForm = (e) => {
        setCity(e.target.value)
    }

    return (
        <div className="container-blank">
            <div className="container">
                <h1>Weather Forecast</h1>
                <form onSubmit={handleSubmit} noValidate={true}>
                    <div className="form-group">
                        <label htmlFor="city">Enter your city name</label>
                        <input type="text"
                            className="form-control input-field"
                            id="city"
                            value={city}
                            name="city"
                            onChange={onChangeForm}
                        />
                        <div className="color-red">{cityError}</div>
                    </div>
                    <button className="btn big" type="submit">Submit</button>
                </form>

                {
                    result &&
                    <DisplayResult result={result} />
                }

            </div>
        </div>
    )
}

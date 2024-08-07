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

            if (!response) {
                setCityError("Invalid city name")
            }

            const data = await response.json();
            setResult(data)
            console.log('Weather data stored successfully:', data);
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
                    <div className="results">
                        <div className="item">
                            <span className="label">City</span>
                            <strong className="value">:{result.city}</strong>
                        </div>
                        <div className="item">
                            <span className="label">Temperature</span>
                            <strong className="value">:{result.temperature}&deg;C.</strong>
                        </div>
                        <div className="item">
                            <span className="label">Humidity</span>
                            <strong className="value">:{result.humidity}%</strong>
                        </div>
                        <div className="item">
                            <span className="label">Wind Speed</span>
                            <strong className="value">:{result.wind_speed}m/sec</strong>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

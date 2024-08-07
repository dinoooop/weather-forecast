
export default function ({ result }) {
    return (
        <div className="results">
            <div className="item">
                <span className="label">City</span>
                <strong className="value">: {result.city}</strong>
            </div>
            <div className="item">
                <span className="label">Temperature</span>
                <strong className="value">: {result.temperature}&deg;C.</strong>
            </div>
            <div className="item">
                <span className="label">Humidity</span>
                <strong className="value">: {result.humidity}%</strong>
            </div>
            <div className="item">
                <span className="label">Wind Speed</span>
                <strong className="value">: {result.wind_speed}m/sec</strong>
            </div>
        </div>
    )
}

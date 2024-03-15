import monkeySpinner from "../../assets/rilla-roo-icon.png"

const LoadingSpinner = () => {
    return (
        <div className="loading-spinner-wrapper">
            <img src={monkeySpinner} alt="famous crash bandicoot side character Rilla Roo's face" className="loading-spinner-image" />
            <p className="loading-spinner-text">content<br/><br/><br/>loading</p>
        </div>
        )
}

export default LoadingSpinner
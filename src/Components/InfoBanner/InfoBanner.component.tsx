import "./InfoBanner.styles.scss";

type InfoBannerProps = {
    temperature: string;
    description: string;
    city: string;
};

const InfoBanner = ({ temperature, description, city }: InfoBannerProps) => {
    return (
        <div className="info-banner-container">
            <span className="info-banner-city">{city}</span>
            <hr></hr>
            <span className="info-banner-temp">{temperature}°</span>
            <span className="info-banner-desc">{description}</span>
        </div>
    );
};

export default InfoBanner;

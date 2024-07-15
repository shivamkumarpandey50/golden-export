import "./InfoPage.css";

const InfoPage = () => {
  return (
    <div className="info-page">
      {/* <div className="info-container"> */}
      <div className="info-image-container">
        <img
          src="src/assets/about_us.webp"
          alt="Exhibit"
          className="info-image"
        />
        <button
          className="play-button"
          onClick={() => console.log("Play video")}
        >
          &#9658;
        </button>
      </div>
      <div className="info-content">
        <h2 className="info-title">HOW WE ARE</h2>
        <h3 className="info-subtitle">
          Established in 2007, Golden Exports marks its origins in the
          international trade landscape, reflecting over a decade of experience
          and growth in the industry.
        </h3>
        <p>
          The company's headquarters are situated in Ningbo, Zhejiang, China,
          with a sizable workforce exceeding 70 employees. Additionally, it
          operates offices in strategic locations such as Suzhou, Hong Kong,
          India, and Dubai, facilitating efficient operations and client
          interactions across different regions.
        </p>
        <button className="read-more-button">READ MORE &rarr;</button>
      </div>
      {/* </div> */}
    </div>
  );
};

export default InfoPage;

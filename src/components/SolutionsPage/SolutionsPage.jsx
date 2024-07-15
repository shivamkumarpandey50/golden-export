import React from "react";
import "./SolutionsPage.css";

const SolutionsPage = () => {
  return (
    <div className="solutions-page">
      <button className="explore-button">Our Solution</button>
      <p className="solutions-page-p1">
        Over the years, Golden Exports has diversified its product offerings. We
        began as a logistics & export company in 2007. After establishing
        connections and a position in the logistics domain, we ventured into
        other sectors to showcase our versatility in meeting customer's demands.
      </p>
      <p className="solutions-page-p1">
        After recognizing growth opportunities, we diversified our services
        portfolio by foraying into the manufacturing industry. Within a few
        years, we established ourselves as a leading player in the manufacturing
        of outerwear and knitwear for men, women, and kids. Currently, we are
        serving prominent yet diverse markets like Italy, France, Russia, and
        The United States of America.
      </p>
      <div className="solutions-icons">
        <div>
          <img
            src="src/assets/LOGISTIC_SOLUTIONS.png"
            alt="Logistic Solutions"
          />
          <p className="solutions-icons-p1">Logistic Solutions</p>
        </div>
        <div>
          <img src="src/assets/wholesaler.png" alt="Wholesalers" />
          <p className="solutions-icons-p1">Wholesalers</p>
        </div>
        <div>
          <img
            src="src/assets/wholesaler.png"
            alt="Original Equipment Manufacturer (OEMs)"
          />
          <p className="solutions-icons-p1">
            Original Equipment Manufacturer (OEMs)
          </p>
        </div>
        <div>
          <img
            src="src/assets/brick-and-mortar.png"
            alt="Traditional Brick And Mortar Stores"
          />
          <p className="solutions-icons-p1">
            Traditional Brick And Mortar Stores
          </p>
        </div>
      </div>
      <p className="solutions-icons-p2">
        We also have established partnerships with prominent players in the
        fashion industry like Diesels' Ireland Division. Our collaboration is a
        testament to our expertise, commitment to excellence, and desire to
        cater to a wide range of fashion preferences and styles to meet our
        customer's diverse needs.
      </p>
      <button className="expand-button">Expand</button>
    </div>
  );
};

export default SolutionsPage;

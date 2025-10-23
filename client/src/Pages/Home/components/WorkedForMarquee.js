import React from 'react';

const WorkedForMarquee = () => {
  // Companies/clients Bristac has worked for
  const companies = [
    "Safaricom Kenya",
    "Kenya Power & Lighting",
    "Nairobi Hospital",
    "Villa Rosa Kempinski",
    "Two Rivers Mall",
    "Garden City Mall",
    "Coca-Cola Kenya",
    "Nation Media Group",
    "Standard Chartered Bank",
    "Equity Bank Kenya",
    "Kenya Airways"
  ];

  // Icon URL - you can replace this with your own icon
  const iconUrl = "https://chemexpools.com/wp-content/uploads/2024/03/marquee-icon.svg";

  return (
    <div className="e-con-full e-flex e-con e-parent">
      <div className="elementor-widget-container">
        <div className="marquee-section bg-theme overflow-hidden background-image">
          <div className="marquee-wrapper">
            <div className="marquee">
              <div className="marquee-group">
                {companies.map((company, index) => (
                  <div key={`group1-${index}`} className={`text ${index % 2 === 0 ? 'style2' : ''}`}>
                    <img decoding="async" src={iconUrl} alt="marquee icon" />
                    {company}
                  </div>
                ))}
              </div>
              <div aria-hidden="true" className="marquee-group">
                {companies.map((company, index) => (
                  <div key={`group2-${index}`} className={`text ${index % 2 === 0 ? 'style2' : ''}`}>
                    <img decoding="async" src={iconUrl} alt="marquee icon" />
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-section {
          background-color: #0066cc;
          height: 152.1px;
          display: flex;
          align-items: center;
        }

        .marquee-wrapper {
          overflow: hidden;
          white-space: nowrap;
        }

        .marquee {
          display: flex;
          animation: marquee 60s linear infinite;
        }

        .marquee-group {
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .text {
          display: flex;
          align-items: center;
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          text-transform: uppercase;
          padding: 0 3rem;
          letter-spacing: 0.05em;
        }

        .text img {
          width: 24px;
          height: 24px;
          margin-right: 1rem;
          flex-shrink: 0;
        }

        .text.style2 {
          font-weight: 700;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .marquee:hover {
          animation-play-state: paused;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .marquee {
            animation: marquee 40s linear infinite;
          }

          .text {
            font-size: 1rem;
            padding: 0 2rem;
          }

          .text img {
            width: 18px;
            height: 18px;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkedForMarquee;
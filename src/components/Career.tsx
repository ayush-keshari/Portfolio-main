import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My Achievement <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack development intern</h4>
                <h5>Vaidsys Technologies</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            I completed a Full-Stack Development internship at Vaidsys Technologies (May–June 2025), where I gained hands-on experience in building web applications and improving my technical and collaborative skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Build-A-Thon</h4>
                <h5>by BoardInfinity</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
            Secured 5th rank in Build-A-Thon by BoardInfinity for creating an AI-powered, ATS-friendly Resume Builder using Python, Streamlit, SpaCy, Google Gemini API, and CSS, with real-time suggestions and a responsive UI.


            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>Company Name</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore sit non ipsum temporibus quidem, deserunt eaque officiis
              mollitia ratione suscipit repellat.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;

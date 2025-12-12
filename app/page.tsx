export default function Home() {
  return (
    <main>
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>Data Analysis Portfolio</h1>
          <p>Transforming Data into Actionable Insights</p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-content">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              I'm a data analyst passionate about uncovering insights from complex datasets.
              With expertise in statistical analysis, machine learning, and data visualization,
              I help organizations make data-driven decisions that drive growth and innovation.
            </p>
            <p style={{ fontSize: '1.1rem' }}>
              My approach combines technical rigor with business acumen, ensuring that analytical
              findings translate into practical, actionable strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2>Skills & Expertise</h2>
          <div className="skills">
            <div className="skill-card">
              <h3>Programming</h3>
              <p>Python, R, SQL, JavaScript</p>
            </div>
            <div className="skill-card">
              <h3>Data Analysis</h3>
              <p>Pandas, NumPy, Statistical Modeling</p>
            </div>
            <div className="skill-card">
              <h3>Visualization</h3>
              <p>Tableau, Power BI, Matplotlib, D3.js</p>
            </div>
            <div className="skill-card">
              <h3>Machine Learning</h3>
              <p>Scikit-learn, TensorFlow, XGBoost</p>
            </div>
            <div className="skill-card">
              <h3>Databases</h3>
              <p>PostgreSQL, MongoDB, MySQL</p>
            </div>
            <div className="skill-card">
              <h3>Tools</h3>
              <p>Jupyter, Git, Docker, Apache Spark</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">📊</div>
              <div className="project-content">
                <h3>Customer Churn Prediction</h3>
                <p>
                  Built a machine learning model to predict customer churn with 89% accuracy,
                  enabling proactive retention strategies that reduced churn by 23%.
                </p>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">ML</span>
                  <span className="tag">XGBoost</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">📈</div>
              <div className="project-content">
                <h3>Sales Analytics Dashboard</h3>
                <p>
                  Designed an interactive Tableau dashboard tracking KPIs across 50+ stores,
                  providing real-time insights that improved inventory management by 30%.
                </p>
                <div className="project-tags">
                  <span className="tag">Tableau</span>
                  <span className="tag">SQL</span>
                  <span className="tag">ETL</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">🔍</div>
              <div className="project-content">
                <h3>Market Basket Analysis</h3>
                <p>
                  Conducted association rule mining on transaction data to identify product
                  relationships, resulting in a 15% increase in cross-selling revenue.
                </p>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">Apriori</span>
                  <span className="tag">Visualization</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">💰</div>
              <div className="project-content">
                <h3>Financial Risk Assessment</h3>
                <p>
                  Developed a risk scoring system using logistic regression and decision trees,
                  improving loan default prediction accuracy by 27%.
                </p>
                <div className="project-tags">
                  <span className="tag">R</span>
                  <span className="tag">Statistics</span>
                  <span className="tag">Risk Modeling</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">🌐</div>
              <div className="project-content">
                <h3>Web Traffic Analysis</h3>
                <p>
                  Analyzed user behavior patterns using Google Analytics and Python,
                  identifying bottlenecks that led to a 40% improvement in conversion rates.
                </p>
                <div className="project-tags">
                  <span className="tag">Python</span>
                  <span className="tag">GA4</span>
                  <span className="tag">A/B Testing</span>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">🎯</div>
              <div className="project-content">
                <h3>Marketing Campaign Optimization</h3>
                <p>
                  Performed cohort analysis and RFM segmentation to optimize marketing spend,
                  increasing ROI by 45% through targeted campaigns.
                </p>
                <div className="project-tags">
                  <span className="tag">SQL</span>
                  <span className="tag">Python</span>
                  <span className="tag">Segmentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
              Interested in collaborating or want to learn more about my work?
              I'd love to hear from you!
            </p>
            <div className="contact-links">
              <a href="mailto:contact@dataportfolio.com" className="contact-btn">
                Email Me
              </a>
              <a href="https://linkedin.com" className="contact-btn" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com" className="contact-btn" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Data Analysis Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

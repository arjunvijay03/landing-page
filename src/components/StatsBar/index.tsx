import "./style.css";
const StatsBar = () => {
  return (
    <section className="stats-bar">
      <div className="stat-item">
        <div className="stat-number">6409</div>
        <div className="stat-label">Succes Story</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">124</div>
        <div className="stat-label">Expert Instructor</div>
      </div>
      <div className="stat-item">
        <div className="stat-number">54.749</div>
        <div className="stat-label">Hours Tutored</div>
      </div>
    </section>
  );
};

export default StatsBar;

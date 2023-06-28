import PropTypes from "prop-types";
import "./Statistics.scss"

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="statistics-title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li key={id} className="stat-list_item">
            <span className="stat-list_label">{label}</span>
            <span className="stat-list_percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
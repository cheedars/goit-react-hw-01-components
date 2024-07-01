import PropTypes from 'prop-types';
import style from './Statistics.module.css';

function Statistics({ title, stats }) {

  const generateRandomColor = () => { 
    return `rgb(${Math.random() * 256},${Math.random() * 256}, ${Math.random() * 256})`;
  }
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>{title}</h2>
      <ul className={style.statList}>
        {stats.map(stat => (
          <li key={stat.id} className={style.item} style={{backgroundColor: generateRandomColor()}}>
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  )
};

export default Statistics;


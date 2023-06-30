import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(el => (
          <li className="item" color={getRandomHexColor()} key={el.id}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

function getRandomHexColor() {
  let hexChars = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * hexChars.length);
    color += hexChars[randomIndex];
  }

  return color;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }),
};

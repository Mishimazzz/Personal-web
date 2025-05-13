'use client';
import React, { useEffect, useState } from 'react';
import styles from './GitHubContribution.module.css';

type Day = {
  date: string;
  count: number;
  level: number;
};

const GitHubContribution: React.FC = () => {
  const [data, setData] = useState<Day[]>([]);
  const [year, setYear] = useState<number>(2025);
  const [loading, setLoading] = useState(true);
  const username = 'Mishimazzz';

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`);
        const json = await res.json();
        setData(json.contributions || []);
      } catch (err) {
        console.error('Error fetching data:', err);
        setData([]);
      }
      setLoading(false);
    };
    fetchData();
  }, [year]);

  const getColor = (level: number): string => {
    const colors = ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'];
    return colors[level] || '#ebedf0';
  };

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.grid}>
          {Array.from({ length: 53 }).map((_, col) => (
            <div key={col} className={styles.column}>
              {data.slice(col * 7, col * 7 + 7).map((day) => (
                <div
                  key={day.date}
                  title={`${day.date}: ${day.count} contributions`}
                  className={styles.cell}
                  style={{ backgroundColor: getColor(day.level) }}
                />
              ))}
            </div>
          ))}
        </div>
      )}
      <div className={styles.buttonGroup}>
        {[2025, 2024].map((y) => (
          <button
            key={y}
            onClick={() => setYear(y)}
            className={`${styles.yearButton} ${y === year ? styles.active : ''}`}
          >
            {y}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GitHubContribution;

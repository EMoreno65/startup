import React, { createContext, useContext, useState } from 'react';

const TimeContext = createContext();

export const TimeProvider = ({ children }) => {
  const [filters, setFilters] = useState({});
  const [recommendedTime, setRecommendedTime] = useState('');

  return (
    <TimeContext.Provider value={{ filters, setFilters, recommendedTime, setRecommendedTime }}>
      {children}
    </TimeContext.Provider>
  );
};

export const useTimeContext = () => useContext(TimeContext);

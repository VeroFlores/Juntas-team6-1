import React, { useState, useEffect } from 'react';
import { getData, getRate } from '../../firebase/function';

const CompareTable = () => {
  const [data, setData] = useState([]);
  const [rate, setRate] = useState([]);

  useEffect(() => {
    getData((arrObj) => {
      setData(arrObj);
      console.log(arrObj);
    });
    getRate((rates) => {
      setRate(rates);
    });
  }, []);
  console.log(data);
  console.log(rate);
  return (
    <h1>comparar</h1>
  );
};
export default CompareTable;

import db from './config';

export const saveData = (data) => db.collection('request').doc().set({
  moneda: data.moneda,
  monto: data.monto,
  plazo: data.plazo,
  ingreso: data.ingreso,
});
export const getData = (callback) => db.collection('request').get().then((queryResults) => {
  const arrayData = [];
  queryResults.forEach((doc) => {
    arrayData.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  callback(arrayData);
});
export const getRate = (callback) => db.collection('rates').get().then((queryResults) => {
  const arrayData = [];
  queryResults.forEach((doc) => {
    arrayData.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  callback(arrayData);
});

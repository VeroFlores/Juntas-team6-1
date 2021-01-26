import db from './config';

export const saveData = (data) => db.collection('request').doc().set({
  moneda: data.moneda,
  monto: data.monto,
  plazo: data.plazo,
  ingreso: data.ingreso,
});
export const getData = () => db.collection('request').get().then((queryResults) => {
  const userInfo = [];
  queryResults.forEach((doc) => {
    userInfo.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return userInfo;
});

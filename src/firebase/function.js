import db from './config';

const saveData = (data) => db.collection('request').doc().set({
  moneda: data.moneda,
  monto: data.monto,
  plazo: data.plazo,
  ingreso: data.ingreso,
  dni: data.dni,
  ubicación: data.ubicación,
  rubro: data.rubro,
});

export default saveData;

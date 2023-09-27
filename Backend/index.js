import express from 'express';
import cors from 'cors';
import { SumarNumeros } from './Helpers/SumarNumeros.js';

const app = express();
app.use(cors());

//Endpoint de API para sumar numeros
app.get('/SumaNumeros', (req, res) => {
  //Recibe los numeros a sumar
  const { numero1, numero2 } = req.query;
  //Llama a la funcion que suma numeros
  const resultado = SumarNumeros(numero1, numero2);
  //Devuelve el resultado
  return res.json({ resultado });
});

//Abre el servidor backend en el puerto 8080
app.listen(8080, () => {
  console.log('Aplicación Backend Express escuchando en el puerto 8080');
});
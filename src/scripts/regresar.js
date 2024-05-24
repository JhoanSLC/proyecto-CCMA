// animacion-secciones.js
import { SECTIONS as sect, BUTTONS as b } from './constantes';
import { restarValor,botonValor } from './precio';
import { animacionSecciones } from './animacion-secciones';


b.reg2.addEventListener('click', () =>  {animacionSecciones(sect.section2, sect.section1) ;restarValor(botonValor)})
// Agrega event listeners a los botones de regreso con la función deleteConfig
b.reg4.addEventListener('click', () => {animacionSecciones(sect.section4, sect.section3) ;restarValor(botonValor)} )
b.reg5.addEventListener('click', () =>  {animacionSecciones(sect.section5, sect.section4) ;restarValor(botonValor)})
b.reg6.addEventListener('click', () =>  {animacionSecciones(sect.section6, sect.section5) ;restarValor(botonValor)})
b.reg7.addEventListener('click', () =>  {animacionSecciones(sect.section7, sect.section6) ;restarValor(botonValor)})
b.reg8.addEventListener('click', () => {animacionSecciones(sect.section8, sect.section7) ;restarValor(botonValor)} )
b.reg9.addEventListener('click', () => {animacionSecciones(sect.section9, sect.section8) ;restarValor(botonValor)} )
b.reg10.addEventListener('click', () => {animacionSecciones(sect.section10, sect.section9) ;restarValor(botonValor)} )
b.regFinal.addEventListener('click', () => {animacionSecciones(sect.sectFinal, sect.mainSection) ;restarValor(botonValor)} )
b.loginReg.addEventListener('click', () =>  {animacionSecciones(sect.loginSec, sect.section10) ;restarValor(botonValor)})
b.loginButton.addEventListener('click', () => { animacionSecciones(sect.loginSec, sect.sectFinal) ;restarValor(botonValor)})
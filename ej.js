'use strict'
console.log('js cargado')

//objetoc

let objeto= {
  atributo1: 78,
  nombre: 'Perico Palotes',
  parejas: ['Maria','Pedro','Macario'],
  metodo2:function funcion2(){
    document.write('Me encanta javascript <br />')
  }
};
console.log(objeto)
console.log('me llamo '+objeto.nombre)
console.log('una de mis parejas es '+objeto.parejas[1])

function funcion1(){
  document.write('Me encanta javascript <br />')
}
funcion1()
let num= 7
num=funcion1
num()

objeto.metodo= funcion1
objeto.metodo()
objeto.metodo2()
//parametros de funciones
function suma(a,b=4){
  return(a+b)
}
console.log(suma(1,10))
console.log(suma(1))

function ejecuta(callback){
  console.log('Ejecutando')
  callback()
}

ejecuta(funcion1)

//try catch (excepciones)

try {
  let nombre=45
  console.log(nombre.substr(2,4))
} catch (excepcion) {
  console.log(excepcion)
} finally {
  console.log('finally');
}

//array

let vector= [1,2,3]
let guarreria= [1,2,'asdsdsa',true]
let matriz={
  [1,2,3],
  [4,5,6],
  [7,8,9]
}

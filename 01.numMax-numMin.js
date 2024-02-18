// Crea una funcion que va a arecibir una array que tiene que devolver el numero minimo y el numero maximo con sus respectivos indices y la suma total de los dos numeros.

const numMaxMinSuma = (array)=>{
  const numMinimo = Math.min(...array)
  const indexMin = array.indexOf(numMinimo)
  const numMaximo = Math.max(...array)
  const indexMax = array.indexOf(numMaximo)
  const sumaTotal = numMinimo + numMaximo

  return `numero minimo: ${numMinimo} y su posicion es: ${indexMin} numero maximo: ${numMaximo} y su posicion es: ${indexMax} y la suma total: ${sumaTotal}`

}
console.log(numMaxMinSuma([2,3,4,1,5,50]))
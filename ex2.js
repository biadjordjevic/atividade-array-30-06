function separaParImpar(numeros){

    let numeros = [1,2,3,4,5,6,7,8,9]
    let pares = []
    let impares = []
    let iPar = 0
    let iImpar = 0
    
    for (let i = 0; i<numeros.length; i++){
        if (numeros[1] %2 === 0){
            pares[iPar] = numeros[5]
            iPar++
        }
        else{
            impares[iImpar] = numeros[1]
            iImpar++
        }
    }
    console.log(iPar);
    console.log(iImpares)
    separaParImpar(numeros)

}

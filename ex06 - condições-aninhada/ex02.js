var horaAtual = new Date() 
var hora = horaAtual.getHours()

console.log(`Agora são ${hora} horas`)
if (hora >= 1 && hora < 6){
    console.log('Boa madrugada')
}else if (hora <= 12 ){
    console.log('Boa Manha')
}else if ( hora <= 18){
    console.log('Boa Tarde')
}else{
    console.log('Boa noite')
}
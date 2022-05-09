import React from 'react'
import {Text } from 'react-native'

// 10
import Estilo from './estilo'

//10 aplicar estilo fontMed
//selecionar a tah <Text> e aperta cmd + d duas vezes
//: vc pode editar os 3 Text
// de uma vez so:


export default function Comp(){
    return  <Text style={Estilo.fontMed}>  Componente #base</Text>
}

function Comp2(){
    return  <Text style={Estilo.fontMed}>  Componente #02</Text>
}

function Comp3(){
    return  <Text style={Estilo.fontMed}>  Componente #03</Text>
}

// export default function Comp(){
//     return  <Text>  Componente #base</Text>
// }

// function Comp2(){
//     return  <Text>  Componente #02</Text>
// }

// function Comp3(){
//     return  <Text>  Componente #03</Text>
// }

export { Comp2, Comp3}

// OU

// a funcao precisa ser nomeada: Comp3
// export function Comp3(){
//     return <Text> Componente #03</Text>
// }
// 12: criar um Componente que recebe dois numeros
// min e max
// passar dois valores 
// criar em components o arquivo: MinMax.js
// estilo.js sera usado como style de MinMax.js      
import React from 'react'
import {Text} from 'react-native'
import Estilo from './estilo'

//arrow function
//export default () => <Text> O valor X é maior que o valor Y.</Text>

//export default () => <Text style={Estilo.fontBig}> O valor X é maior que o valor Y.</Text>

// melhor formatado o código
// export default () => {
//     return(
//         <Text style={Estilo.fontBig}> 
//             O valor X é maior que o valor Y.
//         </Text>
//     )
// }

// Como posso receber parametros a partir deste componente?
// tenho um comp baseado em funcao
// vou receber o param pela funcao

// export default (param) => {
//     //console.warn(param) // exibir o valor de param
//     return(
//         <Text style={Estilo.fontBig}> 
//             O valor X é maior que o valor Y.
//         </Text>
//     )
// }

// 12.1: No App.js 
// a partir de um funcao nomeada
// posso instanciar esta funcao
// funciton Produto(nome){this.nome = nome}
// const p1 = new Produto( 'Caneta')
// const p2 = new Produto('Caderno')
// console.log( p1.nome, p2.nome);
// <MinMax /> : estou instanciando um componente
// e este componente pode ser usado mais de uma vez
// dentro de sua aplicacao:
{/* <MinMax />
<MinMax />
<MinMax /> */}


// 12.2
// usar um par de chaves {} para por
// alguma coisa do javascript

// export default (param) => {
//     //console.warn(param) // exibir o valor de param
//     return(
//         <Text style={Estilo.fontBig}> 
//             O valor {1+2} é maior que o valor Y.
//         </Text>
//     )
// }

// vou usar param: param.max
// export default (param) => {
//     //console.warn(param) // exibir o valor de param
//     return(
//         <Text style={Estilo.fontBig}> 
//             O valor {param.max} é maior que o valor {param.min}.
//         </Text>
//     )
// }

// no react nao chamamos de param e sim de props
// props: propriedades que vc passou para seu componente
export default (props) => {
    //console.warn(param) // exibir o valor de param
    return(
        <Text style={Estilo.fontBig}> 
            O valor {props.max} é maior que o valor {props.min}.
        </Text>
    )
}

// poderia ficar assim
// export default props => (

//         <Text style={Estilo.fontBig}> 
//             O valor {props.max} é maior que o valor {props.min}.
//         </Text>
// )


// no caso de min="3" max="20" estou passando Strings
// E como fazer para passar valores numericos:
// envolver o numero por um par chaves: min={3} max={20}
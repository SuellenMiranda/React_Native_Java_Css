import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

// 1: Componente principl ou funcao principal
//    que vai rodar a aplicacao: equivaletne ao main()
// App representa um componente
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>
//         Change code in the editor and watch it change on your phone! Save to get a shareable url.
//       </Text>
//       <Card>
//         <AssetExample />
//       </Card>
//     </View>
//   );
// }


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }


// funcao comecando com letra maiuscula: App
// representa um componente

// 1: somente um texto sem style
// export default function App() {
//   return (
    
//     <Text>Primeiro Componente</Text>
      
//   );
// }


// 2:
// ou Posso usar uma function expression:
// function App(){

//   <Text>Primeiro Componente</Text>
// }
// export default App;

//2: ou posso usar function expression:
// function App(){
//   return (
//     <View style={styles.container}>
//       <Text style={styles.paragraph}>
//         Change code in the editor and watch it change on your phone! Save to get a shareable url.
//       </Text>
//       <Card>
//         <AssetExample />
//       </Card>
//     </View>
//   );

// }
// export default App;

// 3: ou posso usar uma arrow funciton
// export default () => {
//   return <Text> Primeiro componente texto com arrow function</Text>
// }

// 4: uma view com um texto centralizado
// 4: Componente 1
//1.1: somente um texto sem style. usando uma variavel jsx
// export default function App() {
//   const jsx = <Text>Primeiro Componente Texto</Text>
//   return jsx

//   // ou return <Text>Primeiro Componente Texto</Text>
// }

// 4: uma view com um texto centralizado
// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Primeiro Componente</Text>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }


//Como o componente 1 foi exportado com default
// ele nao precisa ser importado dentro de um par de chaves
// import {}
// 5.1: Vou referenciar o componte 1 importado como Comp1:
// 5.1: Vou referenciar o componte 1 importado como Comp1:
import Comp1 from './components/Componente1';
// export default () => <Comp1> </Comp1>

// 5.2: posso por o componente dentro de uma view
// export default () => <View> <Comp1> </Comp1> </View> 

// 5.3: como não tem um corpo (tag de abertura e fehamento)
//      posso por simplesmente fechar (/) na propria tag de abertura
//export default () => <View> <Comp1 /> </View> 

// 5.4: posso retornar entre parenteses
//export default () => (<View> <Comp1 /> </View>) 

// 5.5: eh preferivel deixar o codigo clean e bem formatado
 //export default () => (
  //   <View> 
  //     <Comp1 /> 
  //   </View>
  // ) 

// o que fica entre chaves {} eh interpretado como codigo javascript
// na linha <Comp1 /> 
// se eu der um cmd + / para comentar, o codigo fica entre chaves e comentado 
// {/* <Comp1 />  */}
//

// 6: criar o arquivo com 3 componentes: Components3.js
// e ver fazer 3 componentes e exportar.
// 6:
//como nao exportei com default, importo entre chaves
import CompDefault, {Comp2 , Comp3} from './components/3Components';
//CompDefault eh o meu Comp base.
//o nome que dou para o componte que foi exportado
// com export default pode ser qualquer um,
// inclusive o proprio nome orignal da funcao
// isto porque a funcao pode nao ter nome
// e asim vc deve batizar na importacao

// Via de regra: um componente por arquivo


//  export default () => (
//   <View> 
//     <CompDefault/>
//     <Comp2/>
//     <Comp3/>
//     <Comp1 />     
//   </View>
// ) 

// 7: flexbox: eixo principal eh o vertical no celular
// import { StyleSheet} from 'react-native'
// style={style.App}
// criei uma cte e preciso acessar o codigo javacript entre chaves

// export default () => (

  
//   <View style={styles.App}> 
//     <CompDefault/>
//     <Comp2/>
//     <Comp3/>
//     <Comp1 />     
//   </View>
// ) 

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// 7: 
// () passar um objeto {} com o estilo
// flexbox


//8: criar arquivo components para estilo
// estilo.js minusculo pois nao eh um componente
// 3 tipos de fonte: fontBig , fontMed, fontSmall

// 9: importar o estilo padrao do texto
// ir no aquivo do Componente1.js e importar o estilo
// padrao de texto para com fontBig
// import Estilo from './estilo'

// 10 importar o estilo padrao de texto no arquivo 3Components

//11: console.warn : gera um yellow box na aplicacao
// para debugar: console.warn('deu ruim')
// export default function App() {
//   console.warn('deu ruim')
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text>Primeiro Componente</Text>
//         <StatusBar style="auto" />
//       </SafeAreaView>
//     );
//   }


// Parei aqui no 12 <<<---- ??????????
// 12: Passar valores/parametros/props para um componente 
//criar um Componente que recebe dois numeros
// min e max
// passar dois valores 
// criar em components o arquivo: MinMax.js

import MinMax from './components/MinMax'
// comentar os imports dos outros componentes

// export default () => (

//   <View style={styles.App}> 
//     <MinMax />
//     {/* <CompDefault/>
//     <Comp2/>
//     <Comp3/>
//     <Comp1 />      */}
//   </View>
// ) 




//12.2:
export default () => (

  <View style={styles.App}> 
  {/* passar valor min e max: sao as propriedades/props
      que estou passando para meu componente MinMax */}
    <MinMax min="3" max="20" />
    <MinMax min="10" max="90" />
    {/* <CompDefault/>
    <Comp2/>
    <Comp3/>
    <Comp1 />      */}
  </View>
) 

// no caso de min="3" max="20" estou passando Strings
// E como fazer para passar valores numericos:
// envolver o numero por um par chaves: min={3} max={20}

// Melhorar a apresentacao criando um padding ao redor
// nao adianta por textAlign: "center"
// aqui pois este estilo esta sendo aplicado a view
// e nao ao texto. 
// para ser aplicao ao texto, o textAlign deve ser
// aplicado no componente estilo
// fontBig:{ 
//   fontSize: 32,
//   textAlign: "center" // para ser aplicado ao texto em si
// }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  App:{
    //fontSize: 24,
    //backgroundColor: '#A00', // cor red
    //flex:1, // indica que o componente pode crescer
    flexGrow: 1, // ocupar a tela inteira
    justifyContent: "center", // eixo principal centralizado
    alignItems: "center", // eixo cruzado: da linha
    padding: 20 // valor numerico 20 e nao enter aspas
  },
});

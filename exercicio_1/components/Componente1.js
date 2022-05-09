import React from 'react'
import {Text, View} from 'react-native'

// 9:
import Estilo from './estilo'

//9:  style={Estilo.fontBig}
export default () => {
    
    return (
        <View>
            <Text style={Estilo.fontBig}>Primeiro Componente !</Text>
        </View>
    );
}

//5

//const Comp1 = () => <Text> "Primeiro Componente"</Text>

//5

// export default () => {
    
//     return (
//         <View>
//             <Text>Primeiro Componente !</Text>
//         </View>
//     );
// }


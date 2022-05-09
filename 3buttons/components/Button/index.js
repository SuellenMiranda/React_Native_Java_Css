import React from 'react'
import {Button} from 'react-native'

export default prosp =>{


    function executar(){
        console.log("TE ODEIO SAULO");
    }

    return(
      <>

        <Button
              title="botão 1"
              color="red"
              onPress={executar}
        />

        <Button
              title="botão 2"
              color="blue"
              onPress={()=> console.log("Paulão de 41 na vara")}
        />

        <Button
              title="botão 3"
              color="#1F7319"
              onPress={function(){console.log("Bryan lindo")}}
        />
      </>
    )
}
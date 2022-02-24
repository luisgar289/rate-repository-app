import React, {useState} from 'react'; // Importamos React y useState
import { Button, Text, View, Image } from 'react-native'; // Importamos elementos de React Native

const Dog = (props) => { // Creamos un componente llamado Dog
  const [isHungry, setIsHungry] = useState(true); // Creamos un estado llamado isHungry y lo inicializamos en true
  
  
  return( // Retornamos un componente
    <View>
      {isHungry ? // Si isHungry es true
        <Image source={{ // Creamos un componente Image con la imagen de un perro hambriento
          uri: 'https://thumbs.dreamstime.com/b/perro-hambriento-41453522.jpg'
        }}
        style={{width: 250, height: 300}} 
        /> :
        <Image source={{ // Creamos un componente Image con la imagen de un perro satisfecho
          uri: 'https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-perro-feliz-humor_11460-3669.jpg?size=338&ext=jpg.com/b/perro-hambriento-41453522.jpg'
        }}
        style={{width: 250, height: 300}}
        />
      } 
      <Text>
        Soy {props.name}, y estoy {isHungry ? 'hambriento' : 'lleno'}
      </Text> 
      <Button // Creamos un componente Button
        onPress={() => { // Cuando se presione el botón
          setIsHungry(false); // Cambiamos el estado de isHungry a false
        }}
        disabled={!isHungry} // Si isHungry es true, el botón estará habilitado, de lo contrario, no estará habilitado
        title={isHungry ? 'Alimentame!' : 'Gracias!'} // Si isHungry es true, el botón mostrará Alimentame!, de lo contrario, Gracias!
  />
  </View>  
  );
}

const App = () => { // Creamos un componente llamado App
  return(
    <> 
      <Dog name="Firulais" /> 
      <Dog name="Max" />
    </>
  );
}
export default App; // Exportamos el componente App
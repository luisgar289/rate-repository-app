import React, {useState} from 'react';
import { Button, Text, View, Image } from 'react-native';

const Dog = (props) => {
  const [isHungry, setIsHungry] = useState(true);
  
  
  return(
    <View>
      {isHungry ? 
        <Image source={{
          uri: 'https://thumbs.dreamstime.com/b/perro-hambriento-41453522.jpg'
        }}
        style={{width: 250, height: 300}}
        /> :
        <Image source={{
          uri: 'https://img.freepik.com/vector-gratis/ilustracion-dibujos-animados-perro-feliz-humor_11460-3669.jpg?size=338&ext=jpg.com/b/perro-hambriento-41453522.jpg'
        }}
        style={{width: 250, height: 300}}
        />
      }
      <Text>
        Soy {props.name}, y estoy {isHungry ? 'hambriento' : 'lleno'}
      </Text>
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? 'Alimentame!' : 'Gracias!'}
  />
  </View>  
  );
}

const App = () => {
  return(
    <>
      <Dog name="Firulais" />
      <Dog name="Max" />
    </>
  );
}
export default App;
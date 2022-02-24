import React from 'react'; // Importamos React
import {View, Text, Image, ScrollView, TextInput } from 'react-native'; // Importamos elementos de React Native

const App = () => { // Creamos un componente llamado App
    return(
        <ScrollView>
            <Text>Node.js</Text>
            <View>
                <Text>Actividad 2</Text>
                <Image source={{
                    uri: 'https://victorroblesweb.es/wp-content/uploads/2018/01/nodejs-victorroblesweb.png'
                }}
                style={{width: 200, height: 200}}
                />
            </View>
            <TextInput
                style={{
                    height: 40,
                    width: 300,
                    borderColor: 'gray',
                    borderWidth: 1
                }}
                defaultValue="Puedes escribir aquí"
            />
        </ScrollView>
    );
}

export default App; // Exportamos el componente App
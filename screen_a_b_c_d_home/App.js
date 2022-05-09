import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function TelaA({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela A</Text>
      <Button
        title="Tela B"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('TelaB', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
}

function TelaB({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela B</Text>
      <Button
        title="Tela C"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('TelaC', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />

      <Button
        title="Tela A"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.goBack();
        }}
      />

    </View>
  );
}

function TelaC({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela C</Text>
      <Button
        title="Tela D"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('TelaD', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />

      <Button
        title="Tela B"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.goBack();
        }}
      />


    </View>
  );
}

function TelaD({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela D</Text>
      
      <Button
        title="Tela C"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.goBack();
        }}
      />

      <Button
        title="Tela inicial"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.popToTop();
        }}
      />

    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaA" component={TelaA} />
        <Stack.Screen name="TelaB" component={TelaB} />
        <Stack.Screen name="TelaC" component={TelaC} />
        <Stack.Screen name="TelaD" component={TelaD} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
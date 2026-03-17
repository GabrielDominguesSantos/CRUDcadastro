import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './src/screens/HomeScreen';
import AddEditScreen from './src/screens/AddEditScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Lista de Pessoas' }} 
        />
        <Stack.Screen 
          name="AddEditScreen" 
          component={AddEditScreen} 
          options={{ title: 'Cadastro/Edição' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
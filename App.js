import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/RegisterScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Index = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image source={require('./assets/logo.PNG')} style={styles.logo} />
          <View style={styles.nav}>
            <TouchableOpacity onPress={() => alert('Home')}>
              <Text style={[styles.navItem, styles.navActive]}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.navItem}>Ingresar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style={styles.navItem}>Registrarse</Text>
            </TouchableOpacity>
          </View>          
        </View>
        <View style={styles.content}>
          <View style={styles.cell}>
            <Text style={styles.cellTextHeader}>Bienvenido a SALUD Contigo</Text>
            <Text style={styles.cellText}>Salud contigo es una empresa del sector salud que se especializa en brindar servicios médicos accesibles para todas las personas.</Text>
          </View>
          <Image source={require('./assets/index1.png')} style={styles.cellImage} />
          <Image source={require('./assets/index2.png')} style={styles.cellImage} />
          <View style={[styles.cell, styles.cellBlue]}>
            <Text style={[styles.cellTextHeader, styles.cellTextWhite]}>Tu salud es primero</Text>
            <Text style={styles.cellTextWhite}>Ofrece servicios medicos a la medida de cada paciente, para que cuide su salud mental y física. Salud Contigo hace que disfrutes más de la vida.</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>SALUD Contigo - Todos los derechos reservados</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    marginHorizontal: 10,
  },
  header: {
    backgroundColor: '#0073e6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  nav: {
    flexDirection: 'row',
  },
  navItem: {
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  navActive: {
    textDecorationLine: 'underline',
  },
  content: {
    padding: 20,
  },
  cell: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginBottom: 20,
  },
  cellBlue: {
    backgroundColor: '#137FD9',
  },
  cellTextHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cellText: {
    fontSize: 16,
  },
  cellTextWhite: {
    color: '#fff',
  },
  cellImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  footer: {
    backgroundColor: '#0073e6',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
  },
});

export default App;


// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
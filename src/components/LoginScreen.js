import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Aquí deberías agregar la lógica para verificar las credenciales
    alert('Iniciando sesión... Edilberto Contreras');

    // Navegar a otra pantalla si las credenciales son correctas
    // Asumimos que las credenciales son correctas para la demostración
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('../../assets/logo.PNG')} style={styles.logo} />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Iniciar Sesión</Text>
          <View>
            <Text style={styles.label}>Usuario:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              value={username}
              placeholder="Ingresa tu usuario"
            />
            <Text style={styles.label}>Contraseña:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              secureTextEntry
              placeholder="Ingresa tu contraseña"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.registerText}>¿No tienes una cuenta? <Text style={styles.registerLink}>Regístrate aquí</Text></Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>SALUD Contigo - Todos los derechos reservados</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#0073e6',
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 80,
    resizeMode: 'contain',
  },
  loginContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#fe439f',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  registerText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16,
  },
  registerLink: {
    color: '#0069c0',
    fontWeight: 'bold',
  },
  footer: {
    padding: 10,
    backgroundColor: '#0073e6',
  },
  footerText: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default LoginScreen;
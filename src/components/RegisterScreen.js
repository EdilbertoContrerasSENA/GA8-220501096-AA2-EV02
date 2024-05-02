import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    numeroDocumento: '',
    correoElectronico: '',
    telefono: '',
    contrasena: '',
  });

  const handleInputChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleRegister = () => {
    // Aquí deberías agregar la lógica para procesar los datos del formulario
    console.log(formData);
    alert('Registro completado.');
    // Navegar a la pantalla de inicio de sesión o principal según corresponda
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('../../assets/logo.PNG')} style={styles.logo} />
        </View>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Registrarse</Text>
          <View style={styles.form}>
            {Object.keys(formData).map((key) => (
              <View key={key} style={styles.inputGroup}>
                <Text style={styles.label}>{key.replace(/([A-Z])/g, ' $1').trim()}:</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={(text) => handleInputChange(key, text)}
                  value={formData[key]}
                  secureTextEntry={key === 'contrasena' ? true : false}
                  placeholder={`Ingresa tu ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                />
              </View>
            ))}
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.loginText}>¿Ya tienes una cuenta? <Text style={styles.loginLink}>Inicia sesión aquí</Text></Text>
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
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  form: {
    alignItems: 'stretch',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#fe439f',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 16,
  },
  loginLink: {
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

export default RegisterScreen;
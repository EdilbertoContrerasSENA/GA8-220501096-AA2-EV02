import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={require('../../assets/logo.PNG')} style={styles.logo} />
        </View>
        <Text style={styles.title}>Bienvenido a SALUD Contigo</Text>
        <Text style={styles.title}>Edilberto Contreras</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.cell} onPress={() => navigateTo('MedicalAppointments')}>
            <Image source={require('../../assets/citas1.png')} style={styles.image} />
            <Text>Agende y haga seguimiento de sus citas médicas</Text>
            <Text style={styles.buttonText}>Citas Médicas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} onPress={() => navigateTo('PsychologicalAppointments')}>
            <Image source={require('../../assets/citas2.png')} style={styles.image} />
            <Text>Agende y haga seguimiento a sus citas de salud física y mental</Text>
            <Text style={styles.buttonText}>Citas Psicológicas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} onPress={() => navigateTo('MedicalExams')}>
            <Image source={require('../../assets/laboratorios.png')} style={styles.image} />
            <Text>Consulte y agende sus exámenes de laboratorio</Text>
            <Text style={styles.buttonText}>Exámenes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cell} onPress={() => navigateTo('Reports')}>
            <Image source={require('../../assets/reportes.png')} style={styles.image} />
            <Text>Descargue los reportes de historias clínicas, exámenes, incapacidades</Text>
            <Text style={styles.buttonText}>Reportes</Text>
          </TouchableOpacity>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  grid: {
    marginHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cell: {
    backgroundColor: '#fff',
    width: '48%',  // Aproximadamente la mitad del contenedor para dos columnas
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  buttonText: {
    color: '#0073e6',
    fontWeight: 'bold',
    textAlign: 'center',
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

export default HomeScreen;
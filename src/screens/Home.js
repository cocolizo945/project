import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from '../components/ui/Button';

function Home({navigation}) {
   
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <Text style={styles.title}>Programacion movil </Text>
          <Button title="Tema 1" onPress={() => navigation.navigate('Tema1')}></Button>
          <View style={{margin:10}}></View>
          <Button title="Tema 2" onPress={() => navigation.navigate('Tema2')}></Button>
          <View style={{margin:10}}></View>
          <Button title="Tema 3" onPress={() => navigation.navigate('Tema3')}></Button>
          <View style={{margin:10}}></View>
          <Button title="Tema 4" onPress={() => navigation.navigate('Tema4')}></Button>
          <View style={{margin:10}}></View>
          <Button title="Tema 5" onPress={() => navigation.navigate('Tema5')}></Button>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: '#24273a'},
    buttons: {flex: 1},
    title: {
      marginTop: 16,
      marginBottom: 16,
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center'
    }
  });
  
  export default Home;
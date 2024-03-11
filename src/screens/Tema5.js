import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from '../components/ui/Button';

function Tema5({navigation}) {
   
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
        <Text style={styles.title}>Proximamente </Text>
        <Button title="Regresar" onPress={() => navigation.navigate('Home')}></Button>
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
  
  export default Tema5;
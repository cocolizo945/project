import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Button({onPress, title}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#313244',
    color: '#313244',
    padding: 10,
    marginTop: 16,
    marginLeft: 35,
    marginRight: 35,
    borderRadius:20,
    borderColor: '#a6e3a1',
    borderWidth:1,
    shadowColor: "#a6e3a1",
    shadowOpacity: 0.25,
    shadowRadius: 7.5,
    shadowOffset: {
      height: 12,
      width: 0
    },
    elevation:12
  },
  text: {
    color: '#a6e3a1',
    fontWeight: 'bold'
  }
  
});
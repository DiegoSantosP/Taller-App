import { StyleSheet, Text, View } from 'react-native';
import { Punto1 } from './app/components/Punto1';



export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Resolucion del Punto#1 del Taller</Text>
    <Punto1/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#F2F2F2',
  },
  text: {
    fontFamily: 'TimeNewRoman', 
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

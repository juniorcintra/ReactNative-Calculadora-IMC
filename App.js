import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {TextInput, Button} from 'react-native-paper';

export default function App() {
  const [valuePeso, setValuePeso] = useState(0);
  const [valueAltura, setValueAltura] = useState(0);
  const [valueIMC, setValueIMc] = useState(0);
  const [valueLegenda, setValueLegenda] = useState('Indeterminado');
  const [valueCor, setValueCor] = useState('#bdc3c7');

  const calcularIMC = () => {
    const resultado = valuePeso / (valueAltura * valueAltura);

    setValueIMc(Math.ceil(resultado));

    if (resultado < 18.5) {
      setValueLegenda('Magreza');
      setValueCor('#e74c3c');
    } else if (resultado >= 18.5 && resultado < 25) {
      setValueLegenda('Normal');
      setValueCor('#2ecc71');
    } else if (resultado >= 25 && resultado < 30) {
      setValueLegenda('Sobrepeso');
      setValueCor('#f1c40f');
    } else if (resultado >= 30 && resultado < 40) {
      setValueLegenda('Obesidade');
      setValueCor('#e67e22');
    } else {
      setValueLegenda('Obesidade Grave');
      setValueCor('#e74c3c');
    }
  };

  return (
    <View style={styles.app}>
      <Text style={styles.legenda}>Seu IMC</Text>
      <View style={[styles.painel, {backgroundColor: valueCor}]}>
        <Text style={styles.resultado}>{valueIMC}</Text>
        <Text style={styles.diagnostico}>{valueLegenda}</Text>
      </View>
      <View style={styles.divInputs}>
        <TextInput
          style={styles.peso}
          label="Peso"
          onChangeText={(text) => setValuePeso(text.replace(',', '.'))}
        />
        <TextInput
          style={styles.altura}
          label="Altura"
          onChangeText={(text) => setValueAltura(text.replace(',', '.'))}
        />

        <Button mode="contained" onPress={calcularIMC}>
          Calcular
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  painel: {
    borderRadius: 5,
    marginVertical: 10,
    padding: 8,
    width: 150,
  },
  legenda: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  resultado: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  diagnostico: {
    textAlign: 'center',
    fontSize: 16,
  },
  divInputs: {
    height: 300,
    width: 220,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  peso: {
    marginVertical: 10,
    width: '100%',
  },
  altura: {
    marginVertical: 10,
    width: '100%',
  },
});

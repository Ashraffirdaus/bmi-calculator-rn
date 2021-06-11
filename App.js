import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, ImageBackground,TextInput,TouchableOpacity } from 'react-native';

export default function App() {
  
  const [height,setHeight] = useState(0)
  const [weight,setWeight] = useState(0);
  const [resultNumber, setResultNumber] = useState(0);
  const [resultText, setResultText] = useState("");
  const handleCalculate = () => { 

    let imc = weight / (height/100)** 2; 
    setResultNumber(imc.toFixed(2)); 

    if (imc < 18.5) 
    { setResultText("Underweight") } 
      else if (imc > 18.5 && imc < 25) 
        { setResultText("Normal Weight") } 
      else if (imc >= 25 && imc < 30) 
        { setResultText("Overweight" ); } 
       else  { setResultText("Obesity"); } 
  
  };
  
  
  return (
    <ImageBackground source={require("./assets/bg.png")} style={{ width: "100%", height: "100%" }} >
       <View style={styles.container}> 
       <Text style={{color: "#FFCB1F", justifyContent: "center", alignSelf: "center", marginTop: 50, fontSize: 35 }}>BMI Calculator</Text>
       <View style={{flexDirection: "row"}}>
       <TextInput placeholder="Height" keyboardType="numeric" style={styles.input} value={height} onChangeText={height => { setHeight(height);}}  /> 
       <TextInput placeholder="Weight" keyboardType="numeric" style={styles.input} value={weight} onChangeText={mass => { setWeight(mass) }} /> 
       </View>

        <TouchableOpacity style={styles.button} onPress={handleCalculate}> 
        <Text style={styles.buttonText}>Calculate </Text> 
        </TouchableOpacity> 
        <Text style={styles.result}>{resultNumber}</Text> 
        <Text style={[styles.result, { fontSize: 35 }]}> {resultText} </Text>

 
        
        
       </View> 
       
       

       </ImageBackground> 
  );
   

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: { 
  height: 80,
  textAlign: "center",
  width: "50%",
  fontSize: 50,
  marginTop: 24,
  color: "#FFCB1F" 
  },
  buttonText: { 
  alignSelf:"center",
  padding:30,
  fontSize:25,
  color:"#FFCB1F",
  fontWeight:"bold" 
  },
  result: { 
  alignSelf: "center", 
  color: "#FFCB1F",
  fontSize: 65, 
  padding: 15
 },


});

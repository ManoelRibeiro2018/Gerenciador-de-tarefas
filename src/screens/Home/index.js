import React from "react";

import { Button, Text } from 'react-native-elements';





import { View, StyleSheet, TouchableOpacity } from "react-native";

export const Home = ({navigation}) => {
    return(
        <View style={styles.contener}>


           <Text h1 style={styles.txt}> Organizador de Tarefas </Text>
            

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Tarefas')}>
            <Text >ir para agenda!</Text>
            </TouchableOpacity>

            
            <Button style={styles.UIbtn}  onPress={() => navigation.navigate('Sobre')}
             title="Sobre o App. " 
             type="clear"
             />
            




        </View>
    )
}
const styles = StyleSheet.create({
    contener: {
     flex:1,
     backgroundColor:'#171d31'
    },
    btn:{
        position: 'relative',
        justifyContent:'center',
        alignItems:'center',
        margin:100,
        backgroundColor:'#41Aef4',
        padding:30,
        borderRadius:20,
        
    },
    UIbtn:{

        justifyContent:'center',
        alignItems:'center',
        margin:40,
        backgroundColor:'#ADD8E6',
        padding:30,
        borderRadius:20,
        

    },
    txt:{
        marginTop:10,
          paddingBottom:10,
          fontSize:25,
          textAlign:'center',
        color:'#FFA500'
    }
  });
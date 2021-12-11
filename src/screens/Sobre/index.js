import React from "react";





import { View, Text, StyleSheet} from "react-native";

export const Sobre = ({navigation}) => {
    return(
        <View style={styles.contener}>

             <Text style={styles.txt} >O que Faz Nosso App?</Text>

            <Text style={styles.txt} >O Organizador de Tarefas veio para facilitar sua vida. Nele você pode adicionar as tarefas do seu dia-a-dia
                 e as excluindo conforme for concluindo casa umas das atividades pendentes.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contener: {
     flex:1,
     backgroundColor:'#171d31'
    },
    txt:{
        marginTop:10,
        paddingBottom:10,
        fontSize:25,
        margin:10,
        textAlign:'center',
      color:'#FFF'
    }

})
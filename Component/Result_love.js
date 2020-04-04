import React from 'react';
import { View, Text } from 'react-native';

const Result_love = (prop) =>{

    if(prop.data == "Loading"){
        return <Text style={{fontSize:20, textAlign:'center'}}>Please Enter Your and Patner Name</Text>
    }
    if (prop.data.message) {
        return <Text style={{fontSize:20, textAlign:'center'}}>Somthing Went Wrong Please Try Again !</Text>
    } 
    else {   
    return(
        <View style={styles.component}>
                <Text style={styles.text} >{prop.data.percentage}%</Text>
                <Text style={styles.text} >{prop.data.result}</Text>
        </View>
    );
    }
}

export default Result_love; 

const styles={
    component:{
        margin:20,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:30
    }
}
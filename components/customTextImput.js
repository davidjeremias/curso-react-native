import React from 'react';
import { TextInput, StyleSheet} from 'react-native';

const CustomTextInput = props => {
    return(
        <TextInput
            style={styles.container}
            placeholder={props.descricao}
            onChangeText={props.apertou}
        />
    );
}

const styles = StyleSheet.create({
    container:{
        width: "80%",
        backgroundColor: "#F7F7F7"
        
    }
});

export default CustomTextInput;
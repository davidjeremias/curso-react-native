import React from 'react';
import { Button, StyleSheet} from 'react-native';

const CustomButton = props => {
    return(
        <Button
            style={styles.container}
            title={props.titulo}
            onPress={props.acao}
        />
    );
}

const styles = StyleSheet.create({
    container:{
        width: "80%",
        backgroundColor: "#F7F7F7"
        
    }
});

export default CustomButton;
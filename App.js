import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import CustomTextInput from './components/customTextImput';
import CustomButton from './components/customButton';

export default class App extends React.Component {
  state = {
    nacionalidade: "",
    esporte: "",
    telefone: "",
    email: "",
    idade: "",
    correct: ""
  }

  valor = "";

  checkNacionalidade(nacionalidade){
    if(nacionalidade.toString() === "Brasileiro"){
      this.setState({correct: "Brasileiro"});
    }else{
      this.setState({correct: "Estrangeiro"});
    }
    this.state.nacionalidade = undefined;

  }
  render() {
    return (
      <View style={styles.container}>
          <Text style={{fontSize: 20}}>David Jeremias</Text>

          <Image source={require('./assets/david.jpg')} style={{height: 200, width: 150}}></Image>

         
            <View style={{flexDirection: 'row'}}>
              <Text> Nacionalidade: </Text>
              <TextInput style={input.borda} onChangeText={value => this.setState({nacionalidade: value})}></TextInput>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text> Esporte: </Text>
              <TextInput style={input.borda} onChangeText={value => this.setState({esporte: value})}></TextInput>
              <Text>{this.state.esporte}</Text>
            </View> 
            <View style={{flexDirection: 'row'}}>
              <Text> Telefone: </Text>
              <TextInput style={input.borda} onChangeText={value => this.setState({telefone: value})}></TextInput>
              <Text>{this.state.telefone}</Text>
            </View> 
            <View style={{flexDirection: 'row'}}>
              <Text> E-mail: </Text>
              <TextInput style={input.borda} onChangeText={value => this.setState({email: value})}></TextInput>
              <Text>{this.state.email}</Text>
            </View> 
            <View style={{flexDirection: 'row'}}>
              <Text> Idade: </Text>
              <TextInput style={input.borda} onChangeText={value => this.setState({idade: value})}></TextInput>
              <Text>{this.state.idade}</Text>
            </View>

            <CustomTextInput descricao="teste mane" apertou={value => this.setState({nacionalidade: value})}>
              
            </CustomTextInput>

            <Button 
            title="Verifica Nacionalidade"
            onPress={() => this.checkNacionalidade(this.state.nacionalidade)}
            ></Button>

            <CustomButton titulo="Botão customizado" acao={() => this.checkNacionalidade(this.state.nacionalidade)}></CustomButton>

            <Text>{this.state.correct}</Text>
            
      
          <View style={{backgroundColor: '#FAFDFD', width: '100%', height: 25}}>
            <Text style={{textAlign: 'center', fontSize: 20}}>Conhecimentos Básicos</Text>
          </View>

          <View style={{flexDirection: 'row', flex: 1}}>

          <View style={{borderColor: '#FAFDFD', borderWidth: 1, width: '100%', flex: 1, paddingTop: 25}}>
            <Text style={color.texto}>Inglês: 5</Text>
            <Text style={color.texto}>Espanhol: 3</Text>
            <Text style={color.texto}>Francês: 1</Text>
            <Text style={color.texto}>Alemão: 1</Text>
          </View>

          <View style={{borderColor: '#FAFDFD', borderWidth: 1, width: '100%', flex: 1, paddingTop: 25}}>
            <Text style={color.texto}>programação: 5</Text>
            <Text style={color.texto}>Excel: 4</Text>
            <Text style={color.texto}>Word: 4</Text>
            <Text style={color.texto}>AutoCAD: 2</Text>
          </View>

      </View>
          </View>
         
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    borderColor: '#FAFDFD', 
    borderWidth: 1
  },
});

const color = StyleSheet.create({
  texto: {
    textAlign: 'center',
  },
});

const input = StyleSheet.create({
  borda: {
    height: 20, 
    borderColor: '#FAFDFD', 
    borderWidth: 1,
  },
});

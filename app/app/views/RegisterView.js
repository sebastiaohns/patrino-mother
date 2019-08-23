import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";

import BackHeader from '../components/BackHeader';
import LinearGradient from 'react-native-linear-gradient';

import AsyncStorage from '@react-native-community/async-storage';

export default class RegisterView extends Component {
  /*Removendo header padrão*/
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);

    this.state = {
      "name": "",
      "email": "",
      "password": "",
      "phone": "",
      "address": ""
    };
  }

  /*Registrando um novo usuário*/
  onRegisterPress() {
    var name = this.state.name;
    var email = this.state.email;
    var password = this.state.password;
    var phone = this.state.phone;
    var address = this.state.address;

    const URL = "http://35.202.173.125";

    return fetch(URL + '/mothers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          phone: phone,
          address: address
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {

        this.props.navigation.navigate("LoginView");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const navigation = this.props.navigation.state.params.navigation;
    
    return (
      <View >
        <BackHeader navigation={navigation} target={"Settings"}/>
          <View style={styles.container}>
            <ScrollView>

              <Text style={styles.label}>Nome</Text>
              <TextInput
                autoCapitalize="words"
                autoCorrect={false}
                returnKeyType="next"
                keyboardType="default"
                placeholderTextColor="#999"
                style={styles.input}
                onChangeText={(name) => this.setState({name})}
              />

              <Text style={styles.label}>E-mail</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                keyboardType="email-address"
                placeholderTextColor="#999"
                style={styles.input}
                onChangeText={(email) => this.setState({email})}
              />

              <Text style={styles.label}>Telefone</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                keyboardType="number-pad"
                placeholderTextColor="#999"
                style={styles.input}
                onChangeText={(phone) => this.setState({phone})}
              />

              <Text style={styles.label}>Senha</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                keyboardType="default"
                placeholderTextColor="#999"
                style={styles.input}
                onChangeText={(password) => this.setState({password})}
              />

              <Text style={styles.label}>Endereço</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="send"
                keyboardType="default"
                placeholderTextColor="#999"
                style={styles.input}
                onChangeText={(address) => this.setState({address})}
              />

              <TouchableOpacity
                onPress={() => this.onRegisterPress()}
                style={{alignSelf: 'stretch'}}>
                <LinearGradient
                  style={styles.button}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 1}}
                  colors={['#EF5350', '#F59896']}>
                  <Text style={styles.buttonText}>Cadastrar</Text>
                </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 20,
  },

  label: {
    fontSize: 12, 
    color: '#666', 
    marginLeft: 5
  },

  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 15,
  },

  button: {    
    height: 46,
    backgroundColor: '#DF4723',
    borderRadius: 4,
    
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    marginTop: 30,
    marginBottom: 30,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
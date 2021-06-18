import React, { Component } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

import Api from './components/Api.js';

const Separator = () => (
  <View style={styles.separator} />
);


class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      nm_user:'',
      email_user:'',
      password_user:'',
      Advice:''
    }
    this.Register=this.Register.bind(this)
    this.Login=this.Login.bind(this)
    this.Delete=this.Delete.bind(this)
    this.Change=this.Change.bind(this)
  }

  async Register(){
    try{
      const response= await Api({
        method:"post",
        url:"auth/register",
        data:{
          nm_user:this.state.nm_user,
          email_user:this.state.email_user,
          password_user:this.state.password_user,
        }
      })
      if(response){
        if(response.data.Error!=null){
          this.setState({Advice:response.data.Error})
        }else{
          this.setState({Advice:response.data.mensage})
        }
      }
    }
    catch(err){
        console.log(err);
        this.setState({Advice:`${err}`})
    }
  }

  async Login(){
     try{
      const response= await Api({
        method:"post",
        url:"auth/authenticate",
        data:{
          email_user:this.state.email_user,
          password_user:this.state.password_user,
        }
      })
      if(response){
        if(response.data.Error!=null){
          this.setState({Advice:response.data.Error})
        }else{
          this.setState({Advice:response.data.mensage})
        }
      }
    }
    catch(err){
        console.log(err);
    }
  }

  async Delete(){
     try{
      const response= await Api({
        method:"post",
        url:"/auth/delete/User",
        data:{
          email_user:this.state.email_user,
          password_user:this.state.password_user,
        }
      })
      if(response){
        if(response.data.Error!=null){
          this.setState({Advice:response.data.Error})
        }else{
          this.setState({Advice:response.data.mensage})
        }
      }
    }
    catch(err){
        console.log(err);
    }
  }

  async Change(){
     try{
      const response= await Api({
        method:"put",
        url:"auth/ConfirmPass",
        data:{
          email_user:this.state.email_user,
          password_user:this.state.password_user,
        }
      })
      if(response){
        if(response.data.Error!=null){
          this.setState({Advice:response.data.Error})
        }else{
          this.setState({Advice:response.data.mensage})
        }
      }
    }
    catch(err){
        console.log(err);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>Requisições</Text>
        <TextInput style={styles.input}
          placeholder="UserName"
          value={this.state.nm_user}
          onChangeText={(value)=>this.setState({nm_user:value})}
        />
        <TextInput style={styles.input}
          placeholder="E-Mail"
          value={this.state.email_user}
          onChangeText={(value)=>this.setState({email_user:value})}
        />
        <TextInput style={styles.input} 
          secureTextEntry={true}
          placeholder="Password" 
          value={this.state.password_user}
          onChangeText={(value)=>this.setState({password_user:value})}
        />
        <Button style={styles.input} title="Registrar" color="#a6a6a6" onPress={this.Register}/>
         <Separator />
        <Button style={styles.input} title="Login" color="#a6a6a6" onPress={this.Login}/>
        <Separator />
        <Button style={styles.input} title="Deletar Usuario pelo email e senha" color="#a6a6a6" onPress={this.Delete}/>
        <Separator />
        <Button style={styles.input} title="mudar senha" color="#a6a6a6" onPress={this.Change}/>
        <Text>{this.state.Advice}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    fontSize: '17px',
    marginBottom: '13px',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#cfd1d1',
  }, 
  separator: {
    marginVertical: 8,
  },
});

export default App;

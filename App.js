import React,{Component} from 'react'
import { Text, View, StyleSheet,Button,TextInput } from 'react-native'
import { Text, View, StyleSheet } from 'react-native'
import api from './components/api'
import Movie from './components/Movie'

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      Movie:[],
      SetMovie:""
      Movie:[]
    }
  }

  async componentDidMount(){
    const response = await api.get('/?t=Shrek&apikey=539c05e4')
    this.setState({
      Movie:response.data
    })
    this.loading=this.loading.bind(this)
  }

  async loading(){
    const response = await api.get('/?t='+this.state.SetMovie+'&apikey=539c05e4')
    this.setState({
      Movie:response.data
    })
  }

  render(){
    return (
    <View style={styles.container}>
      <Movie  data={this.state.Movie}/>
      <TextInput
        placeholder="Digite o nome do filme"
        onChangeText={
          (value)=>this.setState({SetMovie:value})
        }
      />
      <Button title="buscar" onPress={this.loading()}/>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9df27c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App

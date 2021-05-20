import React,{Component} from 'react'
<<<<<<< HEAD
import { Text, View, StyleSheet,Button,TextInput } from 'react-native'
=======
import { Text, View, StyleSheet } from 'react-native'
>>>>>>> f2aef1d2fdf3e1ce87ab915aa2e487562ef43d3b
import api from './components/api'
import Movie from './components/Movie'

class App extends Component{

  constructor(props){
    super(props);
    this.state={
<<<<<<< HEAD
      Movie:[],
      SetMovie:""
=======
      Movie:[]
>>>>>>> f2aef1d2fdf3e1ce87ab915aa2e487562ef43d3b
    }
  }

  async componentDidMount(){
    const response = await api.get('/?t=Shrek&apikey=539c05e4')
    this.setState({
      Movie:response.data
    })
<<<<<<< HEAD
    this.loading=this.loading.bind(this)
  }

  async loading(){
    const response = await api.get('/?t='+this.state.SetMovie+'&apikey=539c05e4')
    this.setState({
      Movie:response.data
    })
=======
>>>>>>> f2aef1d2fdf3e1ce87ab915aa2e487562ef43d3b
  }

  render(){
    return (
    <View style={styles.container}>
      <Movie  data={this.state.Movie}/>
<<<<<<< HEAD
      <TextInput
        placeholder="Digite o nome do filme"
        onChangeText={
          (value)=>this.setState({SetMovie:value})
        }
      />
      <Button title="buscar" onPress={this.loading()}/>
=======
>>>>>>> f2aef1d2fdf3e1ce87ab915aa2e487562ef43d3b
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
<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> f2aef1d2fdf3e1ce87ab915aa2e487562ef43d3b

<<<<<<< HEAD
import React,{Component} from 'react'
import { Text,Image, View, StyleSheet } from 'react-native'


class Movie extends Component{
  render(){
    return(
      <View>
       <Text>
       Nome do Filme: {this.props.data.Title}{"\n"}
       Data de Lançamento: {this.props.data.Released}{"\n"}
       Tempo de Duração: {this.props.data.Runtime}{"\n"}
       Genêros: {this.props.data.Genre}{"\n"}
       Digirido por: {this.props.data.Director}{"\n"}
       </Text>
      </View>
    )
  }
}


=======
import React,{Component} from 'react'
import { Text,Image, View, StyleSheet } from 'react-native'


class Movie extends Component{
  render(){
    return(
      <View>
       <Text>
       Nome do Filme: {this.props.data.Title}{"\n"}
       Data de Lançamento: {this.props.data.Released}{"\n"}
       Tempo de Duração: {this.props.data.Runtime}{"\n"}
       Genêros: {this.props.data.Genre}{"\n"}
       Digirido por: {this.props.data.Director}{"\n"}
       </Text>
      </View>
    )
  }
}


>>>>>>> f2aef1d2fdf3e1ce87ab915aa2e487562ef43d3b
export default Movie
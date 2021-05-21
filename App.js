import React from 'react';
import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import Slider from '@react-native-community/slider';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textoTrans: 0.0,
      sliderValue: 0,

    };
  }

  render(){
    return (
      <View>
        <View style={styles.container1}>
          <Text style={{paddingRight: 10}}>Valor</Text>
          <TextInput style={{backgroundColor:'grey', flex: 1}}
          onChangeText={texto1  => {this.setState({textoTrans: texto1})}}
          keyboardType='numeric'></TextInput>
        </View>
        <View style={styles.container1}>
          <Text style={{paddingRight:10, paddingLeft: 20}}>%</Text>
          <Slider style={{flex: 1}} maximumValue={30}
           minimumValue={0} step={1} value={this.state.sliderValue}
           onValueChange={valor => this.setState({sliderValue: valor})}
            ></Slider>
        </View>
        <View style={styles.container2}>
          <Text>10%</Text>
          <Text>{this.state.sliderValue}%</Text>
        </View>
        <View style={styles.container3}>
            <Text style={styles.tituloEstilo}>Gorjeta</Text>
            <Text style={styles.textoEstilo}>{this.state.textoTrans*0.10}</Text>
            <Text style={styles.textoEstilo}>{((this.state.textoTrans*(this.state.sliderValue/100)).toFixed(1))}</Text>
        </View>
        <View style={styles.container3}>
            <Text style={[styles.tituloEstilo, {paddingLeft:34}]}>Total</Text>
            <Text style={styles.textoEstilo}>{(this.state.textoTrans * 1.10).toFixed(1)}</Text>
            <Text style={styles.textoEstilo}>{((this.state.textoTrans*(1 + (this.state.sliderValue/100))).toFixed(1))}</Text>
        </View>


        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 20,
    paddingBottom: 20,
    
  },
  container2: {
    marginTop: 20,
    marginLeft: 65,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  container3: {
    flexDirection: 'row',
    marginBottom: 10,

  },
  textoEstilo: {
    flex: 1,
    backgroundColor:'grey', 
    marginRight: 10,
    textAlign: 'center',
  },
  tituloEstilo: {
    paddingRight:10,
    paddingLeft: 20
  }

});

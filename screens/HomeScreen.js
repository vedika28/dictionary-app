import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';
import { Header } from 'react-native-elements';
import dictionary from '../database';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: true,
      word: '',
      lexicalCategory: '',
      examples: [],
      definition: '',
    };
  }

  getWord = (word) => {
    var searchKeyword = word.toLowerCase();
    var word = dictionary[text]["word"]
    var lexicalCategory = dictionary[text]["lexicalCategory"]
    var definition = dictionary[text]["definition"];

   if (word === 1) {
      this.setState({
        "word": word,
        "defintion": definition,
        "lexicalCategory": lexicalCategory,
      });
    } else {
      this.setState({
        word: this.state.text,
        defintion: 'not found',
      });
    };
};

render() {
  return (
    <View>
      <Header
        containerStyle={{ marginTop: -50 }}
        centerComponent={{
          text: 'Dictionary App',
          style: { color: 'white', fontSize: 20, fontWeight: 'bold' },
        }}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => {
          this.setState({
            text: text,
            isSearchPressed: false,
            word: 'Loading...',
          });
        }}
        value={this.state.text}
      />
      <TouchableOpacity style={styles.button}>
        <Text
          style={styles.textb}
          onPress={() => {
            this.setState({ isSearchPressed: true });
            this.getWord(this.state.text);
          }}>
          Search
          </Text>
      </TouchableOpacity>

      <Text style={[styles.buttonText, { marginTop: 40 }]}>
        Word: {this.state.word}
      </Text>
      <Text style={styles.buttonText}>
        Type: {this.state.lexicalCategory}
      </Text>
      <Text style={styles.buttonText}>
        Definition: {this.state.definition}
      </Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgb(150, 140, 230)',
    width: '70%',
    height: 40,
    alignSelf: 'center',
    marginTop: 90,
  },
  button: {
    marginTop: 50,
    width: '55%',
    height: 40,
    alignSelf: 'center',
    backgroundColor: 'rgb(0,200,250)',
    borderRadius: 50,
    justifyContent: 'center',
  },
  textb: {
    fontSize: 22,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});

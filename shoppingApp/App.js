import React from 'react';
import { Text, View } from 'react-native';
import CardDetail from './src/component/CardDetail';
import Header from "./src/component/Header"


export default function App() {
  return (
    <View>
      <Header />
      <CardDetail />
    </View>
  );
}
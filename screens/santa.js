import React from 'react';
import LottieView from 'lottie-react-native';

export default class SantaAnimation extends React.Component {
  render() {
    return (
      <LottieView
      source={('https://assets10.lottiefiles.com/packages/lf20_piV5dH.json')}
      style={{width:"60%"}}
      autoPlay loop />
    )
  }
}
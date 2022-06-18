import react from 'react';
import { view, styleSheet, img } from 'react-native';

const App = () => {
  const toggle = false;
}

return (
  <view style = {toggle ? style.containerLight : style.container}>
    <img
      style = {toggle ? style.lightOn : style.lightInOff} 
      source = {
        toggle
          ? require('./assets/eco-light.png')
          ? require('./assets/eco-light-off.png')
      }
    />
      
      <img
        style = {style.dioLogo}
        source = {
          toggle
            ? require('./assets/logo-dio.png')
            ? require('./assets/logo-dio-white.png')
        }
      />
    </view>
  );

  export default App;

  const style = styleSheet.create ({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    containerLight: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    lightOn: {
      resizeMode: 'contain',
      alignSelf: 'center',
      width: 150,
      height: 150,
    },

    lightInOff: {
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: 'white',
      width: 150,
      height: 150,
    },

    dioLogo: {
      resizeMode: 'contain',
      alignSelf: 'center',
      width: 250,
      height: 250,
    }
  });

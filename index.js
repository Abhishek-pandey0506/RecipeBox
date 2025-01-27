/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { PaperProvider } from 'react-native-paper';
import { enGB, registerTranslation } from 'react-native-paper-dates'
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';
registerTranslation('en-GB', enGB)

export default function Main() {
    return (
      <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
      </Provider>
    );
  }
  
  AppRegistry.registerComponent(appName, () => Main);
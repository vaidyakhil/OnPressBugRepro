/**
 * @format
 */

import MessageQueue from 'react-native/Libraries/BatchedBridge/MessageQueue';

const customSpyMethod = info => {
  if (['WebSocketModule'].includes(info.module)) {
    return;
  }
  console.log(
    `🕵️ : ${info.type === MessageQueue.TO_JS ? 'N->JS' : 'JS->N'} : ` +
      `${info.module != null ? info.module + '.' : ''}${info.method}`,
  );
};
MessageQueue.spy(customSpyMethod);

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

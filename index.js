import { registerRootComponent } from 'expo';

import App from './App';
import { vexo } from 'vexo-analytics';

if(!__DEV__)
    vexo('38e852e1-2d9d-4809-b476-4ed150b87153');

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);


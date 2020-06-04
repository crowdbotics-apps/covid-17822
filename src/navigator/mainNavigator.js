import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile61405Navigator from '../features/UserProfile61405/navigator';
import Tutorial61404Navigator from '../features/Tutorial61404/navigator';
import NotificationList61376Navigator from '../features/NotificationList61376/navigator';
import Settings61375Navigator from '../features/Settings61375/navigator';
import Settings61367Navigator from '../features/Settings61367/navigator';
import UserProfile61365Navigator from '../features/UserProfile61365/navigator';
import ArticleList61327Navigator from '../features/ArticleList61327/navigator';
import ArticleList61326Navigator from '../features/ArticleList61326/navigator';
import ArticleList61325Navigator from '../features/ArticleList61325/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile61405: { screen: UserProfile61405Navigator },
Tutorial61404: { screen: Tutorial61404Navigator },
NotificationList61376: { screen: NotificationList61376Navigator },
Settings61375: { screen: Settings61375Navigator },
Settings61367: { screen: Settings61367Navigator },
UserProfile61365: { screen: UserProfile61365Navigator },
ArticleList61327: { screen: ArticleList61327Navigator },
ArticleList61326: { screen: ArticleList61326Navigator },
ArticleList61325: { screen: ArticleList61325Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

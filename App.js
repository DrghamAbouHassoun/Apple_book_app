import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Reading from './app/screens/Reading';
import Libraray from './app/screens/Libraray';
import Store from './app/screens/Store';
import Audoibooks from './app/screens/Audiobooks';
import Search from './app/screens/Search';

import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView, Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon : ({focused, color, size}) => {
              let iconName;
              if (route.name === "Reading now") {
                focused ?
                iconName = <FontAwesome5 name="book-open" size={24} color="black" />:
                iconName = <FontAwesome5 name="book-open" size={24} color="gray" />
              } else if (route.name === "Libraray") {
                focused ?
                iconName = <MaterialCommunityIcons name="bookshelf" size={24} color="black" />:
                iconName = <MaterialCommunityIcons name="bookshelf" size={24} color="gray" />
              } else if (route.name === "Book Store") {
                focused ?
                iconName = <MaterialCommunityIcons name="shopping" size={24} color="black" /> :
                iconName = <MaterialCommunityIcons name="shopping" size={24} color="gray" />
              } else if (route.name === "Audio book") {
                focused ?
                iconName = <MaterialCommunityIcons name="headphones" size={24} color="black" /> :
                iconName = <MaterialCommunityIcons name="headphones" size={24} color="gray" />
              } else if (route.name === "Search") {
                focused ?
                iconName = <Feather name="search" size={24} color="black" /> :
                iconName = <Feather name="search" size={24} color="gray" />
              }

              return iconName;
            },
            headerShown : false,
            tabBarActiveTintColor : "black",
          })}

        >
          <Tab.Screen 
            name='Reading now' 
            component={Reading} 

          />
          <Tab.Screen name="Libraray" component={Libraray} />
          <Tab.Screen name="Book Store" component={Store} />
          <Tab.Screen name='Audio book' component={Audoibooks} />
          <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}


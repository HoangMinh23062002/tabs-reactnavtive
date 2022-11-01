// import React from 'react';
// import {StyleSheet, Text, View, Image} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();
// const SettingsStack = createNativeStackNavigator();
// const HomeStack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator screenOptions={{headerShown: false}}>
//         <Tab.Screen name="First">
//           {() => (
//             <SettingsStack.Navigator>
//               <SettingsStack.Screen
//                 name="Settings"
//                 component={SettingsScreen}
//               />
//               <SettingsStack.Screen name="Profile" component={ProfileScreen} />
//             </SettingsStack.Navigator>
//           )}
//         </Tab.Screen>
//         <Tab.Screen name="Second">
//           {() => (
//             <HomeStack.Navigator>
//               <HomeStack.Screen name="Home" component={HomeScreen} />
//               <HomeStack.Screen name="Details" component={DetailsScreen} />
//             </HomeStack.Navigator>
//           )}
//         </Tab.Screen>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
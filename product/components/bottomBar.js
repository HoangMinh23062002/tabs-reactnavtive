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
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// import styles from'../assets/style/pageStyle'

const DetailProfile = () => {
  return (


   
     

    <View style={styles.container}>
    <Text>Welcome to our profile page</Text>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                       source={require('../assets/img/image134.png')}/>

                <Text style={styles.name}>Hoang Tuan Minh</Text>
                <Text style={styles.userInfo}>Minh2 </Text>
                <Text style={styles.userInfo}>Minh</Text>
            </View>
          </View>

          <View style={styles.body}>

          </View>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
  },
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    backgroundColor: "lightgray",
    height:500,
  },
 
});
export default DetailProfile;

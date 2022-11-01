
// // import { useState } from "react";
// // import { Button, StyleSheet, Text, View } from "react-native";

// // export default function App() {
// //   const [count, setCount] = useState(0);

// //   const increaseCount = () => {
// //     setCount(count + 1);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text>Open up App.js to start working on your app!</Text>
// //       <Text style={styles.text}>Hello PNV23-React Native</Text>
// //       <Button onPress={increaseCount} title="Increase Count"></Button>
// //       <Text style={styles.count}>Count: {count}</Text>

// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// //   text: {
// //     color: "#FF0000", // Red color
// //     fontSize: 50,
// //     fontStyle: "italic",
// //   },
// //   count: {
// //     fontSize: 30,
// //   },
// // });

// // import { useState } from "react";
// // import {
// //   RefreshControl,
// //   ScrollView,
// //   StyleSheet,
// //   Text,
// //   View,
// // } from "react-native";

// // export default function App() {
// //   const [items, setItems] = useState([
// //     { key: 1, item: "item 1" },
// //     { key: 2, item: "item 2" },
// //     { key: 3, item: "item 3" },
// //     { key: 4, item: "item 4" },
// //     { key: 5, item: "item 5" },
// //     { key: 6, item: "item 6" },
// //     { key: 7, item: "item 7" },
// //     { key: 8, item: "item 8" },
// //     { key: 9, item: "item 9" },
// //     { key: 10, item: "item 10" },
// //     { key: 11, item: "item 11" },
// //     { key: 12, item: "item 12" },
// //     { key: 13, item: "item 13" },
// //   ]);

// //   const [refreshing, setRefreshing] = useState(false);

// //   const onRefresh = () => {
// //     setRefreshing(true);
// //     setItems([...items, { key: 14, item: "item 14" }]);
// //     setRefreshing(false);
// //   };

// //   return (
// //     <ScrollView
// //       refreshControl={
// //         <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
// //       }
// //       style={styles.container}
// //     >
// //       {items.map((item) => {
// //         return (
// //           <View style={styles.item} key={item.key}>
// //             <Text style={styles.text}>{item.item}</Text>
// //           </View>
// //         );
// //       })}
// //     </ScrollView>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff",
// //   },
// //   text: {
// //     color: "#FF0000", // Red color
// //     fontSize: 50,
// //     fontStyle: "italic",
// //   },
// //   item: {
// //     alignItems: "center",
// //     justifyContent: "center",
// //   },
// // });
// // import { useState } from "react";
// // import { Button, StyleSheet, Text, View } from "react-native";
// // // import {  Button, View,  Text, Alert } from 'react-native';
// // import Task from "./practise/bai1";

// // export default function App() {
// //     const [name, setName] = useState("");

// //     return (
// //         <View style={styles.container}>
// //             <View style={styles.taskWrapper}>
// //                 <Text style={styles.sectionTitle}>Today's tasks</Text>
// //                 <View style={styles.items}>
// //                     <Task text="Task 1" />
// //                     <Task text="Task 2" />
// //                     <Task text="Task 3" />
// //                     <Task text="Task 4" />
// //                     <Task text="Task 5" />
// //                 </View>
// //               <Button
// //               style={styles.btn}
// //               title="Press me"
// //         onPress={() => Alert.alert('Simple Button pressed')}
// //               />
// //             </View>
// //         </View>
// //     );
// // }

// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         backgroundColor: "#E8EAED",
// //     },
// //     taskWrapper: {
// //         paddingTop: 80,
// //         paddingHorizontal: 20,
// //     },
// //     items: {
// //         marginTop: 20,
// //     },
// //     sectionTitle: {
// //         fontSize: 24,
// //         fontWeight: "bold",
// //     },
// //     btn:{
// //         backgroundColor: "red"
// //     }
// // });

// // import { StyleSheet, Text, View, Pressable, TabBarIOSItem } from "react-native";
// // import { NavigationContainer } from "@react-navigation/native";
// // import { createStackNavigator } from "@react-navigation/stack";
// // import ScreenA from "./page/home";
// // import ScreenB from "./page/detail";
// // import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// // const Stack = createStackNavigator();
// // const Tab = createStackNavigator();
// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator
// //         // screenOptions={{ header: () => null }}
// //         screenOptions={({ route }) => ({
// //           tabBarIcon: ({ focused, size, color }) => {
// //             let iconName;
// //             if (route.name === "Screen_A") {
// //               iconName = "autoprefixer";
// //               size = focused ? 25 : 20;
// //               // color = focused ? "#f0f" : "#555";
// //             } else if (route.name === "Screen_B") {
// //               iconName = "btc";
// //               size = focused ? 25 : 20;
// //               // color = focused ? "#f0f" : "#555";
// //             }
// //             return <FontAwesome5 name={iconName} size={size} color={color} />;
// //           },
// //         })}
// //         tabBarOptions={{
// //           activeTintColor: "#f0f",
// //           inactiveTintColor: "#555",
// //           inactiveBackgroundColor: "#999",
// //           showLabel: true,
// //           labelStyle: { fontSize: 14 },
// //         }}
// //       >
// //         <Tab.Screen 
// //           name="Screen_A"
// //           component={ScreenA}
// //           options={{ tabBarBadge: 3 }}
// //         />
// //         {/* options={{header: () => null}} */}
// //         <Tab.Screen name="Screen_B" component={ScreenB} />
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // }

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
//       <Tab.Navigator >
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
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DisplayAnImage from './product/components/page';
import detailDisplay from './product/components/detail';
function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={DisplayAnImage} />
        <Tab.Screen name="Settings" component={detailDisplay} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
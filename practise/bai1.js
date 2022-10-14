// import { useState } from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function Bai() {
//     const [name, setName] = useState("");

//     return (
//         <View style={styles.container}>
//             <View style={styles.taskWrapper}>
//                 <Text style={styles.sectionTitle}>HoangTuanMinh</Text>
//                 <Text style={styles.class}>I belongs to PNV23A</Text>
//                 <View style={styles.items}></View>
//             </View>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "white",
//         textAlign:"center",
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     taskWrapper: {
//         // paddingTop: 80,
//         // paddingHorizontal: 20,
//         // left:"25%",
//         // top:"40%",
       
//         backgroundColor: "black",

//     },
//     items: {},
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: "bold",
//         color: "green",
//     },
//     class:{
//         color: "red",
//     }
// });

// import { useState } from "react";
// import {  Text, View } from "react-native";

// const Task = (props) : Element => {
//     return (
//         <view>
//             <Text>{props.Text}</Text>
//         </view>
//     );
// };
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>
                <Text>{props.text}</Text>
            </View>
            <View style={styles.circle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 15,
        marginBottom: 20,
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: "#55BCF6",
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemLeft: {
        flexDirection: "row",
    },
    itemText: {
        maxWidth: "80%",
    },
    circle: {
        height: 12,
        width: 14,
        backgroundColor: "#55BCF6",
        borderRadius: 5,
        borderWidth: 2,
    },
});

export default Task;
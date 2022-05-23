//import liraries
// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';

// // create a component
// const FoodList = () => {
//   const [state, setState] = useState([]);
//   const [listState, setListState] = useState([]);

//   const getIcon = name => {
//     if (name === 'Blazer') {
//       return (
//         <Image
//           style={styles.listIconStyle}
//           source={require('../../asset/image/lean.png')}
//         />
//       );
//     }
//     if (name === 'Kurta') {
//       return (
//         <Image
//           style={styles.listIconStyle}
//           source={require('../../asset/image/lean.png')}
//         />
//         // <FontAwesome name="calendar" size={20} />
//       );
//     }
//     if (name === 'ABC') {
//       return (
//         <Image
//           style={styles.listIconStyle}
//           source={require('../../asset/image/lean.png')}
//         />
//       );
//     }
//     if (name === 'XYZ') {
//       return (
//         <Image
//           style={styles.listIconStyle}
//           source={require('../../asset/image/lean.png')}
//         />
//       );
//     }
//   };
//   useEffect(() => {
//     fetch('https://api.jsonbin.io/b/60e7f4ebf72d2b70bbac2970')
//       .then(responce => responce.json())
//       .then(res => {
//         setState(res.data);
//         setListState(res.data[0]);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//     console.log(state);
//   }, []);
//   const clickHandel = index => {
//     state.map((item, ind) => {
//       if (index == ind) {
//       }
//     });
//   };
//   return (
//     <View style={{alignItems: 'center'}}>
//       {state?.map((item, index) => {
//         return (
//           <TouchableOpacity
//             style={styles.dorpDownStyle}
//             onPress={() => clickHandel(index)}>
//             <View style={{flexDirection: 'row', alignItems: 'center'}}>
//               <Text>{item.title}</Text>
//               {getIcon(item.title)}
//             </View>
//             <Image
//               style={styles.listIconStyle}
//               source={require('../../asset/image/dropdown.png')}
//             />
//           </TouchableOpacity>
//         );
//       })}
//     </View>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'gray',
//   },
//   listIconStyle: {
//     height: 35,
//     width: 35,
//     margin: 8,
//   },
//   dorpDownStyle: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     marginTop: 20,
//     backgroundColor: '#ffffff',
//     alignItems: 'center',
//     width: '90%',
//     height: 50,
//     borderRadius: 10,
//   },
// });

// //make this component available to the app
// export default FoodList;

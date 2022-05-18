// import React from 'react';
// import 'react-native-gesture-handler';
// import {SafeAreaView, StyleSheet, StatusBar, Text} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const App = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView style={styles.container}>
//         <Text>This font-weight is 'regular' </Text>
//         <Text style={styles.boldFont}>This font-weight is 'bold' </Text>
//         <MaterialCommunityIcons name="bell" color={'#353353'} size={23} />
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   boldFont: {
//     fontFamily: 'Roboto-Bold',
//   },
// });

// export default App;

import React from 'react';
import {TabBar} from './src/navigation/TabBar';

const App = () => {
  return <TabBar barColor="#F6F7EC" />;
};

export default App;

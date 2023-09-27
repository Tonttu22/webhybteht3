import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Platform} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Statusbar tehtävä</Text>
      <StatusBar 
        style="auto"
        backgroundColor='red'  
        translucent={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
  },
});

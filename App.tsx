import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text } from 'react-native';
import { myColors } from './src/styles/myColors';
import { ThemeConext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeybord';



export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeConext.Provider value={theme}>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <MyKeyboard />
      </SafeAreaView>
    </ThemeConext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
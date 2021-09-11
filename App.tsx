import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, NativeModules, SafeAreaView, Platform, Dimensions} from 'react-native';
import TodoList from "./src/components/TodoList/TodoList";
import todos from "./src/store/todos";
import Header from "./src/components/Header/Header";

const {StatusBarManager} = NativeModules

const App = () => {
    useEffect(() => {
        todos.fetchTodos()
    }, [])

    return (
        <SafeAreaView style={{backgroundColor: '#D9B5A5'}}>
            <View style={styles.container}>
                <StatusBar style="auto" backgroundColor={'#D9B5A5'}/>
                <Header/>
                <TodoList/>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBarManager.HEIGHT + 13,
        backgroundColor: '#D9B5A5',
        height: Dimensions.get('window').height
    },
    androidSafeArea: {
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0
    },
});

export default App
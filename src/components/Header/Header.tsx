import React, {useState} from 'react';
import {Alert, Modal, Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import todos from "../../store/todos";
import {action} from "mobx";

const Header = () => {

    const [search, editSearch] = useState<string>('')
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [addInputText, editAddInputText] = useState<string>('')

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={(e) => {
                todos.term = e
                editSearch(e)
            }} value={search} placeholder={'Enter todo title'}/>
            <Pressable style={styles.addFormButton} onPress={() => {
                setModalVisible(true)
            }}>
                <Text style={styles.addFormButtonText}>
                    +
                </Text>
            </Pressable>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            value={addInputText}
                            onChangeText={editAddInputText}
                            placeholder={'Enter todo title'}
                            style={styles.addInput}/>
                        <View style={styles.buttons}>
                            <Pressable
                                style={styles.buttonClose}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                            <Pressable disabled={!addInputText}
                                style={styles.submitButton}
                                onPress={action(() => {
                                    todos.addTodo(addInputText)
                                    setModalVisible(!modalVisible)
                                    editAddInputText('')
                                })}
                            >
                                <Text style={styles.textStyle}>Enter</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    input: {
        paddingHorizontal: 5,
        paddingVertical: 15,
        width: '90%'
    },
    addFormButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '10%',
        backgroundColor: '#BA7A5F'
    },
    addFormButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonClose: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#BA7A5F',
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    submitButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#BA7A5F',
    },
    addInput: {
        width: 200,
        textAlign: "center",
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    buttons: {
        padding: 5,
        flexDirection: "row"
    }
})

export default Header;
import {ITodo} from "../../store/todos";
import React from "react";
import {observer} from "mobx-react-lite";
import {Button, Pressable, StyleSheet, Text, View} from "react-native";

interface IProps {
    todo: ITodo,
    isEven: boolean,
    deleteTodo: (id: number) => void,
    markTodo: (id: number) => void,
}

const Todo: React.FC<IProps> = observer((props) => {
    return (
        <View style={styles.container}>
            <Pressable style={props.isEven
                ? {...styles.evenElement, ...styles.element}
                : {...styles.oddElement, ...styles.element}} onPress={() => {
                props.markTodo(props.todo.id)
            }}>
                <Text style={props.todo.completed ? {...styles.text, ...styles.completed} : styles.text}>
                    {props.todo.title}
                </Text>
            </Pressable>
            <Pressable style={styles.deleteButton} onPress={() => {
                props.deleteTodo(props.todo.id)
            }}>
                <Text style={styles.deleteButtonText}>x</Text>
            </Pressable>
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderColor: 'black',
        borderBottomWidth: 2
    },
    evenElement: {
        backgroundColor: '#C42E49',
    },
    oddElement: {
        backgroundColor: '#7D85B2'
    },
    text: {
        color: 'black',
        fontSize: 15,
        paddingHorizontal: 5,
        paddingVertical: 15
    },
    completed: {
        textDecorationLine: "line-through"
    },
    element: {
        width: '90%'
    },
    deleteButton: {
        backgroundColor: '#6B434C',
        width: '10%',
        alignItems: "center",
        justifyContent: "center"
    },
    deleteButtonText: {
        fontWeight: 'bold',
        alignItems: "center",
        justifyContent: "center",
        color: 'white'
    }
})

export default Todo
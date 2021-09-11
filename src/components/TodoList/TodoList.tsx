import React from 'react';
import {View} from "react-native";
import {observer} from "mobx-react-lite";
import todos from "../../store/todos";
import Todo from "./Todo";


const TodoList: React.FC = observer(() => {
    return (
        <View>
            {todos.getState.map((todo, index) =>
                <Todo
                    key={todo.id}
                    todo={todo}
                    isEven={!!(index % 2)}
                    markTodo={todos.markTodo.bind(todos)}
                    deleteTodo={todos.deleteTodo.bind(todos)}
                />)}
        </View>
    );
});

export default TodoList;
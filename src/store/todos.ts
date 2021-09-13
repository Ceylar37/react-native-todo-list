import {makeAutoObservable, runInAction} from "mobx";
import { configure } from "mobx"

configure({
    enforceActions: "never",
})

export interface ITodo {
    id: number,
    title: string,
    completed: boolean
}

class Todos {
    private state: ITodo[] = []
    term: string = ''
    constructor() {
        makeAutoObservable(this)
    }
    fetchTodos() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then((json) => {
                this.state = []
                for (let i = 0; i < 5; i++)
                    this.state.push({id: json[i].id, title: json[i].title, completed: json[i].completed})
            })
    }

    addTodo(title: string) {
            if (title) this.state.push({id: Date.now(), title, completed: false})
    }

    markTodo(id: number) {
        const foundedTodo = this.state?.find(todo => todo.id === id)
            if (foundedTodo) foundedTodo.completed = !foundedTodo.completed
    }

    deleteTodo(id: number) {
            this.state = this.state.filter(todo => todo.id !== id)
    }

    get getState() {
        return this.state.filter(todo => todo.title.toLowerCase().indexOf(this.term) + 1)
    }
}


export default new Todos()
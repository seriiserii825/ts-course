import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/5";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo = res.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

function logTodo(id: number, title: string, completed: boolean) {
  console.log(`
  id: ${id} 
  title: ${title}
  completed: ${completed}`);
}

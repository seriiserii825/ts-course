export default function api() {
  const json_response = `{"userId": 1, "id": 1, "title": "delectus aut autem", "completed": false}`;

  interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const data = JSON.parse(json_response) as Todo;
  console.log(data.completed);
  type User = {
    id: number;
    name: string;
    email: string;
  }

  async function fetchUsers(): Promise<User[]> {
    const users: User[] = [
      { id: 1, name: "John Doe", email: "some@mail.com"}
    ]
    return users;
  }
  const users = fetchUsers();
  type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
}

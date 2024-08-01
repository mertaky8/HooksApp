import useFetch from "./hooks/useFetch";
import React from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function App() {
  const [todo, isTodoLoading, todoError] = useFetch<Todo>(
    "https://jsonplaceholder.typicode.com/todos/1"
  );
  const [user, isUserLoading, userError] = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <React.Fragment>
      <h1>React - Hooks</h1>
      {!!todoError && todoError}
      {isTodoLoading && "Yükleniyor"}
      {!isTodoLoading && !todoError && <div>{JSON.stringify(todo)}</div>}
      <br />
      <br />
      <h1>React - Users</h1>
      {!!userError && userError}
      {isUserLoading && "Yükleniyor"}
      {!isUserLoading && !userError && <div>{JSON.stringify(user)}</div>}
    </React.Fragment>
  );
}

export default App;

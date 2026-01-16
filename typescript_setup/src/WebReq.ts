import type { AxiosResponse } from "axios";
import axios from "axios";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

//AxiosReposne // built in data type for fetch req

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Todo", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.log("Axios error", error.message);
      if (error.response) {
        console.log(error.response.status.toFixed());
      }
    } else {
      console.log(error.message);
    }
  }
};

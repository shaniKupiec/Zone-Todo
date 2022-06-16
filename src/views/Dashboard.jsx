import userImg from "../assets/images/user-img.png";
import { TodoList } from "../components/TodoList";

export const Dashboard = (props) => {
  // <Link to="/register"> register </Link>

  const todos = [
    {
      id: "dfgbn",
      title: "Learn options api",
      subtitle: "",
      doneAt: 1654505358000,
    },
    {
      id: "4rtghn",
      title: "Learn composition api",
      subtitle: "",
      doneAt: null,
    },
    {
      id: "4rtgb",
      title: "Watch video about State Management",
      subtitle: "",
      doneAt: 1654504358000,
    },
    {
      id: "hgfd",
      title: "Watch video about State Management Watch video about State Management",
      subtitle: "",
      doneAt: 1654504358000,
    },
    {
      id: "tgvb",
      title: "Make Todo App",
      subtitle: "",
      doneAt: null,
    },
    {
      id: "5tyhjn",
      title: "Learn Vue2",
      subtitle: "",
      doneAt: null,
    },
  ];

  let userName = "shani kupiec";

  return (
    <div className="dashboard">
      <header className="dashboard__head">
        <div className="dashboard__head__block"></div>
        <img src={userImg} alt="" className="dashboard__head__user-img" />
        <div className="dashboard__head__welcome">Welcome {userName}</div>
      </header>
      <main className="dashboard__main">
        <TodoList todos={todos} />
      </main>
    </div>
  );
};

{
  /* <template>
  <div className="dashboard">
    <header className="dashboard__head">
      <div className="dashboard__head__block"></div>
      <img src="../assets/images/user-img.png" alt="" className="dashboard__head__user-img" />
      <div className="dashboard__head__welcome">Welcome {{ userName }}</div>
    </header>
    <router-view className="dashboard__main" :todos="todos"></router-view>
    <main className="dashboard__main">
      <todo-list :todos="todos"></todo-list>
    </main> 
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from '../store'
import { Todo } from "@/models/todo.models";

export default defineComponent({
  setup() {
    const store = useStore();

    const userName = computed<string>(() => {
      return store.getters.loggedInUser.fullName;
    });
    const todos = computed<Todo[]>(() => {
      return store.getters.loggedInUser.todos;
    });

    return {
      userName,
      todos,
    };
  },
  components: {
  },
});
</script> */
}

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TodoPreview } from "./TodoPreview";
import plusImg from "../assets/images/plus-button.png";

export const TodoList = ({ todos }) => {
  const navigate = useNavigate();

  // const add = useCallback(() => {
  //   // console.log("hi");
  //   navigate("/editTodo", { replace: true });
  // }, [navigate]);

  return (
    <section className="todo-list">
      <header className="todo-list__header">
        <div className="todo-list__header__title">todo List</div>
        <img src={plusImg} className="todo-list__header__add"  alt="" />
        {/* onClick={add()} */}
      </header>
      {todos.map((todo) => (
        <TodoPreview key={todo.id} todo={todo} />
      ))}
    </section>
  );
};

{
  /* <template>
  <section className="todo-list">
    <header className="todo-list__header">
      <div className="todo-list__header__title">todo List</div>
      <img src="../assets/imgs/plus-button.png" className="todo-list__header__add" @click="add()" alt="" />
    </header>
    <todo-preview v-for="todo in todos" :key="todo.id" :todo="todo"></todo-preview>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router';
import todoPreview from "./todoPreview.vue";

export default defineComponent({
  components: {
    todoPreview,
  },
  props: {
    todos: Object,
  },
  setup() {
    const router = useRouter();
    const add = () => {
      router.push(`/dashboard/editTask`);
    };
    return {
      add
    }
  }
})
</script> */
}

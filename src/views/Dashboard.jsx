export function Dashboard(props) {
    return (
        <div>dashboard</div>
    )
}

{/* <template>
  <div class="dashboard">
    <header class="dashboard__head">
      <div class="dashboard__head__block"></div>
      <img src="../assets/imgs/user-img.png" alt="" class="dashboard__head__user-img" />
      <div class="dashboard__head__welcome">Welcome {{ userName }}</div>
    </header>
    <router-view class="dashboard__main" :todos="todos"></router-view>
    <main class="dashboard__main">
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
</script> */}


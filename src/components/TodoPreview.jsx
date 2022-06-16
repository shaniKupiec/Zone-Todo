export const TodoPreview = ({ todo }) => {
  const toggleTask = () => {};
  let className = "todo__checkbox";
  className += todo.doneAt ? " full" : "";

  return (
    <section className="todo" onClick={toggleTask}>
      <div className={className}></div>
      <div className="todo__text">
        <span className="todo__text__title"> {todo.title}</span>
        {todo.doneAt && <span className="todo__text__doneAt">{todo.doneAt}</span>}
      </div>
    </section>
  );
};

{
  /* <template>
  <section className="todo" @click="toggleTask()">
    <div className="todo__checkbox" :className="[{ full: todoForUse.doneAt }]"></div>
    <div className="todo__text">
      <span className="todo__text__title"> {{ todoForUse.title }}</span>
      <span v-if="todoForUse.doneAt" className="todo__text__doneAt"> {{ formattedTime }}</span>
    </div>
  </section>
</template>

<script lang="ts">
import { Task } from "@/models/todo.models";
import { computed, defineComponent, ref, Ref } from "vue";
import { useStore } from "../store";
import moment from "moment";

export default defineComponent({
  components: {},
  props: {
    todo: Object,
  },
  setup(props) {
    const store = useStore();
    const moment1 = moment;
    const todoForUse: Ref<any> = ref(props.todo);

    const toggleTask = async () => {
      todoForUse.value.doneAt = todoForUse.value.doneAt ? null : Date.now();
      await store.dispatch({ type: "editTask", todo: todoForUse.value });
    };

    // const formattedTime = (date: number) => {
    //   };

    const formattedTime = computed<any>(() => {
      return moment1(todoForUse.value.doneAt).format("DD/MM/YYYY, h:mm a");
    });

    return {
      toggleTask,
      todoForUse,
      formattedTime,
    };
  },
});
</script> */
}

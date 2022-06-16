export function Register(props) {
    return (
        <div>register</div>
    )
}

{/* <template>
  <section class="register">
    <div class="register__title">welcome onboard!</div>
    <div class="register__description">Let’s help ypu to meet your Todo!</div>
    <form @submit.prevent="register" class="register__form">
      <input type="text" name="" id="" v-model="fullName" placeholder="Enter Your Full Name" required />
      <input type="text" name="" id="" v-model="password" placeholder="Enter Your Password" required />
      <button class="register__form__submit" :class="[{ disable: this.fullName.trim().split(' ').length < 2 || this.password == '' }]">register</button>
    </form>
    <footer class="register__footer">
      Already have Account ? 
      <router-link to="/login">login</router-link>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from '../store'

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();

    const fullName: Ref<string> = ref('')
    const password: Ref<string> = ref('')


    const register = async () => {

      if (fullName.value.trim().split(" ").length < 2 || password.value === "") return;
      const userInfo = {
        fullName: fullName.value,
        password: password.value,
      };
      await store.dispatch({ type: "register", userInfo });
      router.push(`/dashboard/todo`);
    };

    return {
      register,
      fullName,
      password,
    };
  },
})
</script> */}

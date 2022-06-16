import { useCallback } from "react";
import illus1 from "../assets/imgs/illustration1.png";
import { useFormRegister } from "../hooks/useFormRegister.js";

export function Login(props) {
  const [register] = useFormRegister(
    {
      fullName: "",
      password: "",
    },
    checkValidations
  );

  const checkValidations = useCallback(async (filterBy) => {
    console.log('hi');
}, [])

const handleSubmit = () => {
  console.log('submit!');
}

  return (
    <section className="login">
      <div className="login__title">welcome back</div>
      <img src={illus1} alt="" className="login__illustration" />
      <form onSubmit={handleSubmit} className="login__form">
        <input type="text" {...register("fullName")} placeholder="Enter Your Full Name" required />
        <input type="text" {...register("password")} placeholder="Enter Your Password" required />
        <button className="login__form__submit">login</button>
      </form>
      <footer className="login__footer">
        Don't have Account ?<router-link to="/register">register</router-link>
      </footer>
    </section>
  );
}

{
  /* <template>
  <section className="login">
    <div className="login__title">welcome back</div>
    <img src="../assets/imgs/illustration1.png" alt="" className="login__illustration" />
    <form @submit.prevent="login" className="login__form">
      <input type="text" name="" id="" v-model="fullName" placeholder="Enter Your Full Name" required />
      <input type="text" name="" id="" v-model="password" placeholder="Enter Your Password" required />
      <button className="login__form__submit">login</button>
    </form>
    <footer className="login__footer">
      Don't have Account ?
      <router-link to="/register">register</router-link>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from '../store'

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();

    const fullName: Ref<string> = ref('')
    const password: Ref<string> = ref('')


    const login = async () => {
      const userInfo = {
        fullName: fullName.value,
        password: password.value,
      };
      // const isOkay = false;
      const isOkay = await store.dispatch({ type: "login", userInfo });
      console.log("isOkay", isOkay);
      if (isOkay) router.push(`/dashboard`);
      else {
        fullName.value = "";
        password.value = "";
        alert("try again");
      }
    };

    return {
      login,
      fullName,
      password,
    };
  },
});
</script> */
}

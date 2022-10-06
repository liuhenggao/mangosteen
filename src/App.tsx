import { defineComponent, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

export const App =  defineComponent({
    setup(){
        const count = ref(0)
        const onClick = ()=>{
            count.value += 1
        }
        return () =><>
            <ul>
                <li>
                    <RouterLink to="/">Bar</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">Foo</RouterLink>
                </li>
            </ul>
            <RouterView></RouterView>
        </>
    }
})
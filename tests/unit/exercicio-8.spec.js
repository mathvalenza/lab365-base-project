import { shallowMount } from "@vue/test-utils";
import ExercicioOito from "@/exercicios/exercicio-8.vue";

describe("ExercicioOito.vue", () => {
  it("clica no botão pela classe", async () => {
    const wrapper = shallowMount(ExercicioOito);

    await wrapper.find("button.previous").trigger("click");
  });
});

import { shallowMount } from "@vue/test-utils";
import ExercicioExemplo from "@/exercicios/exercicio-exemplo.vue";

describe("HelloWorld.vue", () => {
  it("renderiza props.nome quando informada", () => {
    const wrapper = shallowMount(ExercicioExemplo, {
      propsData: { nome: "Matheus" },
    });

    expect(wrapper.text()).toMatch("Matheus");
  });

  it("renderiza o valor padrão quando não há props.nome", () => {
    const wrapper = shallowMount(ExercicioExemplo, {
      propsData: { nome: null },
    });
    expect(wrapper.text()).toMatch("visitante");
  });

  it("exibe a mensagem de despedida quando o usuário clicar em sair", async () => {
    const wrapper = shallowMount(ExercicioExemplo, {
      propsData: { nome: "Fulano" },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.text()).toMatch("Volte sempre");
  });
});

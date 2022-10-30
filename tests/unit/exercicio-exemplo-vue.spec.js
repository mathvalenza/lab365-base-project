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

  it("exibe a mensagem de despedida sem a nota quando o usuário clicar em sair", async () => {
    const wrapper = shallowMount(ExercicioExemplo, {
      propsData: { nome: "Fulano" },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.text()).toMatch(
      "Volte sempre! Quando puder, nos deixe uma avaliação"
    );
  });

  it("exibe a mensagem de despedida com a nota quando o usuário clicar em sair", async () => {
    const wrapper = shallowMount(ExercicioExemplo, {
      propsData: { nome: "Fulano" },
    });

    const textInput = wrapper.find('input[type="number"]');
    await textInput.setValue("8");

    await wrapper.find("button").trigger("click");

    expect(wrapper.text()).toMatch("Volte sempre! Obrigado pela nota 8");
  });
});

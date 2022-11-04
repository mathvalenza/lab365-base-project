import { shallowMount } from "@vue/test-utils";
import ExercicioExemplo from "@/exercicios/exercicio-exemplo.vue";

describe("ExercicioExemplo.vue", () => {
  it("renderiza props.nome quando informada", () => {
    const wrapper = shallowMount(ExercicioExemplo, {
      propsData: { nome: "Matheus" },
    });

    expect(wrapper.text()).toMatch(
      "Olá, Matheus. Seja bem-vindo(a) ao nosso site!"
    );
  });

  it("renderiza o valor padrão quando não há props.nome", () => {
    const wrapper = shallowMount(ExercicioExemplo, {
      propsData: {
        nome: null,
      },
    });

    expect(wrapper.text()).toMatch(
      "Olá, visitante. Seja bem-vindo(a) ao nosso site!"
    );
  });

  it("exibe a mensagem de despedida sem a nota quando o usuário clicar em sair", async () => {
    const wrapper = shallowMount(ExercicioExemplo);

    const botao = wrapper.find("button");

    await botao.trigger("click");

    expect(wrapper.text()).toMatch(
      "Volte sempre! Quando puder, nos deixe uma avaliação"
    );
  });

  it("exibe a mensagem de despedida com a nota quando usuário em sair", async () => {
    const wrapper = shallowMount(ExercicioExemplo);

    const textInput = wrapper.find('input[type="number"]');

    await textInput.setValue("9");

    const botao = wrapper.find("button");

    await botao.trigger("click");

    expect(wrapper.text()).toMatch("Volte sempre! Obrigado pela nota 9");
  });

  // it("exibe a mensagem de despedida com a nota quando o usuário clicar em sair", async () => {
  //   const wrapper = shallowMount(ExercicioExemplo, {
  //     propsData: { nome: "Fulano" },
  //   });

  //   const textInput = wrapper.find('input[type="number"]');
  //   await textInput.setValue("8");

  //   await wrapper.find("button").trigger("click");

  //   expect(wrapper.text()).toMatch("Volte sempre! Obrigado pela nota 8");
  // });
});

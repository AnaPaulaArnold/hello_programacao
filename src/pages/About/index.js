import "./style.css";

const About = () => {
  return (
    <div className="about-container">
      <h3 className="about-title">Sobre o projeto</h3>
      <p className="about-description">
        Olá! Meu nome é Ana Paula, sou estudante de Bacharelado em Engenharia de
        Software na UNINTER, formada em Técnica de Eletrônica e trabalho como
        desenvolvedora de software desde 2021. Atualmente, estou atuando com
        JavaScript em uma empresa internacional. Este projeto foi desenvolvido
        como parte da matéria Extensionista do meu curso, alinhado com o quarto
        Objetivo de Desenvolvimento Sustentável (ODS) da ONU: Educação de
        qualidade.
      </p>

      <h4>Objetivo do projeto</h4>
      <p>
        O projeto visa introduzir a lógica de programação para estudantes que
        estão concluindo o ensino fundamental ou médio, iniciando sua jornada
        profissional ou apenas começando a pensar em suas carreiras. Com o
        crescente interesse pela tecnologia, este projeto oferece uma
        oportunidade acessível e divertida para mergulhar no mundo da
        programação.
      </p>

      <h4>Público-alvo</h4>
      <p>
        Nosso foco são os iniciantes, aqueles que nunca tiveram contato com
        programação, mas estão curiosos e ansiosos para aprender. Utilizando o
        CodePen e a linguagem JavaScript, criamos um ambiente de aprendizado
        interativo e envolvente.
      </p>

      <h4>Metodologia</h4>
      <p>
        O curso é estruturado em quatro vídeos, cada um abordando conceitos
        fundamentais de lógica de programação:
      </p>
      <div>
        <p>
          <b>1.Introdução à Programação e JavaScript:</b> Entenda o que é
          programação e como usar JavaScript para criar e manipular dados.
        </p>
        <p>
          <b>2.Introdução à Programação e JavaScript:</b> Entenda o que é
          programação e como usar JavaScript para criar e manipular dados.
        </p>
        <p>
          <b>3.Loops: Repetição Inteligente:</b> Descubra como automatizar
          tarefas repetitivas com loops.
        </p>
        <p>
          <b>4.Funções: Organizando o Código:</b> Veja como funções podem
          organizar e simplificar seu código.
        </p>
      </div>
      <p>
        Cada aula é pensada para ser prática e interativa, permitindo aos alunos
        verem resultados imediatos de seus esforços no CodePen.
      </p>

      <h4>Conclusão</h4>
      <p>
        Este projeto não apenas ensina programação, mas também inspira jovens a
        explorarem o vasto mundo da tecnologia, ajudando-os a desenvolver
        habilidades essenciais para suas futuras carreiras. Espero que
        aproveitem e se divirtam aprendendo tanto quanto eu gostei de criar este
        projeto! Vamos juntos transformar curiosidade em conhecimento e
        conhecimento em poder! 🚀
      </p>

      <div style={{ textAlign: "center", padding: "0 1rem" }}>
        <a href="#" style={{ fontWeight: "600" }}>
          Avalie o projeto atráves desse formulário! Seu feedback ajudará muito
        </a>
      </div>
    </div>
  );
};

export default About;

class card extends HTMLElement {
  constructor() {
    super();
    this.build();
  }
  build() {
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.styles());
    shadow.appendChild(this.createCard());
  }
  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
      width: ${this.widthCard()};
      height: ${this.heigthCard()};    
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      background-color: ${this.bgcolor()};
    }
    .card-text {
      width: 50%;
      padding: 4px;
    
      text-align: center;
      color: white;
      border-radius: 12px;
      text-transform: uppercase;
      box-shadow: 0 0 2px black;
      background-color: cadetblue;
    }
    
    .card-image {
      background-color: aqua;
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background-image: url(${this.imagemCard()});
      background-size: cover;
      box-shadow: inset 0 0 24px black;
    }
    
    .azul {
      background-color: aqua;
    }
    
        `;
    return style;
  }
  createCard() {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class="card">
    
      <div class="card-text"> ${this.nomeAluno()} </div>
      <div class="card-image"> </div>
      <div class="card-text"> ${this.turmaAluno()}<div>
    </div>
    `;

    return card;
  }
  bgcolor() {
    const color = this.getAttribute("data-bgcolor");
    return color;
  }
  nomeAluno() {
    const nome = this.getAttribute("data-nome");
    return nome;
  }
  turmaAluno() {
    const turma = this.getAttribute("data-turma");
    return turma;
  }
  imagemCard() {
    const imagem = this.getAttribute("data-imagem");
    return imagem;
  }
  heigthCard() {
    const height = this.getAttribute("data-height");
    return height;
  }
  widthCard() {
    const width = this.getAttribute("data-width");
    return width;
  }
}
customElements.define("card-aluno", card);

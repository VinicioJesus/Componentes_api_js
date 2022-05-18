"use strict";

const teste = async () => {
  const url = "https://testeleonid.herokuapp.com/alunos";
  const response = await fetch(url);
  const data = await response.json();
  return console.log(data.nome);
};
a;
teste();

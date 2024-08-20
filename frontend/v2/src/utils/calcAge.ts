export function calcAge(dataNascimento: Date): number {
    const hoje = new Date();
    const aniversario = new Date(dataNascimento);

    const diferencaAnos = hoje.getFullYear() - aniversario.getFullYear();
  
    const aniversarioEsteAno = new Date(hoje.getFullYear(), aniversario.getMonth(), aniversario.getDate());

    return hoje >= aniversarioEsteAno ? diferencaAnos : diferencaAnos - 1;
  }
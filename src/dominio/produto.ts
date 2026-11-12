export class Produto {
  constructor(
    public nome: string,
    public precoCentavos: number,
    public unidade: string,
    public categoria: string
  ) {}

  precoEmReais(): string {
    return `R$ ${(this.precoCentavos / 100).toFixed(2).replace(".", ",")}`;
  }

  precoPorQuantidade(quantidade: number): number {
    return (this.precoCentavos * quantidade) / 100;
  }
}

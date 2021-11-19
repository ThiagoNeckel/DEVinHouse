class Planta {
    constructor(nome, hidratacao) {
        this.nome = nome;
        this.hidratacao = hidratacao;
        this.verifica = true

    }


    rega(valor) {
        this.hidratacao += valor;

        if (this.hidratacao > 100) {
            this.verifica = false;

        } else {
            this.verifica = true;



        }
    }
    imprimir() {
        if (this.verifica == true) {
            return (this.nome + " hidratação " + this.hidratacao + " %  planta viva");
        } else
            return (this.nome + " hidratacao " + this.hidratacao + " % planta morta")
    }

}


const rosa = new Planta('Rosa', 80);
const orquidea = new Planta('Orquidea', 30)
rosa.rega(30);
console.log(rosa.imprimir());


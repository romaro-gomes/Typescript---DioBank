import { Conta } from './Conta';


export class contaPJ extends Conta {
    

    constructor(nome: string, numeroConta: number) {
        super(nome, numeroConta);
    }

    depositar = (deposito: number): number => {
        if (this.validarEstado() ){
            this.saldo = this.saldo + deposito
                       
        }
        return this.saldo
    }


    pedirEmprestimo = (emprestimo: number): number => {
        this.saldo = this.saldo + this.depositar(emprestimo)
        console.log(`A empresa pediu um empréstimo de ${emprestimo} reais. Seu saldo atual é de ${this.saldo}`);
        return this.saldo;
    };

}

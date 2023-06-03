import { Conta } from './Conta';


export class contaPoupanca extends Conta {
    

    constructor(nome: string, numeroConta: number) {
        super(nome, numeroConta);
    }

    depositar = (deposito: number): number => {
        if (this.validarEstado() ){
            this.saldo = this.saldo + deposito + 10
                       
        }
        return this.saldo
    }
}

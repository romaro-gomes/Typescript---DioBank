export abstract class Conta{
    private nome: string
    readonly numeroConta: number // não pode ser modificada
    protected saldo: number = 0
    private estado: boolean = true
   

    constructor(nome:string,numeroConta: number ){
        this.nome = nome
        this.numeroConta = numeroConta
    }

    mudarNome = (nome: string): void => {
        this.nome = nome
        console.log('Nome alterado com sucesso')
    }

    depositar = (deposito: number): number => {
        if (this.validarEstado() ){
            this.saldo = this.saldo + deposito
            console.log(`Voce depositou ${deposito} reais. Seu novo saldo é ${this.saldo} reais`)
            
        }
        return this.saldo
    }

    sacar = (saque: number): number =>{
        if (this.validarEstado() && this.validarSaque(saque) ){
            this.saldo = this.saldo - saque
            console.log(`Voce sacou ${saque} reais. Seu novo saldo é ${this.saldo} reais`)
            
        }
        return this.saldo
    }
       
    visualizarNome = () : string=> { // não é vids
        return this.nome
    }

    visualizarSaldo = () : void => {
        console.log(this.saldo)
    }

    protected validarEstado = (): boolean =>{
        if (this.estado) {
            return this.estado
        }

        throw new Error('Conta Inválida')
    }

    private validarSaque = (saque: number): boolean =>{
        if (this.saldo >= saque) {
            return true
        }

        throw new Error('Conta Inválida')
    }




}
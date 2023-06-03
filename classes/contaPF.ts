import { Conta } from './Conta'
export class contaPF extends Conta{
    doc_id: number

    constructor(doc_id: number,nome: string, numeroConta: number){
        super(nome, numeroConta)
        this.doc_id = doc_id
    }
}
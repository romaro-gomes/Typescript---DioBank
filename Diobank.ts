// Dio banking

//nome, contaDoBanco

//depositar, sacar

// console.log('------------------- Criando objeto --------------------------')
// class Conta{
//     nome: string
//     numeroConta: number
//     saldo: number = 0

//     constructor(nome:string,numeroConta: number ){
//         this.nome = nome
//         this.numeroConta = numeroConta
//     }

//     depositar = () => {
//         console.log('Voce depositou')
//     }

//     sacar = () =>{
//         console.log('Você sacou')
//     }

//     visualizarSaldo = () => {
//         console.log(this.saldo)
//     }
// }

// const novaConta: Conta = new Conta('Romario', 123)
// console.log(novaConta)
// console.log(`O cliente ${novaConta.nome} possui a conta: ${novaConta.numeroConta}`)

// novaConta.depositar()

// Classe administrador - filha de conta

// console.log('------------------- Estudando Herança --------------------------')

// class Admin extends Conta{
//     saldo: number

//     constructor(nome: string, numeroConta: number){
//         super(nome, numeroConta)
//         this.saldo=20
//     }

//     visualizarValor = () => {
//         console.log(this.saldo)
//     }
// }

// const administrador: Admin = new Admin('Romario', 24)

//const administrador: Conta = new Conta('Romario', 24)

// console.log(administrador)
// administrador.visualizarSaldo()

// console.log('------------------- Criando Classes Abstradras--------------------------')
// abstract class Conta{
//     nome: string
//     numeroConta: number
//     saldo: number = 0

//     constructor(nome:string,numeroConta: number ){
//         this.nome = nome
//         this.numeroConta = numeroConta
//     }

//     depositar = () => {
//         console.log('Voce depositou')
//     }

//     sacar = () =>{
//         console.log('Você sacou')
//     }

//     visualizarSaldo = () => {
//         console.log(this.saldo)
//     }
// }

// console.log('------------------- Criando Classes Apartir da Classe Abstrada --------------------------')


// class contaPF extends Conta{
//     doc_id: number

//     constructor(doc_id: number,nome: string, numeroConta: number){
//         super(nome, numeroConta)
//         this.doc_id = doc_id
//     }
// }



// console.log('------------------- Criando Modulos --------------------------')
// class contaPJ extends Conta{
//     constructor(nome:string, numeroConta: number){
//         super(nome, numeroConta)
//     }

//     pedirEmprestimo= () => {
//         console.log('Você pediu um empréstimo.')
//     }
// }

import { contaPF } from "./classes/contaPF"
import { contaPJ } from './classes/contaPJ'
import { contaPoupanca } from "./classes/contaPoupanca"

console.log('----------------- Conta PF ----------------------------')

const contaPessoaFisica: contaPF = new contaPF(100,'Romario', 24)
console.log(contaPessoaFisica)

contaPessoaFisica.depositar(100)
contaPessoaFisica.mudarNome('Carina')
contaPessoaFisica.sacar(75)

console.log(contaPessoaFisica)

console.log('------------------- Conta PJ --------------------------')
const pessoaJuridica: contaPJ = new contaPJ('FractalFlows', 25)
console.log(pessoaJuridica)

pessoaJuridica.pedirEmprestimo(100)

console.log(pessoaJuridica)

console.log('-------------------- Conta Poupança -------------------------')

const poupanca: contaPoupanca  = new contaPoupanca('Renan', 52)

poupanca.depositar(100)
poupanca.visualizarSaldo()

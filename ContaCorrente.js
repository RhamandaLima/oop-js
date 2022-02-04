import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;

    // #saldo =0 https://github.com/tc39/proposal-class-fields#private-fields

    constructor(cliente, agencia) {
        this.cliente = cliente;
        this.agencia = agencia;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }


    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 100) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
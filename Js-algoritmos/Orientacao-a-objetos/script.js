class ContaBancaria {
    constructor(agencia, numero, saldo, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this._saldo = saldo;
        this.tipo = tipo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        
        if(valor > this.saldo) return `Saldo insuficiente, você possui R$${this.saldo}`;
        else return `Saque feito com sucesso, saldo restante R$${this.saldo}`  

        this.saldo = this.saldo - valor;
    }

    depositar(valor){
        this.saldo = this.saldo + valor;
        return `Saldo atual R$${this.saldo}`;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);
        this.tipo = "conta corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo)
        this.tipo = "conta poupança";
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, saldo){
        super(agencia, numero, saldo)
        this.tipo = "conta universitária";
    }


    sacar(valor){
        if(valor >= 500) return `Identificamos que sua conta é do tipo ${this.tipo}, só são permitidos saques menores que 500 reais`
        else return this.saldo = valor - this.saldo
    }
}
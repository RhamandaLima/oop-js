/* 
-> Ser autenticavel significa ter o método autenticar.

-> Ducky type: o que interesse é se ele tem o método da propriedade que eu preciso utilizar.
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function;
    }
}
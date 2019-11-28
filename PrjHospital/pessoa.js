var hospital;
(function (hospital) {
    var Pessoa = /** @class */ (function () {
        function Pessoa() {
        }
        Pessoa.prototype.getNome = function () {
            return this._nome;
        };
        Pessoa.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Pessoa.prototype.getCpf = function () {
            return this._Cpf;
        };
        Pessoa.prototype.setCpf = function (Cpf) {
            this._Cpf = Cpf;
        };
        return Pessoa;
    }());
    hospital.Pessoa = Pessoa;
})(hospital || (hospital = {}));

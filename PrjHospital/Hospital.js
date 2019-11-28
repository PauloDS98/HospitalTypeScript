///<reference path="Paciente.ts"/>
///<reference path="Enfermeiro.ts"/>
///<reference path="Medico.ts"/>
var hospital;
(function (hospital) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._enfermeiros = [];
            this._medicos = [];
            this._pacientes = [];
        }
        Hospital.prototype.getNome = function () {
            return this._nome;
        };
        Hospital.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Hospital.prototype.getEnfermeiros = function () {
            return this._enfermeiros;
        };
        Hospital.prototype.addEnfermeiro = function (enfermeiro) {
            this._enfermeiros.push(enfermeiro);
        };
        Hospital.prototype.getMedico = function () {
            return this._medicos;
        };
        Hospital.prototype.addMedicos = function (medico) {
            this._medicos.push(medico);
        };
        Hospital.prototype.getPacientes = function () {
            return this._pacientes;
        };
        Hospital.prototype.addPacientes = function (paciente) {
            this._pacientes.push(paciente);
        };
        return Hospital;
    }());
    hospital.Hospital = Hospital;
})(hospital || (hospital = {}));

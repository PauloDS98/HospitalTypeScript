///<reference path="Paciente.ts"/>
///<reference path="Enfermeiro.ts"/>
///<reference path="Medico.ts"/>


namespace hospital{
    export class Hospital{
        private _nome:string;
        private _enfermeiros:Array<Enfermeiro> = [];
        private _medicos:Array<Medico> = [];
        private _pacientes:Array<Paciente> = [];

        public getNome(){
            return this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;           
        }

        public getEnfermeiros(){
            return this._enfermeiros;
        }

        public addEnfermeiro(enfermeiro:Enfermeiro){
            this._enfermeiros.push(enfermeiro);
        }

        public getMedico(){
            return this._medicos;
        }

        public addMedicos(medico:Medico){
            this._medicos.push(medico);
        }

        public getPacientes(){
            return this._pacientes;
        }

        public addPacientes(paciente:Paciente){
            this._pacientes.push(paciente)
        }

    }
}
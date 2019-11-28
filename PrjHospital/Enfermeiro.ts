///<reference path="Funcionario.ts"/>
namespace hospital{
    export class Enfermeiro extends Funcionario{
        private _Coren:number;

        public setCoren(Coren:number){
             this._Coren = Coren;
        }

        public getCoren(){
            return this._Coren
        }

    } 
}
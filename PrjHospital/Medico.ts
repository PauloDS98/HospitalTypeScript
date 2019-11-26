namespace hospital{
     export class Medico extends Funcionario{
         private _crm: number;
         private _especialidade: number;

         public setCrm(){
             return this._crm;
         }

         public getCrm(crm:number){
             this._crm = crm;
         }

         public setEspecialidade(){
             return this._especialidade;
         }

         public getEspecialidade(especialidade:number){
            this._especialidade = especialidade;
         }
}
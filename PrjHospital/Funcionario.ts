 namespace hospital{
     export class Funcionario extends Pessoa{
         private _codFuncionario:number;

         public getCodFuncionario(){
             return this._codFuncionario;

         }
        
         public setCodFuncionario(codFuncionario:number){
                this._codFuncionario = codFuncionario;
         }
     }
 }
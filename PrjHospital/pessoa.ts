namespace hospital{
    export abstract class Pessoa{
        private _nome:string;
        private _Cpf:string;

        public getNome(){
            return this._nome;
        }

        public setNome(nome:string){
            this._nome = nome;
        }

        public getCpf(){
            return this._Cpf;
        }

        public setCpf(Cpf:string){
            this._Cpf = Cpf;
        }

    }
}
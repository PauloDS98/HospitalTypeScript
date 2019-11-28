///<reference path="Paciente.ts"/>
///<reference path="Enfermeiro.ts"/>
///<reference path="Medico.ts"/>
///<reference path='Hospital.ts'/>
var hospital;
(function (hospital_1) {
    var hospital = new hospital_1.Hospital();
    hospital.setNome("Santa maria");
    var paciente = new hospital_1.Paciente();
    paciente.setNome("Paulo");
    paciente.setCpf("123.456.789-10");
    paciente.setCodPaciente(5);
    var paciente2 = new hospital_1.Paciente();
    paciente2.setNome("Victoria");
    paciente2.setCpf("109.876.543-21");
    paciente2.setCodPaciente(7);
    var paciente3 = new hospital_1.Paciente();
    paciente3.setNome("Bartholomeu");
    paciente3.setCpf("333.666.333-99");
    paciente3.setCodPaciente(6);
    var medico = new hospital_1.Medico();
    medico.setNome("Jussara");
    medico.setCpf("123.456.789-10");
    medico.setCrm(123456);
    medico.setEspecialidade("Endocrinologista");
    medico.setCodFuncionario(1);
    var medico2 = new hospital_1.Medico();
    medico2.setNome("Everty");
    medico2.setCpf("666.666.666-66");
    medico2.setCrm(666666);
    medico2.setEspecialidade("Cirurgião");
    medico2.setCodFuncionario(2);
    var medico3 = new hospital_1.Medico();
    medico3.setNome("DR. Marcos");
    medico3.setCpf("111.111.111-22");
    medico3.setCrm(111222);
    medico3.setEspecialidade("Ginecologista");
    medico3.setCodFuncionario(3);
    var enfermeiro = new hospital_1.Enfermeiro();
    enfermeiro.setNome("Joaquim");
    enfermeiro.setCpf("444.444.444-55");
    enfermeiro.setCoren(12345);
    enfermeiro.setCodFuncionario(1);
    var enfermeiro2 = new hospital_1.Enfermeiro();
    enfermeiro2.setNome("Matheus");
    enfermeiro2.setCpf("987.654.344-21");
    enfermeiro2.setCoren(54321);
    enfermeiro2.setCodFuncionario(2);
    var enfermeiro3 = new hospital_1.Enfermeiro();
    enfermeiro3.setNome("kayky");
    enfermeiro3.setCpf("654.467.676-21");
    enfermeiro3.setCoren(98765);
    enfermeiro3.setCodFuncionario(3);
    hospital.addPacientes(paciente);
    hospital.addPacientes(paciente2);
    hospital.addPacientes(paciente3);
    hospital.addMedicos(medico);
    hospital.addMedicos(medico2);
    hospital.addMedicos(medico3);
    hospital.addEnfermeiro(enfermeiro);
    hospital.addEnfermeiro(enfermeiro2);
    hospital.addEnfermeiro(enfermeiro3);
    var tbPaciente = document.getElementById("paciente");
    var conteudoP = "<tr><th>Paciente</th></tr><tr><td>Codigo</td><td>Nome</td><td>CPF</td></tr>";
    hospital.getPacientes().forEach(function (element) {
        conteudoP += "<tr> <td>" + element.getCodPaciente() + "</td><td>" + element.getNome() + "</td><td>" + element.getCpf() + "</td></tr>";
    });
    tbPaciente.innerHTML = conteudoP;
    var tbMedico = document.getElementById("medico");
    var conteudoM = "<tr><th>Medico</th></tr><tr><td>CRM</td><td>Nome</td><td>Especialidade</td></tr>";
    hospital.getMedico().forEach(function (element) {
        conteudoM += "<tr> <td>" + element.getCrm() + "</td><td>" + element.getNome() + "</td><td>" + element.getEspecialidade() + "</td></tr>";
    });
    tbMedico.innerHTML = conteudoM;
    var tbEnfermeiro = document.getElementById("enfermeiro");
    var conteudoE = "<tr><th>Enfermeiro</th></tr><tr><td>COREN</td><td>Nome</td></tr>";
    hospital.getEnfermeiros().forEach(function (element) {
        conteudoE += "<tr> <td>" + element.getCoren() + "</td><td>" + element.getNome() + "</td></tr>";
    });
    tbEnfermeiro.innerHTML = conteudoE;
})(hospital || (hospital = {}));

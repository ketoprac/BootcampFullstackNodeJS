export default class Employee {
  static totalEmployee = 0;

  constructor(firstName, lastName, salary=0, skill=[], status="permanent"){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.skill = skill;
    this.status = status;
    Employee.totalEmployee++;
  }

  ToString(){
    return `${this.firstName} ${this.lastName}, Gaji = ${this.salary}`
  }
}

class Contract extends Employee {
  constructor(firstName, lastName, salary=0, skill=[], status, extra){
    super(firstName, lastName, salary, skill, status)
    this.extra = extra;
  }
}

export {Contract};
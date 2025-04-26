// 6-Implementar una clase que simule el comportamiento de una Calculadora, con dos números y las cuatro operaciones básicas: suma resta, multiplicación y división. Todas la operaciones deben
// retornar un resultado, que luego va a ser mostrado por un método aparte. A su vez en las operaciones de multiplicación y división se debe validar que no se ingrese un valor igual a 0.
// Probar la calculadora con diferentes valores 
class Calculadora {
    constructor(private numero1: number, private numero2: number) {}
  
    sumar(): number {
      return this.numero1 + this.numero2;
    }
  
    restar(): number {
      return this.numero1 - this.numero2;
    }
  
    multiplicar(): number {
      if (this.numero1 === 0 || this.numero2 === 0) {
        throw new Error("No se puede multiplicar por cero");
      }
      return this.numero1 * this.numero2;
    }
  
    dividir(): number {
      if (this.numero2 === 0) {
        throw new Error("No se puede dividir por cero");
      }
      return this.numero1 / this.numero2;
    }
  }
  // probar
const calc = new Calculadora(13, 9);
console.log("Suma:", calc.sumar());
console.log("Resta:", calc.restar());
console.log("Multiplicación:", calc.multiplicar());
console.log("División:", calc.dividir());
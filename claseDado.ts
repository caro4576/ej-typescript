// 7-Implementar una clase  que simule el comportamiento de un dado de seis caras. La clase debe 
// tener un atributo que almacena el valor actual del dado (un número entre 1 y 6). A su vez la clase 
// cuenta con varios métodos.
// ● Método constructor que inicializa el dado con un valor aleatorio entre 1 y 6.
// ● Método que simula el lanzamiento del dado, asignando un nuevo valor aleatorio entre 1 y 6 al 
// atributo valor del dado
// ● Método que devuelve el valor actual del dado.
// Proba el funcionamiento del dado

export class Dado {
    private valor: number;
  
    constructor() {
      this.valor = this.lanzar();
    }
  
    lanzar(): number {
      this.valor = Math.floor(Math.random() * 6) + 1;
      return this.valor;
    }
  
    obtenerValor(): number {
      return this.valor;
    }
  }
  
  // Probar Dado
  const dado = new Dado();
  console.log("Valor inicial del dado:", dado.obtenerValor());
  dado.lanzar();
  console.log("Nuevo valor del dado:", dado.obtenerValor());
  
// 1- Plantear una clase Auto de la forma en que se vió en la clase → especificando variables internas y métodos.
//  Implementar en TypeScript

export class Auto {
    constructor(private marca: string, private modelo: string, private año: number) {}
  
    encender(): void {
      console.log(`${this.marca} ${this.modelo} está encendido.`);
    }
  
    apagar(): void {
      console.log(`${this.marca} ${this.modelo} está apagado.`);
    }
  
    mostrarDatos(): void {
      console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}`);
    }
  }

 // probar
 // Auto
const auto = new Auto("Chevrolet", "Agile", 2011);
auto.encender();
auto.mostrarDatos();
auto.apagar();


 


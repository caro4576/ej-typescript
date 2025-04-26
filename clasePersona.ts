// 2-Plantear una clase Persona, pensar que atributos y métodos puede tener e implementarla en Typescript.

export class Persona {
    constructor(public nombre: string, public edad: number, public dni: string) {}
  
    presentarse(): void {
      console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y mi DNI es ${this.dni}.`);
    }
  
    esMayorDeEdad(): boolean {
      return this.edad >= 18;
    }
  
    getNombre(): string {
      return this.nombre;
    }
  }
  
  // Probar Persona
  const persona = new Persona("Juan", 25, "12345678");
  persona.presentarse();
  console.log("¿Es mayor de edad?", persona.esMayorDeEdad());
  
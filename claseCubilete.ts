// 12-Usando la clase Dado del ejercicio 6, simular el comportamiento de un cubilete de 5 dados.
// Implementar los métodos necesarios para que se puedan lanzar todos los dados o algún dado o
// dados en particular.

import { Dado } from "./claseDado";  // Importamos la clase Dado

 export class Cubilete {
    private dados: Dado[] = [];
  
    constructor() {
      for (let i = 0; i < 5; i++) {
        this.dados.push(new Dado());
      }
    }
  
    lanzarTodos(): void {
      this.dados.forEach((dado) => dado.lanzar());
    }
  
    lanzarDados(indices: number[]): void {
      indices.forEach((i) => this.dados[i]?.lanzar());
    }
  
    obtenerValores(): number[] {
      return this.dados.map((dado) => dado.obtenerValor());
    }
  }
  
  // Probar Cubilete
  const cubilete = new Cubilete();
  cubilete.lanzarTodos();
  console.log("Valores de los dados:", cubilete.obtenerValores());
  
// 10-Usando la Clase automotor del ejercicio 1, implementar la clase Registro Automotor, 
// con métodos para:
// ●	Agregar un auto
// ●	Buscar un auto por patente
// ●	Eliminar o actualizar autos existentes
import { Auto } from "./claseAuto";

 class RegistroAutomotor {
    private autos: Auto[] = [];
  
    agregarAuto(auto: Auto): void {
      this.autos.push(auto);
    }
  
    buscarAuto(patente: string): Auto | undefined {
      return this.autos.find((a) => a["modelo"] === patente);
    }
  
    eliminarAuto(patente: string): void {
      this.autos = this.autos.filter((a) => a["modelo"] !== patente);
    }
  }

  // probar
  const registro = new RegistroAutomotor();
  registro.agregarAuto(new Auto("Agile", "Chevrolet", 2015));
  console.log("Auto encontrado:", registro.buscarAuto("Agile"));
  registro.eliminarAuto("Agile");
  console.log("Auto eliminado");

  


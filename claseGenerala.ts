// 14- Usando la Clase persona del Ejercicio 2 y la clase Cubilete del ejercicio anterior, implementar
// un juego de Generala. Esta Generala solo va a considerar puntos por obtener la siguientes
// marcas:
// • Escalera : 20 puntos
// • Full: 30 puntos
// • Poker: 40 puntos
// • Generala: 50 puntos
// En cada juego, cada jugador tiene 3 tiros y gana el jugador que tenga más puntos. En caso de que
// los 3 tiros ningún jugador haya hecho una marca, se declara empate. Implementar un método de
// desempate a su elección.
// En caso de ser necesario, modificar la clase persona para agregarle más atributo

import { Persona } from "./clasePersona";
import { Cubilete } from "./claseCubilete";

export class JuegoGenerala {
    constructor(private jugadores: Persona[]) {}
  
    jugar(): void {
      console.log("Comienza el juego de Generala");
      const cubilete = new Cubilete();
      const puntajes: { [key: string]: number } = {};
  
      for (const jugador of this.jugadores) {
        let mejorPuntaje = 0;
  
        for (let tiro = 1; tiro <= 3; tiro++) {
          cubilete.lanzarTodos();
          const valores = cubilete.obtenerValores();
          console.log(`Tirada ${tiro} de ${jugador.getNombre()}: [${valores.join(", ")}]`);
  
          const puntaje = this.evaluarTirada(valores);
          if (puntaje > mejorPuntaje) {
            mejorPuntaje = puntaje;
          }
        }
  
        puntajes[jugador.getNombre()] = mejorPuntaje;
        console.log(`Mejor puntaje de ${jugador.getNombre()}: ${mejorPuntaje}`);
      }
  
      this.determinarGanador(puntajes);
    }
  
    private evaluarTirada(valores: number[]): number {
      const conteo: { [key: number]: number } = {};
      valores.forEach((v) => (conteo[v] = (conteo[v] || 0) + 1));
  
      const cantidadValores = Object.values(conteo);
      const valoresUnicos = Object.keys(conteo).map(Number).sort((a, b) => a - b);
  
      if (cantidadValores.includes(5)) return 50; // Generala
      if (cantidadValores.includes(4)) return 40; // Poker
      if (cantidadValores.includes(3) && cantidadValores.includes(2)) return 30; // Full
      if (
        valoresUnicos.join() === "1,2,3,4,5" ||
        valoresUnicos.join() === "2,3,4,5,6"
      ) return 20; // Escalera
  
      return 0; // Ninguna jugada especial
    }
  
    private determinarGanador(puntajes: { [key: string]: number }): void {
      const maxPuntaje = Math.max(...Object.values(puntajes));
      const ganadores = Object.keys(puntajes).filter(
        (jugador) => puntajes[jugador] === maxPuntaje
      );
  
      if (maxPuntaje === 0) {
        console.log("Empate, ningún jugador hizo una marca especial.");
      } else if (ganadores.length === 1) {
        console.log(`El ganador es: ${ganadores[0]} con ${maxPuntaje} puntos.`);
      } else {
        console.log(`Empate entre: ${ganadores.join(" y ")} con ${maxPuntaje} puntos.`);
        console.log("Desempate: gana el primero en lograr la marca.");
        console.log(`Ganador: ${ganadores[0]}`);
      }
    }
  }
  
  // Probar JuegoGenerala
  const jugadores = [
    new Persona("Ana", 25, "12345678"),
    new Persona("Luis", 30, "87654321")
  ];
  const juego = new JuegoGenerala(jugadores);
  juego.jugar();
  
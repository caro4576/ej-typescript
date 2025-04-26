// 3-Implementar la clase Televisor con todos los atributos y métodos, como se vio en clase,
//  incluido la funcionalidad mute.
class Televisor {
    private volumen: number = 10;
    private canal: number = 1;
    private estaEncendido: boolean = false;
    private estaMuteado: boolean = false;
  
    constructor(private marca: string, private tamaño: number) {}
  
    encender(): void {
      this.estaEncendido = true;
      console.log("Televisor encendido.");
    }
  
    apagar(): void {
      this.estaEncendido = false;
      console.log("Televisor apagado.");
    }
  
    subirVolumen(): void {
      if (!this.estaMuteado && this.volumen < 100) this.volumen++;
    }
  
    bajarVolumen(): void {
      if (!this.estaMuteado && this.volumen > 0) this.volumen--;
    }
  
    cambiarCanal(canal: number): void {
      if (canal > 0) this.canal = canal;
    }
  
    mute(): void {
      this.estaMuteado = !this.estaMuteado;
    }
}


//probar
const tv = new Televisor("Samsung", 42);
tv.encender();
tv.mute();
tv.cambiarCanal(5);
tv.apagar();

// 9- Implementar una clase Decodificador y relacionarla con la clase Televisor del ejercicio 2.

class Decodificador {
    constructor(private televisor: Televisor) {}
  
    cambiarCanal(canal: number): void {
      this.televisor.cambiarCanal(canal);
    }
  }

//probar
const deco = new Decodificador(tv);
deco.cambiarCanal(10);
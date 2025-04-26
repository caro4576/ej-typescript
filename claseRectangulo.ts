// 4-Crea una clase llamada Rectangulo que represente. Esta clase debe tener:

// •	Un constructor que reciba dos parámetros: ancho y altura.

// •	Métodos para calcular el área y el perímetro del rectángulo.

// •	El método calcular_area() debe retornar el área del rectángulo (ancho * altura).

// •	El método calcular_perimetro() debe retornar el perímetro del rectángulo (2 * (ancho +altura)).

// Una vez definida la clase Rectangulo, crea una instancia de esta clase con un ancho de 5 unidades y una altura de 10 unidades. Luego,

// utiliza los métodos de la clase para calcular el área y el perímetro del rectángulo creado e imprime los resultados. 

class Rectangulo {
    constructor(private ancho: number, private altura: number) {}
  
    calcularArea(): number {
      return this.ancho * this.altura;
    }
  
    calcularPerimetro(): number {
      return 2 * (this.ancho + this.altura);
    }
  }
// probar
const rect = new Rectangulo(5, 10);
console.log("Área del rectángulo:", rect.calcularArea());
console.log("Perímetro del rectángulo:", rect.calcularPerimetro());
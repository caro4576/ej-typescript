// 5-Implementar una clase llamada Libro que contenga los siguientes atributos: ISBN, Título, Autor,
// Número de páginas. La clase debe tener un método para cargar un libro pidiendo los datos al usuario y luego informar mediante otro método el número de ISBN, el título, el autor del
// libro y el número de páginas. Crear dos o tres instancias de la Clase e implementar ambos  métodos.

 export class Libro {
    constructor(
      private isbn: string,
      private titulo: string,
      private autor: string,
      private numeroPaginas: number
    ) {}
  
    mostrarInformacion(): void {
      console.log(`ISBN: ${this.isbn}`);
      console.log(`Título: ${this.titulo}`);
      console.log(`Autor: ${this.autor}`);
      console.log(`Páginas: ${this.numeroPaginas}`);
    }
  }

  const libro = new Libro("4526", "Manifiesto para los heroes de cada dia ", "Robin Sharma", 460);
  libro.mostrarInformacion();

  

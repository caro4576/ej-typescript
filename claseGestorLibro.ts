// 13- Usando la clase libro del ejercicio 5, simular el funcionamiento de un sistema para gestionar una colección de libros, permitiendo realizar las operaciones básicas: alta, baja, modificación y
// consulta.
// La clase Gestor de Libros debe permitir realizar las siguientes acciones:
// • Insertar un libro: agregar un nuevo libro a la colección. • Consultar un libro: buscar un libro y mostrar sus datos.
// • Modificar un libro: cambiar los datos de un libro ya existente (por ejemplo: autor, año, etc.).
// • Eliminar un libro: realizar una baja lógica, es decir, el libro no se borra definitivamente, sino que se marca como inactivo o dado de baja.
// Consideraciones importantes:
// • Antes de realizar cualquier operación (incluso insertar), se debe verificar si el libro ya existe en la colección.
// • El estado de cada libro (activo o dado de baja) debe formar parte de la clase Libro 

  import { Libro } from "./claseLibro";
class GestorLibros {
    private libros: Libro[] = [];
  
    insertarLibro(libro: Libro): void {
      if (!this.libros.find(l => l["isbn"] === libro["isbn"])) {
        this.libros.push(libro);
      }
    }
  
    consultarLibro(isbn: string): Libro | undefined {
      return this.libros.find(l => l["isbn"] === isbn);
    }
  
    modificarLibro(isbn: string, nuevoAutor: string): void {
      const libro = this.consultarLibro(isbn);
      if (libro) {
        (libro as any)["autor"] = nuevoAutor;
      }
    }
  
    eliminarLibro(isbn: string): void {
      this.libros = this.libros.filter(l => l["isbn"] !== isbn);
    }
  }

const gestor = new GestorLibros();
const libro = new Libro("4526", "Mi Libro", "Autor Original", 200);
gestor.insertarLibro(libro);
console.log("Consultar libro:", gestor.consultarLibro("4526"));
gestor.modificarLibro("4526", "Autor Modificado");
console.log("Libro modificado:", gestor.consultarLibro("4526"));
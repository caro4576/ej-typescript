// 11-Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
// Los profesores deben tener un listado de sus alumnos, Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7).
// La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.
class Alumno {
    constructor(public nombre: string, private nota: number) {}
  
    estaAprobado(): boolean {
      return this.nota >= 7;
    }
  }
  
  class Profesor {
    private alumnos: Alumno[] = [];
  
    agregarAlumno(alumno: Alumno): void {
      this.alumnos.push(alumno);
    }
  
    listarAlumnos(): Alumno[] {
      return this.alumnos;
    }
  }
  
  class Escuela {
    private alumnos: Alumno[] = [];
    private profesores: Profesor[] = [];
  
    matricularAlumno(alumno: Alumno): void {
      this.alumnos.push(alumno);
    }
  
    contratarProfesor(profesor: Profesor): void {
      this.profesores.push(profesor);
    }
  
    expulsarAlumno(nombre: string): void {
      this.alumnos = this.alumnos.filter(a => a.nombre !== nombre);
    }
  
    despedirProfesor(profesor: Profesor): void {
      this.profesores = this.profesores.filter(p => p !== profesor);
    }
  }

  // probar
const alumno = new Alumno("Pedro", 8);
const profe = new Profesor();
profe.agregarAlumno(alumno);
const escuela = new Escuela();
escuela.matricularAlumno(alumno);
escuela.contratarProfesor(profe);
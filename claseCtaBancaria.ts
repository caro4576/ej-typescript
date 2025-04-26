// 8-Implementar a una clase que represente una cuenta bancaria, con dos atributos: Número de cuenta y Saldo actual. Implementa los siguientes métodos:
// Un constructor que me permita establecer el número de cuenta y el saldo,Un método que incremente el saldo.
// Un método que disminuya el saldo si hay fondos suficientes, caso contrario no hace nada,Un método que devuelva el saldo actual 
class CuentaBancaria {
    constructor(private numeroCuenta: string, private saldo: number) {}
  
    depositar(monto: number): void {
      this.saldo += monto;
    }
  
    retirar(monto: number): void {
      if (monto <= this.saldo) this.saldo -= monto;
    }
  
    obtenerSaldo(): number {
      return this.saldo;
    }
  }

// probar
const cuenta = new CuentaBancaria("001", 1000);
cuenta.depositar(500);
cuenta.retirar(200);
console.log("Saldo actual:", cuenta.obtenerSaldo());
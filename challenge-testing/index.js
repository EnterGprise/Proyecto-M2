class CarritoCompra {
  // Aquí tu código:
  constructor() {
    this.productos = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  calcularTotal() {
    let total = 0;
    for(let producto of this.productos) {
      total += producto.precio;
    }
    return total;
  }

  aplicarDescuento(porcentaje) {
    if(porcentaje < 0 || porcentaje > 100) {
      return "El descuento debe ser entre 0 y 100%";
    }
    const total = this.calcularTotal(); //* 30
    //* totalConDescuento = total * (porcentaje / 100)
    const totalConDescuento = total * (porcentaje / 100);
    return totalConDescuento;
  }
}

module.exports = CarritoCompra;
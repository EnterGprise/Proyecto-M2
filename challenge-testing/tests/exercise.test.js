const CarritoCompra = require("../index.js");

describe("Clase CarritoCompra", () => {

  const carrito = new CarritoCompra();
  // console.log(carrito.productos); //* [ ]
  const producto1 = { nombre: "Producto1", precio: 10 };
  const producto2 = { nombre: "Producto2", precio: 20 };
  
  it("CarritoCompra es una clase", () => {
    expect(typeof CarritoCompra).toBe("function");
  });

  it("CarritoCompra inicia con la propiedad productos como array vacío", () => {
    expect(Array.isArray(carrito.productos)).toBe(true);
    expect(carrito.productos).toHaveLength(0);
  });

  it("agregarProducto agrega productos al carrito", () => {
    //* carrito.productos = [ { nombre: "Producto1", precio: 10 } ]
    carrito.agregarProducto(producto1);
    expect(carrito.productos).toHaveLength(1);
    expect(carrito.productos[0]).toEqual(producto1);
    //* carrito.productos = [
    //*  { nombre: "Producto1", precio: 10 },
    //*  { nombre: "Producto2", precio: 20 }
    //* ]
    carrito.agregarProducto(producto2);
    expect(carrito.productos).toHaveLength(2);
    expect(carrito.productos[1]).toEqual(producto2);
  });

  it("calcularTotal calcula el total de la compra", () => {
    expect(carrito.calcularTotal()).toBe(30);
  });

  it("aplicarDescuento aplica el descuento definido", () => {
    expect(carrito.aplicarDescuento(0)).toBe(30);
    expect(carrito.aplicarDescuento(50)).toBe(15);
    expect(carrito.aplicarDescuento(100)).toBe(0);
  });

  it("aplicarDescuento da error al pasar descuento mayor a 100", () => {
    expect(carrito.aplicarDescuento(150)).toBe("El descuento debe ser entre 0 y 100%");
  });

});
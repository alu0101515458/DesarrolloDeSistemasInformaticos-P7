import "mocha";
import { expect } from "chai";
import { Adapter } from "../src/Adapter";
import { Complex } from "../src/Complex";
import { Rational } from "../src/Rational";

// Pruebas para Adapter
describe("Adapter", function() {
  // Test 1
  it("Debería convertir un Rational en un Complex correctamente", function() {
    const rational = new Rational(1, 2);
    const adapted = Adapter.getInstance(rational);
    expect(adapted.getReal()).to.equal(0.5);
    expect(adapted.getImaginary()).to.equal(0);
  });

  // Test 2
  it("Debería sumar un Rational a un Complex correctamente", function() {
    const rational = new Rational(1, 2);
    const complex = new Complex(2, 3);
    const adaptedRational = Adapter.getInstance(rational);
    const result = adaptedRational.add(complex);
    expect(result.getReal()).to.equal(2.5);
    expect(result.getImaginary()).to.equal(3);
  });

  // Test 3
  it("Debería restar un Rational a un Complex correctamente", function() {
    const rational = new Rational(3, 2);
    const adapted = Adapter.getInstance(rational);
    const complex = new Complex(1, 2);
    const result = adapted.subtract(complex);
    expect(result.getReal()).to.equal(-0.5);
    expect(result.getImaginary()).to.equal(-2);
  });

  // Test 4
  it("Debería multiplicar un Rational a un Complex correctamente", function() {
    const rational = new Rational(1, 2);
    const adapted = Adapter.getInstance(rational);
    const complex = new Complex(1, 2);
    const result = adapted.multiply(complex);
    expect(result.getReal()).to.equal(0.5);
    expect(result.getImaginary()).to.equal(1);
  });

  // Test 5
  it("Debería dividir un Rational a un Complex correctamente", function() {
    const rational = new Rational(1, 2);
    const adapted = Adapter.getInstance(rational);
    const complex = new Complex(1, 2);
    const result = adapted.divide(complex);
    expect(result.getReal()).to.equal(0.1);
    expect(result.getImaginary()).to.equal(-0.2);
  });

  // Test 6
  it("Si se intenta convertir un Rational en un Complex dos veces, debería devolver la misma instancia", function() {
    const rational = new Rational(1, 2);
    const adapted1 = Adapter.getInstance(rational);
    const adapted2 = Adapter.getInstance(rational);
    expect(adapted1).to.equal(adapted2);
  });

  // Test 7
  it("Si se convierten dos Rational diferentes en Complex, deberían devolver la misma instancia", function() {
    const rational1 = new Rational(1, 2);
    const rational2 = new Rational(3, 4);
    const adapted1 = Adapter.getInstance(rational1);
    const adapted2 = Adapter.getInstance(rational2);
    expect(adapted1).to.equal(adapted2);
  });
});

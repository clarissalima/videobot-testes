// tests/unit/somar.test.js
import { describe, it, expect } from 'vitest';
import { somar } from '../../utils/somar';


describe('Função Somar', () => {
  it('deve somar dois números corretamente', () => {
    expect(somar(2, 3)).toBe(5);
  });

  it('deve somar números negativos corretamente', () => {
    expect(somar(-2, -3)).toBe(-5);
  });

  it('deve somar um número positivo e um negativo corretamente', () => {
    expect(somar(2, -3)).toBe(-1);
  });
});

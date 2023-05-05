import { Category } from './category.entity';
import { Income } from './income.entity';
import { match } from 'fp-ts/Either';

describe('Income Entity suite test', () => {

  it('Should return a valid income entity', () => {
    // Given
    const category = new Category({
      id: 'uuid',
      name: 'category'
    });

    const data = {
      id: 'hash_id',
      value: 250,
      date: new Date(),
      category: category,
      description: 'Salário',
      createdAt: new Date()
    }

    // When
    const income = new Income(data);

    // Then
    expect(income.id).toBe(data.id);
    expect(income.value).toBe(data.value);
    expect(income.date).toBe(data.date);
    expect(income.description).toBe(data.description);
    expect(income.createdAt).toBe(data.createdAt);
  });

  it('Should return a income entity with props undefined', () => {
    // When
    const income = new Income(null);

    // Then
    expect(income.toJson()).toBeDefined();
    expect(income.id).toBeUndefined();
    expect(income.value).toBeUndefined();
    expect(income.date).toBeUndefined();
    expect(income.category).toBeUndefined();
    expect(income.description).toBeUndefined();
    expect(income.createdAt).toBeUndefined();
  });

  it.only('Should invalidate Income entity', () => {
    const category = new Category({
      id: 'uuid',
      name: 'category'
    });

    const data = {
      id: 'uuid',
      value: 250,
      date: new Date(),
      category: category,
      description: 'Salário',
      createdAt: new Date()
    }

    const validIncome = new Income(data);
    const invalidIncome = new Income(null);

    expect((invalidIncome.isValid() as string[]).length).toBeGreaterThan(0);
    expect(validIncome.isValid()).toBe(true);
  });
});
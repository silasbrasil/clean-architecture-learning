import { Income } from './income.entity';

describe('Income Entity suite test', () => {

  it('Should return a valid income entity', () => {
    // Given
    const data = {
      id: 'hash_id',
      value: 250,
      date: new Date(),
      description: 'Salário',
      createdAt: new Date()
    }

    // When
    const income = Income.create(data);

    // Then
    expect(income.id).toBe(data.id);
    expect(income.value).toBe(data.value);
    expect(income.date).toBe(data.date);
    expect(income.description).toBe(data.description);
    expect(income.createdAt).toBe(data.createdAt);
  });

  it('Should return a income entity with props undefined', () => {
    // When
    const income = Income.create(null);

    // Then
    expect(income.toJson()).toBeDefined();
    expect(income.id).toBeUndefined();
    expect(income.value).toBeUndefined();
    expect(income.date).toBeUndefined();
    expect(income.description).toBeUndefined();
    expect(income.createdAt).toBeUndefined();
  });

  it('Should return a income entity', () => {
    
  });
});
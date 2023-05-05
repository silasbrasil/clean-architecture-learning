import { Category } from "./category.entity";

describe('Category Entity suite test', () => {
  it('Should return a valid Category entity', () => {
    // Given
    const data = {
      id: 'uuid',
      name: 'category'
    }

    // When
    const category = new Category(data);

    // Then
    expect(category.id).toBeDefined();
    expect(category.name).toBeDefined();
  });

  it('Should return a income entity with props undefined', () => {
    // When
    const category = new Category(null);

    // Then
    expect(category).toBeDefined();
    expect(category.id).toBeUndefined();
    expect(category.name).toBeUndefined();
  });
});

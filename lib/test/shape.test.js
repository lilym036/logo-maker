const Shape= require('../shape');

  describe('Initialize shapeColor', () => {
    it('should set shapeColor properly', () => {
      const shapeColor = 'blue';
      const shape = new Shape(shapeColor);

      expect(shape.shapeColor).toBe(shapeColor);
    });
  });
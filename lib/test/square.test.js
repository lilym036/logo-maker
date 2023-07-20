const Square= require('../square');

  describe('Initialize shapeColor', () => {
    it('should set shapeColor properly', () => {
      const shapeColor = 'blue';
      const square = new Square(shapeColor);

      expect(square.shapeColor).toBe(shapeColor);
    });
  });
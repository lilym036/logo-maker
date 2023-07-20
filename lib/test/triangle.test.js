const Triangle= require('../triangle');

  describe('Initialize shapeColor', () => {
    it('should set shapeColor properly', () => {
      const shapeColor = 'blue';
      const triangle= new Triangle(shapeColor);

      expect(triangle.shapeColor).toBe(shapeColor);
    });
  });

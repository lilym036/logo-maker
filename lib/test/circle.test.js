const Circle= require('../circle');

  describe('Initialize shapeColor', () => {
    it('should set shapeColor properly', () => {
      const shapeColor = 'blue';
      const circle = new Circle(shapeColor);

      expect(circle.shapeColor).toBe("blue");
    });
  });
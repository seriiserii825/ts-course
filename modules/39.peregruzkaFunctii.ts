export default function functionOverloading() {
  type TSquare = {
    aside: number;
    area: number;
  };
  type TRectangle = {
    length: number;
    width: number;
    area: number;
  };

  function calculateArea(side: number): TSquare;
  function calculateArea(a: number, b: number): TRectangle;
  function calculateArea(a: number, b?: number): TSquare | TRectangle {
    if (b === undefined) {
      const area = a * a;
      return { aside: a, area };
    } else {
      const area = a * b;
      return { length: a, width: b, area };
    }
  }

  const square = calculateArea(4);
  const rectangle = calculateArea(4, 5);
}

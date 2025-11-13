export default function returnType() {
  function calculate(a: number, b: number): number {
    return a + b;
  }
  type CalculateReturnType = ReturnType<typeof calculate>;
  const result: CalculateReturnType = 4;
  
  type CalculateParams = Parameters<typeof calculate>;
}

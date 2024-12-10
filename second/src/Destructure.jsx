const Destructure = ({ a, b }) => {
  // Perform calculations
  const add = a + b;
  const sub = a - b;
  const mul = a * b;
  const div = a / b;

  // Store results in an array
  const calculation = [add, sub, mul, div];

  return (
    <div>
      {calculation.map((result, index) => (
        <p key={index}>{result}</p> // Render each result as a paragraph
      ))}
    </div>
  );
};

export default Destructure;

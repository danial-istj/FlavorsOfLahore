const beverages = [
  "Fresh Lime Soda - Rs. 180",
  "Mango Shake - Rs. 250",
  "Cold Coffee - Rs. 300",
];

const Beverages = () => {
  return (
    <>
      <h2>Beverages</h2>
      <ol>
        {beverages.map((drink, index) => (
          <li key={index}>{drink}</li>
        ))}
      </ol>

      <hr />
    </>
  );
};

export default Beverages;

const starters = [
  "Chicken Corn Soup - Rs. 350",
  "Vegetable Samosa (2 pcs) - Rs. 200",
  "Chicken Cheese Balls (6 pcs) - Rs. 400",
];

const Starters = () => {
  return (
    <>
      <h2>Starters</h2>
      <ul>
        {starters.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Starters;

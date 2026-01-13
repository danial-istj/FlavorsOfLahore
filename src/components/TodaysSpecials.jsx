const TodaysSpecials = () => {
  return (
    <>
      <h2>Today's Specials</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Dish</th>
            <th>Price (Rs.)</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Chicken Handi</td>
            <td>850</td>
            <td>★★★★★</td>
          </tr>
          <tr>
            <td>Mutton Biryani</td>
            <td>900</td>
            <td>★★★★☆</td>
          </tr>
          <tr>
            <td>Seekh Kebab</td>
            <td>500</td>
            <td>★★★★☆</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TodaysSpecials;

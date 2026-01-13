const mainCourses = [
  { dish: "Chicken Karahi", category: "Desi", price: 850, rating: "★★★★★" },
  { dish: "Mutton Biryani", category: "Rice", price: 900, rating: "★★★★☆" },
  { dish: "Beef Seekh Kebab", category: "BBQ", price: 600, rating: "★★★★☆" },
  { dish: "Chicken Handi", category: "Desi", price: 850, rating: "★★★★★" },
];

const MainCourseTable = () => {
  return (
    <>
      <h2>Main Course</h2>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Dish</th>
            <th>Category</th>
            <th>Price (Rs.)</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {mainCourses.map((item, index) => (
            <tr key={index}>
              <td>{item.dish}</td>
              <td>{item.category}</td>
              <td>{item.price}</td>
              <td>{item.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default MainCourseTable;

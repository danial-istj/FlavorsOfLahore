const BranchesTable = () => {
  return (
    <>
      <h2>Our Branches</h2>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Branch Name</th>
            <th>Location</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Main Branch</td>
            <td>MM Alam Road, Lahore</td>
            <td>042-1234567</td>
          </tr>
          <tr>
            <td>Johar Town Branch</td>
            <td>Emporium Mall, Lahore</td>
            <td>042-7654321</td>
          </tr>
          <tr>
            <td>Gulberg Branch</td>
            <td>Liberty Market, Lahore</td>
            <td>042-9876543</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default BranchesTable;

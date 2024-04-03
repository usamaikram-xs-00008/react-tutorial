function Table() {
  return (
    <>
      <h3>Employees</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Designation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Ayaz Qaiser</td>
            <td>CEO</td>
          </tr>
          <tr>
            <th>2</th>
            <td>Usama Ikram</td>
            <td>Software Engineer</td>
          </tr>
          <tr>
            <th>3</th>
            <td>Amir Sohail</td>
            <td>Principle Software Engineer</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Table;

import "./../styles/table.css";

const Header = () => {
  return (
    <div>
      <h1>FORM NO. 12BB</h1>
      <p>[See rule 26C]</p>
      <h3>
        Statement showing particulars of claims by an employee for deduction of
        tax under section 192
      </h3>
      <p>
        <ol>
          <li>
            Name and address of the employee:{" "}
            <input type="text" name="name" id="name" placeholder="name" />{" "}
            <input
              type="text"
              name="address"
              id="sddress"
              placeholder="address"
            />{" "}
          </li>
          <li>
            <span>
              <select>
                <option>Permanent Account Number</option>
                <option>Aadhaar Number</option>
              </select>
            </span>{" "}
            of the employee:{" "}
            <input
              type="text"
              name="number"
              id="number"
              placeholder="enter the number here"
            />
          </li>
          <li>
            . Financial year:{" "}
            <input
              type="text"
              name="year"
              id="year"
              placeholder="financial year"
            />
          </li>
        </ol>
      </p>
    </div>
  );
};

export default Header;

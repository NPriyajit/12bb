import "./../styles/table.css";

const Footer = () => {
  return (
    <div className="footer m-16 text-left">
      <p>
        I{" "}
        <input
          type="text"
          name=""
          id=""
          className="input"
          placeholder="yout name"
        />
        ,son/daughter of{" "}
        <input
          type="text"
          name=""
          id=""
          className="input"
          placeholder="parent's name"
        />{" "}
        do hereby certify that the information given above is complete and
        correct.
      </p>
      <div className="flex flex-row justify-start space-x-[64rem] text-left pt-4">
        <div>
          <p>Place</p>
          <p>Date</p>
          <p>Designation</p>
        </div>
        <div>
          <p>(Signature of the employee)</p>
          <p>Full Name:</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

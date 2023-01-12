import "./../styles/table.css";
import Modal from "./modal";
import jsPDF from "jspdf";

const Table = () => {
  const downloadPdf = () => {
    var doc = new jsPDF("p", "pt", "a4");
    doc.autoTable({
      html: "#myTable",
      theme: "grid",
      tableWidth: "auto",
      margins: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
      //   columnStyles: {
      //     0: { cellWidth: 20 },
      //     1: { cellWidth: 40 },
      //     2: { cellWidth: 40 },
      //     3: { cellWidth: 40 },
      //     4: { cellWidth: 40 },
      //     5: { cellWidth: 40 },
      //     6: { cellWidth: 40 },
      //     7: { cellWidth: 40 },
      //     8: { cellWidth: 40 },
      //   },
      styles: {
        fontSize: 7,
        cellPadding: 4,
        halign: "center",
      },
    });
    doc.save("12bb.pdf");
  };
  return (
    <div>
      <table
        className="table-auto border-collapse border border-black"
        id="myTable"
      >
        <tbody>
          <tr>DETAILS OF CLAIMS AND EVIDENCE THEREOF</tr>
          <tr>
            <td className="border border-slate-700">Sl. No.</td>
            <td className="border border-slate-700">Nature of claim</td>
            <td className="border border-slate-700">Amount (Rs.)</td>
            <td className="border border-slate-700">Evidence/particulars</td>
          </tr>
          <tr>
            <td className="border border-slate-700">(1)</td>
            <td className="border border-slate-700">(2)</td>
            <td className="border border-slate-700">(3)</td>
            <td className="border border-slate-700">(4)</td>
          </tr>
          <tr>
            <td className="border border-slate-700">1. </td>
            <td className="border border-slate-700">
              <p>House Rent Allowance:</p>
              <p>(i) Rent paid to the landlord</p>
              <p>(ii) Name of the landlord</p>
              <p> (iii) Address of the landlord</p>
              <p>
                (iv)
                <select>
                  <option>Permanent Account Number</option>
                  <option>Aadhaar Number</option>
                </select>{" "}
                of the landlord
              </p>{" "}
              <br />
              <p>
                Note : [Permanent Account Number or Aadhaar Number] shall be
                furnished if the aggregate rent paid during the previous year
                exceeds one lakh rupees
              </p>
            </td>
            <td className="border border-slate-700">
              <p></p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
            </td>
            <td className="border border-slate-700">
              <p></p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
            </td>
          </tr>
          <tr>
            <td className="border border-slate-700">2.</td>
            <td className="border border-slate-700">
              Leave travel concessions or assistance
            </td>
            <td className="border border-slate-700">
              <input type="text" placeholder="enter amount" />
            </td>
            <td className="border border-slate-700">
              <input type="text" placeholder="enter amount" />
            </td>
          </tr>
          <tr>
            <td className="border border-slate-700">3.</td>
            <td className="border border-slate-700">
              <p>Deduction of interest on borrowing:</p>
              <p>(i) Interest payable/paid to the lender</p>
              <p>(ii) Name of the lender</p>
              <p>(iii) Address of the lender</p>
              <p>
                [Permanent Account Number or Aadhaar Number] of the lender{" "}
                <ol>
                  <li>Financial Institutions (if available)</li>
                  <li>Employer (if available)</li>
                  <li>
                    Others
                    <span>
                      <input type="text" placeholder="write here" />
                    </span>
                  </li>
                </ol>
              </p>
            </td>
            <td className="border border-slate-700">
              <p></p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p></p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
            </td>
            <td c>
              <p></p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p></p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
              <p>
                <input type="text" placeholder="enter amount" />
              </p>
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td>
              <p>Deduction under Chapter VI-A</p>
              <p>(A) Sections 80C, 80CCC and 80CCD</p>
              <ol>
                <li className="flex flex-row">
                  Section 80C{" "}
                  <span>
                    {" "}
                    <Modal />
                  </span>
                </li>
              </ol>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div>
        <button onClick={downloadPdf} className="bg-blue-600" text="white">
          download
        </button>
      </div>
    </div>
  );
};

export default Table;

import React, { useState } from "react";
import "./../styles/table.css";

const Modal = () => {
  const [checked, setChecked] = useState([]);

  // const handleCheck = (e) => {
  //   var updatedList = [...checked];
  //   if (e.target.checked) {
  //     updatedList = [...checked, e.target.value];
  //   } else {
  //     updatedList.splice(checked.indexOf(e.target.value), 1);
  //   }
  //   setChecked(updatedList);
  // };

  const checkList = [
    "5 years if fixed deposit",
    "child tuition fees",
    "deposit in naional savings certificate",
    "deposit in naional savings schemes",
  ];

  const checkedItems = checked.map((items) => {
    return (
      <table>
        <tbody>
          <tr>
            <td>{items}</td>
            <td>
              <input type="text" />
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    );
  });

  console.log(checkedItems);

  const isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";

  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-row">
      <button
        className="bg-gray-200 text-black ml-4 mr-1 mb-1 h-8"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto text-left">
                  {checkList.map((item, index) => (
                    <div key={index}>
                      <input
                        value={item}
                        type="checkbox"
                        onChange={(e) => {
                          var updatedList = [...checked];
                          if (e.target.checked) {
                            updatedList = [...checked, e.target.value];
                          } else {
                            updatedList.splice(
                              checked.indexOf(e.target.value),
                              1
                            );
                          }
                          setChecked(updatedList);
                        }}
                      />
                      <span className={isChecked(item)}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}

      <table>
        <tbody>
          <tr>
            <td>{checkedItems}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Modal;

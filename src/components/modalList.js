import "./modal";
import "./../styles/table.css";

const ModalList = () => {
  function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  return (
    <div className="modalList">
      <ol>
        <li id="bike20">I have a bike</li>
        <li id="car20">I have a car</li>
        <li id="scooter20">I have a scooter</li>
        <li id="cycle20">I have a cycle</li>
      </ol>
    </div>
  );
};

export default ModalList;

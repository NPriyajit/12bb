import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Table from "./components/table";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function App() {
  const downloadPdf = () => {
    var doc = new jsPDF();
    autoTable(doc, "#app");
    doc.save("table.pdf");
  };
  return (
    <div className="App" id="app">
      <Header />
      <Table />
      <Footer />
      <div>
        <button onClick={downloadPdf} className="bg-blue-600" text="white">
          download
        </button>
      </div>
    </div>
  );
}

export default App;

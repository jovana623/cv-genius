import "../../styles/components/DownloadButton.scss";
import { TfiDownload } from "react-icons/tfi";
import { useSelector } from "react-redux";
import html2pdf from "html2pdf.js";

function DownloadButton() {
  const { firstName, lastName } = useSelector((state) => state.contact);

  function handleDownload() {
    const element = document.getElementById("resume");

    html2pdf(element, {
      margin: 0,
      filename: `${firstName} ${lastName}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 20 },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
        fontSize: 18,
      },
    });
  }

  return (
    <button className="download_btn" onClick={handleDownload}>
      <p>
        <TfiDownload />
      </p>
      <p>Download</p>
    </button>
  );
}
export default DownloadButton;

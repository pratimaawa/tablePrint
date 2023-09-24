const App = () => {
  const onClick = () => {
    // Create a new workbook
    const wb = window.XLSX.utils.book_new();
    console.log(window.XLSX);
    // Get the table element you want to export
    const table = document.getElementById("table");

    // Convert the table to a worksheet
    const ws = window.XLSX.utils.table_to_sheet(table);

    // Add the worksheet to the workbook
    window.XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    // Create a blob from the workbook
    const excelData = window.XLSX.write(wb, {
      bookType: "xlsx",
      type: "buffer",
    });
    // Create a Blob object from the ArrayBuffer
    const blob = new Blob([excelData], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    window.saveAs(blob, "table_data.xlsx");
    // Trigger the download
  };
  return (
    <>
      <button onClick={() => onClick()}>Dowload as excel</button>
      <table id="table" border="1">
        <tr>
          <td>
            <table border="1">
              <tr>
                <td>Inner Table 1</td>
                <td>Inner Table 2</td>
              </tr>
              <tr>
                <td>Inner Table 3</td>
                <td>Inner Table 4</td>
              </tr>
            </table>
          </td>
          <td>
            <table border="1">
              <tr>
                <td>Inner Table 5</td>
                <td>Inner Table 6</td>
              </tr>
              <tr>
                <td>Inner Table 7</td>
                <td>Inner Table 8</td>
              </tr>
            </table>
          </td>
          <td>
            <table border="1">
              <tr>
                <td>Inner Table 9</td>
                <td>Inner Table 10</td>
              </tr>
              <tr>
                <td>Inner Table 11</td>
                <td>Inner Table 12</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td>
            <table border="1">
              <tr>
                <td>Inner Table 13</td>
                <td>Inner Table 14</td>
              </tr>
              <tr>
                <td>Inner Table 15</td>
                <td>Inner Table 16</td>
              </tr>
            </table>
          </td>
          <td>
            <table border="1">
              <tr>
                <td>Inner Table 17</td>
                <td>Inner Table 18</td>
              </tr>
              <tr>
                <td>Inner Table 19</td>
                <td>Inner Table 20</td>
              </tr>
            </table>
          </td>
          <td>
            <table border="1">
              <tr>
                <td>Inner Table 21</td>
                <td>Inner Table 22</td>
              </tr>
              <tr>
                <td>Inner Table 23</td>
                <td>Inner Table 24</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </>
  );
};

export default App;

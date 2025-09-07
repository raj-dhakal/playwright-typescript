import { test, expect } from '@playwright/test';
import ExcelJS from 'exceljs';

async function excelTest() {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile("./exceldata.xlsx");
  const worksheet = workbook.getWorksheet("Sheet1");

  worksheet?.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => {
      if (cell.value === "Apple") {
        console.log("Row:", rowNumber);
        console.log("Column:", colNumber);
      }
    });
  });
}

test('Excel data check', async () => {
  await excelTest();
});




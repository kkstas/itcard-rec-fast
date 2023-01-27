const express = require("express");
const router = express.Router();
const PDFDocument = require("pdfkit");
const fs = require("fs");

router.get("/itcard", (req, res, next) => {
  // const stream = res.writeHead(200, {
  //   "Content-Type": "application/pdf",
  //   "Content-Disposition": "attachment;filename=invoice.pdf",
  // });
  const filePath = `${__dirname}/public/receipt-planetcash.pdf`;
  const stream = fs.createReadStream(filePath);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    'attachment; filename="planetcash-receipt.pdf"'
  );

  stream.pipe(res);

  // let text;
  // if (req.params.text) {
  //   text = req.params.text.toString();
  // }

  // const doc = new PDFDocument({ bufferPages: true, font: "Courier" });
  // doc.on("data", (chunk) => stream.write(chunk));
  // doc.on("end", () => stream.end());
  // doc.fontSize(25).text(`${text}\n asdf`);
  // doc.end();
});

module.exports = router;

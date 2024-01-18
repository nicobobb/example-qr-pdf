import PDFDocument from "pdfkit";

export function buildPDF(dataCallback, endCallback) {
    const doc = new PDFDocument({ size: "A4" });

    doc.on("data", dataCallback);
    doc.on("end", endCallback);

    doc.fontSize(24).text("This is a heading", {
        align: "center",
    });

    const datos = {
        numero: 1,
        nombre: "Mesa",
        categoria: "Living",
    };

    doc.fontSize(16).text(datos.nombre, 70, 150);
    doc.fontSize(16).text("Some title: From PDF Kit", 330, 150);

    doc.fontSize(16).text("Some title: From PDF Kit", 70, 200);
    doc.fontSize(16).text("Some title: From PDF Kit", 330, 200);

    doc.fontSize(16).text("Some title: From PDF Kit", 70, 250);
    doc.fontSize(16).text("Some title: From PDF Kit", 330, 250);

    doc.fontSize(16).text("Some title: From PDF Kit", 70, 300);
    doc.fontSize(16).text("Some title: From PDF Kit", 330, 300);

    doc.fontSize(16).text("Some title: From PDF Kit", 70, 350);
    doc.fontSize(16).text("Some title: From PDF Kit", 330, 350);

    doc.fontSize(16).text("Some title: From PDF Kit", 70, 400);
    doc.fontSize(16).text("Some title: From PDF Kit", 330, 400);

    doc.end();
}

import { Router } from "express";
import { buildPDF } from "../libs/pdfkit.js";
import QRCode from "qrcode";

const router = Router();

router.get("/qr", async (req, res) => {
    try {
        const opts = {
            errorCorrectionLevel: "H",
            margin: 1,
            color: {
                dark: "#000",
                light: "#fff",
            },
            width: 500,
        };
        const qr = await QRCode.toDataURL("Texto a poner en el QR", opts);
        res.send(`<img src="${qr}" alt="QR Code"/>`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});

router.get("/pdf", (req, res) => {
    const stream = res.writeHead(200, {
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=invoice.pdf",
    });

    buildPDF(
        (data) => stream.write(data),
        () => stream.end()
    );
});

export default router;

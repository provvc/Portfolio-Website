import fs from "fs";
import path from "path";

export async function exportPDF(data: String) {

    const compiledCSS = fs.readFileSync(path.join(process.cwd(), "public", "resume-styles.css"), "utf-8");

    const pdfEndpointResponse = await fetch("https://api.pdfendpoint.com/v1/convert", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.PDF_ENDPOINT_TOKEN}`,
        },
        body: JSON.stringify({ 
            html: data,
            css: `
                @import url('https://fonts.googleapis.com/css2?family=Jura:wght@300..700&display=swap');
                ${compiledCSS}
            `,
            sandbox: true,
            orientation: "vertical",
            page_size: "A4",
            margin_top: "1cm",
            margin_bottom: "1cm",
            margin_left: "1cm",
            margin_right: "1cm"
        }),
    });

    if (!pdfEndpointResponse.ok) {
        throw new Error(`Failed to export PDF: ${pdfEndpointResponse.statusText}`);
    }

    return pdfEndpointResponse.json();
}
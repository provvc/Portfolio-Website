import fs from "fs";
import path from "path";

export async function exportPDF(data: String) {
    
    const chunksDir = path.join(process.cwd(), ".next/static/chunks");
    const cssFiles = fs.readdirSync(chunksDir).filter(f => f.endsWith(".css"));
    const compiledCSS = cssFiles.map(f => fs.readFileSync(path.join(chunksDir, f), "utf-8")).join("\n");
    
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
                ${compiledCSS} // *** he chunks CSS file that is compiled from tailwindcss styles by NextJS
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
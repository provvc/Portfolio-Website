import { NextResponse } from "next/server";
import { exportPDF } from "@/lib/pdfExporter";
import { buildResumeHTML } from "@/lib/buildResume";

// export async function POST() {
//     try {
//         const html = buildResumeHTML();
//         const result = await exportPDF(html);

//         return NextResponse.json(result);
//     } catch (err) {
//         return NextResponse.json(
//             { error: "Failed to export resume" },
//             { status: 500 }
//         );
//     }
// }

export async function GET() {

    try {
        const html = buildResumeHTML();

        // Call the PDFEndpoint API to generate the PDF
        const result = await exportPDF(html);

        // Retrieve the PDF URL from the response
        const pdfUrl = result.data.url;

        // Fetch the actual PDF file
        const pdfFileResponse = await fetch(pdfUrl);
        const pdfBuffer = await pdfFileResponse.arrayBuffer();

        // Return it with a proper filename
        return new NextResponse(pdfBuffer, {
            headers: {
                "Content-Type": "application/pdf",
                "Content-Disposition": 'attachment; filename="Christopher-Provencher-Resume.pdf"',
            },
        });
        } catch (err) {
        return NextResponse.json(
            { error: "Failed to export resume" },
            { status: 500 }
        );
    }
}
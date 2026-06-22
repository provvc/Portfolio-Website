import { NextResponse } from "next/server";
import { exportPDF } from "@/app/lib/pdfExporter";
import { buildResumeHTML } from "@/app/lib/buildResume";

export async function GET() {

    try {
        const html = buildResumeHTML();

        // Call the PDFEndpoint API to generate the PDF
        const result = await exportPDF(html);

        // console.log(result)

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
            { error: `${err}` },
            { status: 500 }
        );
    }
}
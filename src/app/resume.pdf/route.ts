import { renderToBuffer } from "@react-pdf/renderer";
import { createElement } from "react";

import { ResumeDocument } from "@/content/resume-document";

export const runtime = "nodejs";

export async function GET() {
  const buffer = await renderToBuffer(createElement(ResumeDocument));
  const pdf = new Uint8Array(buffer);

  return new Response(pdf, {
    headers: {
      "Content-Disposition": 'inline; filename="prabu-jayant-resume.pdf"',
      "Content-Type": "application/pdf",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}

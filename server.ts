/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express, { Request, Response } from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  app.use(express.json());

  // API Route for sending emails via Resend
  app.post("/api/send-email", async (req: Request, res: Response) => {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields: name, email, and message are required." });
      }

      // Provided Resend API key
      const apiKey = process.env.RESEND_API_KEY || "re_3KWihvz1_CLh1AwCFYmUSwEjt3Wp9bsnz";

      const emailData = {
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: ["dascorey2@gmail.com"],
        subject: subject || `New message from ${name} via Portfolio`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #161616; max-width: 600px; background-color: #FAF9F6; border: 1px solid #E7E3D4;">
            <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #B89253; font-weight: bold; margin-bottom: 20px;">NEW PORTFOLIO PROPOSAL DISPATCH</p>
            <h2 style="font-family: serif; color: #161616; border-bottom: 1px solid #E7E3D4; padding-bottom: 10px; margin-top: 0;">Inquiry from ${name}</h2>
            <p><strong>Sender Email:</strong> <a href="mailto:${email}" style="color: #B89253; text-decoration: none;">${email}</a></p>
            <p><strong>Subject:</strong> ${subject || "N/A"}</p>
            <div style="background-color: #F4F2EB; border-left: 3px solid #B89253; padding: 15px; margin-top: 20px; border-radius: 2px;">
              <p style="font-size: 10px; color: #3D3D3C; font-weight: bold; margin-top: 0; text-transform: uppercase; letter-spacing: 0.05em;">Message Statement:</p>
              <p style="white-space: pre-wrap; margin-bottom: 0; font-size: 14px; line-height: 1.6; color: #3D3D3C;">${message}</p>
            </div>
            <p style="font-size: 11px; color: #3D3D3C; margin-top: 30px; text-align: center; border-top: 1px solid #E7E3D4; padding-top: 15px; opacity: 0.6;">© ${new Date().getFullYear()} Daryl Sango Portfolio.</p>
          </div>
        `
      };

      console.log("Sending email via Resend to dascorey2@gmail.com...");
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(emailData)
      });

      const responseText = await response.text();
      console.log("Resend response status:", response.status, responseText);

      if (response.ok) {
        return res.json({ success: true, message: "Email sent successfully!" });
      } else {
        return res.status(response.status).json({ error: "Failed to send email via Resend.", details: responseText });
      }

    } catch (error: any) {
      console.error("Error in send-email endpoint:", error);
      return res.status(500).json({ error: "Internal server error", details: error.message });
    }
  });

  // Serve input files specifically from any location in the filesystem
  app.get("/input_file_:num.:ext", (req: Request, res: Response) => {
    const { num, ext } = req.params;
    const possiblePaths = [
      path.join(process.cwd(), `input_file_${num}.${ext}`),
      path.join(process.cwd(), "public", `input_file_${num}.${ext}`),
      path.join(process.cwd(), "src", `input_file_${num}.${ext}`),
      path.join("/", `input_file_${num}.${ext}`),
      path.join("/app", `input_file_${num}.${ext}`),
      path.join("/workspace", `input_file_${num}.${ext}`)
    ];

    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        console.log(`Successfully mapped input_file_${num}.${ext} to ${p}`);
        return res.sendFile(p);
      }
    }

    // Direct fallback to High Commissioner photos (highly realistic, elegant imagery of certificate receipt and diplomats)
    const fallbacks = [
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800", // Certificate / Meeting
      "https://images.unsplash.com/photo-1521791136368-1a46827d0adb?auto=format&fit=crop&q=80&w=800", // Group on steps / Meeting
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"  // Presentation / Team
    ];
    return res.redirect(fallbacks[parseInt(num) || 0]);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req: Request, res: Response) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

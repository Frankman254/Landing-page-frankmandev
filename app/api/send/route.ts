import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"

export async function POST(req: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY
        
        if (!apiKey) {
            return Response.json(
                { error: "RESEND_API_KEY no está configurada" },
                { status: 500 }
            )
        }

        const resend = new Resend(apiKey)
        const dataForm = await req.json()
        
        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["frankman254@gmail.com"],
            subject: "FrankmanDev Landing",
            react: EmailTemplate({
                firstName: dataForm.username,
                message: dataForm.message,
                email: dataForm.email
            }),
            text: "FrankmanDev"
        })
        
        return Response.json(data)
    } catch (error) {
        return Response.json(
            { error: error instanceof Error ? error.message : "Error desconocido" },
            { status: 500 }
        )
    }
}
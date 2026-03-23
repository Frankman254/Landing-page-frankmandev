import { Resend } from "resend"
import { EmailTemplate } from "@/components/email-template"
import { z } from "zod"

const bodySchema = z.object({
    username: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(10),
})

export async function POST(req: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY

        if (!apiKey) {
            return Response.json(
                { error: "RESEND_API_KEY no está configurada" },
                { status: 500 }
            )
        }

        const body = await req.json()
        const parsed = bodySchema.safeParse(body)

        if (!parsed.success) {
            return Response.json(
                { error: "Datos inválidos", details: parsed.error.flatten() },
                { status: 400 }
            )
        }

        const { username, email, message } = parsed.data
        const resend = new Resend(apiKey)

        // NOTE: Change 'from' to a verified Resend domain for production.
        // e.g. "Frankman Dev <contact@frankmandev.com>"
        // While using the sandbox domain, emails only deliver to the account owner.
        const data = await resend.emails.send({
            from: "Frankman Dev <onboarding@resend.dev>",
            to: ["frankman254@gmail.com"],
            subject: `Mensaje de ${username} vía FrankmanDev`,
            replyTo: email,
            react: EmailTemplate({ firstName: username, message, email }),
            text: `Nombre: ${username}\nEmail: ${email}\n\nMensaje:\n${message}`,
        })

        return Response.json(data)
    } catch (error) {
        return Response.json(
            { error: error instanceof Error ? error.message : "Error desconocido" },
            { status: 500 }
        )
    }
}

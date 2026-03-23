"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { Loader2 } from "lucide-react"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useLanguage } from "./language-provider"

const formSchema = z.object({
    username: z.string().min(2, "Mínimo 2 caracteres").max(50),
    email: z.string().email("Email inválido"),
    message: z.string().min(10, "Mínimo 10 caracteres"),
})

type FormValues = z.infer<typeof formSchema>

const ContactForm = () => {
    const { t } = useLanguage()
    const [successForm, setSuccessForm] = useState(false)
    const [errorForm, setErrorForm] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: "",
        },
    })

    const onSubmit = async (values: FormValues) => {
        setIsLoading(true)
        setErrorForm(false)
        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            })
            if (response.ok) {
                setSuccessForm(true)
            } else {
                setErrorForm(true)
            }
        } catch {
            setErrorForm(true)
        } finally {
            setIsLoading(false)
        }
    }

    if (successForm) {
        return (
            <div className="bg-accent border border-brand-red/20 text-accent-foreground rounded-2xl px-6 py-8 text-center shadow-lg">
                <p className="text-2xl mb-2">✅</p>
                <p className="font-semibold">{t.contactForm.successMessage}</p>
            </div>
        )
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t.contactForm.namePlaceholder}</FormLabel>
                            <FormControl>
                                <Input placeholder={t.contactForm.namePlaceholder} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t.contactForm.emailPlaceholder}</FormLabel>
                            <FormControl>
                                <Input
                                    type="email"
                                    placeholder={t.contactForm.emailPlaceholder}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>{t.contactForm.messagePlaceholder}</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder={t.contactForm.messagePlaceholder}
                                    rows={5}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {errorForm && (
                    <p className="text-sm text-destructive">
                        {t.contactForm.errorMessage}
                    </p>
                )}
                <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            {t.contactForm.submitButton}...
                        </>
                    ) : (
                        t.contactForm.submitButton
                    )}
                </Button>
            </form>
        </Form>
    )
}

export default ContactForm

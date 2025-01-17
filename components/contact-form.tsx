"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

const ContactForm = () => {
    const [sucessForm, setSucessForm] = useState(false)
    const formSchema = z.object({
        username: z.string().min(2).max(50),
        email: z.string().email(),
        message: z.string()
    })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            message: ""
        }
    })
    const onSubmit = async (values: z.infer<typeof formSchema>)=> {
        const response = await fetch("/api/send", {
            method: "POST",
            body: JSON.stringify(values)
        })
        if(response.status == 200){
            setSucessForm(true)
        }
    }
    return (
        <Form {... form}>
            {sucessForm ? (
                <h4 className="bg-green-100 border border-green-400 text-green-800 rounded-lg px-6 py-4 max-w-md mx-auto text-center font-semibold shadow-lg">✅ ¡Formulario enviado con éxito!</h4>
            ): (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField 
            control={form.control}
            name="username"
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Input
                            placeholder="Your Name"
                            {... field}
                            className="dark:bg-slate-800"
                        />
                        
                    </FormControl>
                </FormItem>
            )}
            />
                        <FormField 
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Input
                            placeholder="Your Email"
                            {... field}
                            className="dark:bg-slate-800"
                        />
                        
                    </FormControl>
                </FormItem>
            )}
            />
                        <FormField 
            control={form.control}
            name="message"
            render={({ field }) => (
                <FormItem>
                    <FormControl>
                        <Textarea
                            placeholder="Your Message"
                            {... field}
                            className="dark:bg-slate-800"
                        />
                        
                    </FormControl>
                </FormItem>
            )}
            />
            <Button type="submit">Enviar</Button>
            </form>    
            )}

        </Form>
    );
}

export default ContactForm;

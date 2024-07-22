"use server"
import { getErrorMessage, validate } from "@/lib/utils"
import { error } from "console"
import { sendError } from "next/dist/server/api-utils"
import { Resend } from "resend"
import ContactFormEmail from "@/email/contactform"
import React from "react"
const resend = new Resend(process.env.RESEND_API_KEY)


export const sendEmail = async(formData: FormData) =>{
    const sender = formData.get("sender")
    const content = formData.get("content")

    if (!validate(sender, 500)){
        return {
            error: "Invalid Sender"
        }
    }
    if (!validate(content, 5000)){
        return {
            error: "Invalid Message"
        }
    }

    let data;
    try{
    data = await resend.emails.send({
        from: "Contact <onboarding@resend.dev>",
        to: "mragni108@gmail.com",
        subject: "Hello",
        reply_to: sender as string,
        react: React.createElement(ContactFormEmail, {
            content: content as string,
            sender: sender as string, 
        })
    })
    } catch (error: unknown){
        return {
            error: getErrorMessage(error)
        }
    }
    return {
        data,
    };
}
"use server"

import { getErrorMessage, validate } from "@/lib/utils"
import { Resend } from "resend"
import ContactFormEmail from "@/email/contactform"
import React from "react"
import { currentUser } from "@clerk/nextjs/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async(formData: FormData) => {
    const user = await currentUser()
    if (!user || !user.emailAddresses.length) {
        return {
            error: "User not authenticated or email not available"
        }
    }

    const sender = user.emailAddresses[0].emailAddress
    const senderName = user.firstName && user.lastName 
        ? `${user.firstName} ${user.lastName}`
        : user.firstName || "Anonymous"
    const content = formData.get("content")
    const title = formData.get("title")

    if (!validate(title, 50)){
        return {
            error: "Invalid Title"
        }
    }

    if (!validate(content, 5000)){
        return {
            error: "Invalid Message"
        }
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact <onboarding@resend.dev>",
            to: "madhavrapelli@gmail.com",
            subject: senderName as string + ":" + " " + title as string,
            reply_to: sender,
            react: React.createElement(ContactFormEmail, {
                content: content as string,
                sender: sender, 
                title: title as string
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
"use server"

import { getErrorMessage, validate } from "@/lib/utils"
import { Resend } from "resend"
import { currentUser } from "@clerk/nextjs/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendNotification = async() => {
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

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact <onboarding@resend.dev>",
            to: "madhavrapelli@gmail.com",
            subject: "Resume Downloaded by: " + senderName as string,
            reply_to: sender,
            text: "Resume Downloaded by: " + senderName as string
        })
    } catch (error: unknown){
        return {
            error: getErrorMessage(error)
        }
    }
    return {
        data
    };
}
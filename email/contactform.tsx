import React from 'react'
import {
    Html,
    Body, 
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from "@react-email/components"

import { Tailwind } from '@react-email/tailwind'
type ContactEmailProps = {
    content: string
    sender: string
    title: string
}
export default function ContactFormEmail({
    content , sender, title
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New email through your personal website</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
            <Container>
                <Section className='bg-white border border-black my-10 px-10 py-4 rounded-md'>
                    <Heading className='leading-tight'>
                        <Text>{title}</Text>
                    </Heading>
                    <Text>{content}</Text>
                    <Hr />
                    <Text>From: {sender}</Text>
                </Section>
            </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "scontent-lga3-2.cdninstagram.com"

            }
        ]
    }

}

module.exports = nextConfig

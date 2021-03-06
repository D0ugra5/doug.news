import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENTE,
      clientSecret: process.env.GITHUB_SECRET,
      scope:'read:user'
    }),

    // Providers.Facebook({
    //     clientId: process.env.FACEBOOK_ID,
    //     clientSecret: process.env.FACEBOOK_SECRET
    //   })
    // ...add more providers here
  ],

  
})
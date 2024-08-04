import NExtAuthOptions from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProviders from 'next-auth/providers/credentials'

const options = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        CredentialsProviders({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "username"
                },
                password: {
                    label: "Password:",
                    type: "password"
                }
            },
            // async authorize(credentials) {
            //     const user = {name: 'ethan', password: 'ethan'}
            //     console.log('credentials: ', credentials)
            //     console.log('HERE LA')
            //     if(credentials?.username === user.name && credentials?.password === user.password) {
            //         return user
            //     } else {
            //         console.log('HERE?')
            //         return null
            //     }
            // },

        })
    ],


}


export default options
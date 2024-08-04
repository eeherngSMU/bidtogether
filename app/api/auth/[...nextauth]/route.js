import NextAuth from "next-auth"
import options from './options'
import User from '@models/user'
import connectToDB  from '@utils/database'

const handler = NextAuth({
    ...options, 
    callbacks: {
    async session({ session }) {
        // store user id from MongoDB to session
        const sessionUser = await User.findOne({ 
            email: session.user.email 
        })
        session.user.id = sessionUser._id.toString()
        return session
        },
    
    async signIn({ profile }) {
        try {
            await connectToDB()
            // console.log('profile:', profile)

            // check if a user already exists
            const userExists = await User.findOne({
                email: profile.email
            })
            // if not, create a new user
            if(!userExists) {
                console.log('User dont exist')
                let username = profile.login.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        
                // Ensure the username is between 8 and 20 characters
                if (username.length < 8) {
                    username = username.padEnd(8, '0'); // Pad with zeros if too short
                } else if (username.length > 20) {
                    username = username.substring(0, 20); // Trim if too long
                }
                await User.create({
                    email: profile.email,
                    username: username,
                    image: profile.avatar_url
                })
            }
            return true
        } catch(error) {
            console.log('sign in error', error)
            return false
        }
    }
},
})

export { handler as GET, handler as POST }


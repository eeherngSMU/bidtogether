"use client"

import Link from 'next/link'
import { getProviders, signIn, signOut, useSession } from "next-auth/react"
import { useEffect, useState } from 'react'


const Nav = () => {

  const { data: session } = useSession()

  const [providers, setProviders] = useState(null)

  useEffect(() => {
    console.log('session:', session)

  }, [session])
  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders();
      setProviders(res)
    }

    setUpProviders()
  }, [])
  
  // console.log('providers: ',providers)
  // console.log('session: ', session)

  return (
    <nav className='flex-between w-full mb-16 mr-3'>
        
            <a href="/">
                
                <h1 className='orange_gradient text-4xl py-3'>BIDTGT</h1>
            </a>
            <div className='flex-end space-x-4 w-full'>
            
            {session?.user ? ( 
              <>
              <Link href="/create" className='outline_btn'>Create</Link>
              <button onClick={signOut} className='black_btn'>Sign out</button>
              </>
            ) : (
              <>
                
                {providers && Object.values(providers).map((provider) => (
                  <Link href="/api/auth/signin" key={provider.name}>
                    <button 
                      type='button' 
                      key={provider.name}
                      onClick={() => {signIn(provider.id)}} className='black_btn'>
                        Sign in with {provider.name}
                      </button>
                   </Link>

                ))}
                
                </>
            )}
            </div>
            
        
        
    </nav>
  )
}

export default Nav
"use client"

import { useUserAuth } from "./_utils/auth-context"
import Link from 'next/link'

export default function Page () {
    
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    async function handleSignIn () {
        try {
            await gitHubSignIn();
        } catch (err) {
            console.log(err);
        }
        
    }

    async function handleSignOut () {
        try {
            await firebaseSignOut();
        } catch (err) {
            console.log(err);
        }
        
    }

    console.log(user);

    return (
        <main>
            <header>
                <h1>Login</h1>
            </header>

            <section>
                { user ? (
                    <div>
                        <p>Welcome, {user.displayName}</p>
                        <button
                            className="m-3 hover:underline"
                            onClick={handleSignOut}>
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div>
                        <button
                            className="m-3 hover:underline"
                            onClick={handleSignIn}>
                            Sign In
                        </button>
                    </div>
                ) }
            </section>

            <Link href="/week8/secured">Account page</Link>
        </main>
    )
}
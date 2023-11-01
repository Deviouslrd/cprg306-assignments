"use client"

import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context"

export default function Page () {

    const { user } = useUserAuth();

    return user ? ( 
        <main>
            <header>Secret page</header>
            <section>
                <p>Welcome, {user.displayName}. You have been successfully signed in.</p>
            </section>
            <Link href="./">Go back</Link>
        </main>       

    ) : (
        <main>
            <header>Not logged in</header>
            <section>
                <p>This page is not accessible if you are not logged in</p>
            </section>
            <Link href="./">Go back</Link>
        </main>)
            
}
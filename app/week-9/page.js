"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page(){
const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

const handleLogin = async () =>
    {
        try{
            await gitHubSignIn();
        } catch(error){
            console.error('Login failed:', error);
        }
    };

const handleLogout = async () => 
    {
        try{
            await firebaseSignOut();
        } catch(error){
            console.error('Logout failed:', error);
        }
    };
 
    return(
        <div className="min-h-screen flex flex-col items-center justify-center">
      {user ? (
        <>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
          <Link href="week-9/shopping-list">
            <button className="bg-green-500 text-white px-4 py-2 rounded mt-4">Go to Shopping List</button>
          </Link>
        </>
      ) : (
        <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded">Login with GitHub</button>
      )}
    </div>
    );
}
import React from "react";

export async function getProfile(username)
{
    try
    {
        const response = await fetch(`http://localhost:3000/api/user/${username}`);

        if (!response.ok)
            throw new Error("Network response was not ok");
        
        const data = await response.json();
        return { data }; // Return a promise
    }
    catch (error)
    {
        console.error("There was a problem with fetching the profile for: " + username + ": ", error);
        return {error: "Failed to get the profile for: " + username};
    }
}
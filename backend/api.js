import React from "react";

export async function login(username, password)
{
    try
    {
        const response = await fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers:
            {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok)
        {
            const errorData = await response.json();
            throw new Error(errorData.message || "Network response was not ok");
        }

        const data = await response.json();
        if (data === "Login successful")
            return true;
        else
            return false;
    }
    catch (error)
    {
        console.error("There was a problem with the login: ", error);
        return { error: "Failed to login: " + error.message };
        return false;
    }
}

export async function register(username, password, image, bio, email)
{
    try
    {
        const formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        formData.append("bio", bio);
        formData.append("email", email);
        if (image) {
            formData.append("image", image);
        }

        const response = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            body: formData
        });

        if (!response.ok)
        {
            const errorData = await response.json();
            throw new Error(errorData.message || "Network response was not ok");
        }

        const data = await response.json();
        if (data.message === "Registration successful")
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    catch (error)
    {
        console.error("There was a problem with the registration: ", error);
        return { error: "Failed to register: " + error.message };
        return false;
    }
}

export async function getProfile(username)
{
    try
    {
        const response = await fetch(`http://localhost:3000/api/user/${username}`);

        if (!response.ok)
        {
            const errorData = await response.json();
            throw new Error(errorData.message || "Network response was not ok");
        }
            
        const data = await response.json();
        return { data }; // Return a promise
    }
    catch (error)
    {
        console.error("There was a problem with fetching the profile for: " + username + ": ", error);
        return {error: "Failed to get the profile for: " + username};
    }
}
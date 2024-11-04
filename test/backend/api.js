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
            return data;
        else
            return data;
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
        const inData = {
            username,
            password,
            bio,
            email
        };
        
        const response = await fetch("http://localhost:3000/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inData)
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
    }
}

export async function getProfile(username)
{
    try
    {
        const response = await fetch(`http://localhost:3000/api/user/${username}`);

        if (!response.ok)
        {
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

export async function getSong(songID)
{
    try
    {
        const response = await fetch(`http://localhost:3000/api/song/${songID}`);

        if (!response.ok)
        {
            throw new Error(errorData.message || "Network response was not ok");
        }
            
        const data = await response.json();
        return { data }; // Return a promise
    }
    catch (error)
    {
        console.error("There was a problem with fetching the song: ", error);
        return {error: "Failed to get the song"};
    }
}

export async function getSongs()
{
    try
    {
        const response = await fetch(`http://localhost:3000/api/songs`);

        if (!response.ok)
        {
            throw new Error(errorData.message || "Network response was not ok");
        }
            
        const data = await response.json();
        return { data }; // Return a promise
    }
    catch (error)
    {
        console.error("There was a problem with fetching all songs: ", error);
        return {error: "Failed to get all songs"};
    }
}

export async function addSong(title, creator, realeaseDate, lyrics, image)
{
    try
    {
        const inData = {
            title,
            creator,
            realeaseDate,
            lyrics,
            image
        };
        
        const response = await fetch("http://localhost:3000/api/addsong", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inData)
        });

        if (!response.ok)
        {
            const errorData = await response.json();
            throw new Error(errorData.message || "Network response was not ok");
        }

        const data = await response.json();
        if (data.message === "Add song successful")
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
        console.error("There was a problem with adding the song: ", error);
        return { error: "Failed to add song: " + error.message };
    }
}

export async function addPlaylist(title, description, image, songs)
{
    try
    {
        const inData = {
            owner_id: localStorage.getItem("_id"),
            title,
            description,
            created: new Date(),
            songs,
            image
        };
        
        const response = await fetch("http://localhost:3000/api/addplaylist", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inData)
        });

        if (!response.ok)
        {
            const errorData = await response.json();
            throw new Error(errorData.message || "Network response was not ok");
        }

        const data = await response.json();
        if (data.message === "New playlist addition successful")
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
        console.error("There was a problem with adding the playlist: ", error);
        return { error: "Failed to add playlist: " + error.message };
    }
}

export async function searchSongs(query)
{
    try
    {
      const response = await fetch(`http://localhost:3000/api/searchsongs?query=${query}`);
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      return data.songs;
    }
    catch (error)
    {
      console.error("There was a problem with searching for songs: ", error);
      return [];
    }
  }
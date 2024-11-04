import React from "react";
import "../../public/assets/css/main.css";
import Navigation from "../components/Navigation";
import Dropzone from "react-dropzone";
import { addSong } from "../../../backend/api";

class AddSong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      creator: "",
      releaseDate: "",
      lyrics: "",
      image: ""
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  async handleSubmit(e)
  {
    e.preventDefault();

    const { title, releaseDate, lyrics, image, creator } = this.state;
    try
    {
        let res = await addSong( title, creator, releaseDate, lyrics, image );
        alert("Song created successfully!")
    }
    catch (error)
    {
        alert("Failed to create song, please try again.")
        console.log("Error: " + error);
    }
  };

  render() {
    const { title, releaseDate, lyrics, image, creator } = this.state;

    return (
      <div>
        <header>
          <Navigation />
        </header>

        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-black bg-opacity-50 p-8 rounded shadow-md w-full max-w-lg">
            <h3 className="text-2xl mb-4 text-center">Add a Song</h3>
            <form onSubmit={this.handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-left">Title:</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={this.handleChange}
                  placeholder="Never gonna give you up..."
                  className="mt-2 p-2 w-full border border-gray-300 rounded text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-left">Creator:</label>
                <input
                  type="text"
                  name="creator"
                  id="creator"
                  value={creator}
                  onChange={this.handleChange}
                  placeholder="Rick Astley..."
                  className="mt-2 p-2 w-full border border-gray-300 rounded text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="releaseDate" className="block text-left">Release Date:</label>
                <input
                  type="date"
                  name="releaseDate"
                  id="releaseDate"
                  value={releaseDate}
                  onChange={this.handleChange}
                  className="mt-2 p-2 w-full border border-gray-300 rounded text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="lyrics" className="block text-left">Lyrics:</label>
                <textarea
                  name="lyrics"
                  id="lyrics"
                  value={lyrics}
                  onChange={this.handleChange}
                  placeholder="Enter the lyrics here..."
                  className="mt-2 p-2 w-full border border-gray-300 rounded text-black"
                  required
                />
              </div>
              <div>
                <label htmlFor="image" className="block text-left text-white">Image:</label>
                <Dropzone onDrop={this.handleDrop} required>
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps()}
                      className="mt-2 p-2 w-full border border-dashed border-gray-300 rounded text-black cursor-pointer"
                    >
                      <input {...getInputProps()} />
                      {image ? (
                        <p>{image.name}</p>
                      ) : (
                        <p className="text-white">Drag 'n' drop an image here, or click to select one</p>
                      )}
                    </div>
                  )}
                </Dropzone>
              </div>
              <button
                type="submit"
                className="mt-4 p-2 w-full bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddSong;
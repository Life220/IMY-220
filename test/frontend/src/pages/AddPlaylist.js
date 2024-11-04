import React from "react";
import Dropzone from "react-dropzone";
import { addPlaylist, searchSongs } from "../../../backend/api"; // Assuming you have a searchSongs function in your API
import Modal from "react-modal"; // Ensure this import is correct
import "../../public/assets/css/main.css";
import Navigation from "../components/Navigation";

// Set the app element for react-modal
Modal.setAppElement('#root');

class AddPlaylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        owner_id: "",
        title: "",
        description: "",
        image: "",
        songs: [],
        isModalOpen: false,
        searchQuery: "",
        searchResults: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAddSong = this.handleAddSong.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleDrop(files) {
    this.setState({ image: files[0] });
  }

    async handleSubmit(e)
    {
        e.preventDefault();
        const { title, description, image, songs } = this.state;
        let res = await addPlaylist(title, description, image);

        if (res)
            alert("Successfully created playlist!");
        else
            alert("Failed to created playlist, please try again.");
    }

  handleSearchChange(e) {
    this.setState({ searchQuery: e.target.value });
  }

  async handleSearch() {
    const { searchQuery } = this.state;
    const results = await searchSongs(searchQuery);
    this.setState({ searchResults: results });
  }

  handleAddSong(song) {
    this.setState((prevState) => ({
      songs: [...prevState.songs, song],
      isModalOpen: false,
      searchQuery: "",
      searchResults: []
    }));
  }

  render() {
    const { title, description, image, songs, isModalOpen, searchQuery, searchResults } = this.state;

    return (
      <div>
        <Navigation />
        <form onSubmit={this.handleSubmit}>
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
            <label htmlFor="description" className="block text-left">Description:</label>
            <textarea
              name="description"
              id="description"
              value={description}
              onChange={this.handleChange}
              placeholder="Enter the description here..."
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
          <div>
            <button type="button" onClick={() => this.setState({ isModalOpen: true })} className="mt-4 p-2 bg-blue-500 text-white rounded">
              Add Song
            </button>
          </div>
          <div>
            <h3 className="mt-4">Songs in Playlist:</h3>
            <ul>
              {songs.map((song, index) => (
                <li key={index}>{song.title} by {song.creator}</li>
              ))}
            </ul>
          </div>
          <button type="submit" className="mt-4 p-2 bg-green-500 text-white rounded">Create Playlist</button>
        </form>

        <Modal isOpen={isModalOpen} onRequestClose={() => this.setState({ isModalOpen: false })}>
          <h2>Search for a Song</h2>
          <input
            type="text"
            value={searchQuery}
            onChange={this.handleSearchChange}
            placeholder="Search for a song..."
            className="mt-2 p-2 w-full border border-gray-300 rounded text-black"
          />
          <button onClick={this.handleSearch} className="mt-2 p-2 bg-blue-500 text-white rounded">Search</button>
          <ul>
            {searchResults.map((song, index) => (
              <li className="text-black" key={index}>
                {song.title} by {song.creator}
                <button onClick={() => this.handleAddSong(song)} className="ml-2 p-1 bg-green-500 text-white rounded">Add</button>
              </li>
            ))}
          </ul>
        </Modal>
      </div>
    );
  }
}

export default AddPlaylist;
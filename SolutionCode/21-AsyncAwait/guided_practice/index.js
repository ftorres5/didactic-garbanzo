const COHORT = "2310-FSA-ET-WEB-PT-SF";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT}/artists`;

const state = {
  artists: [],
};

const artistList = document.querySelector("#artists");

const addArtistForm = document.querySelector("#addArtist");
addArtistForm.addEventListener("submit", addArtist);

/**
 * Sync state with the API and rerender
 */
async function render() {
  await getArtists();
  renderArtists();
}
render();

/**
 * Update state with artists from API
 *
 * Prompt 1:
 * Write getArtists(); the goal is to make a GET request to the API and update the
 * state with the response data. You can check state in the console to see if the data is successfully fetched.
 */
async function getArtists() {
  try {
    const res = await fetch(API_URL);
    const json = await res.json();
    state.artists = json.data;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Render artists from state
 *
 * Prompt 2:
 *
 * Complete renderArtists so that it renders the artists in state. The page should contain the name, image,
 * and bio of each artist. If state is empty, then a corresponding message should be displayed.
 */
function renderArtists() {
  if (!state.artists.length) {
    artistList.innerHTML = "<li>No artists.</li>";
    return;
  }

  const artistCards = state.artists.map((artist) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${artist.name}</h2>
      <img src="${artist.imageUrl}" alt="${artist.name}" />
      <p>${artist.description}</p>
    `;
    return li;
  });

  artistList.replaceChildren(...artistCards);
}

/**
 * Prompt 3:
 * Complete addArtist() so that it makes a POST request to the API with data from the form.
 * The page should automatically rerender with the new artist added to the list.
 *
 * Ask the API to create a new artist based on form data
 * @param {Event} event
 *
 */
async function addArtist(event) {
  event.preventDefault();

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: addArtistForm.name.value,
        imageUrl: addArtistForm.imageUrl.value,
        description: addArtistForm.description.value,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create artist");
    }

    //reset the form values
    addArtistForm.name.value = "";
    addArtistForm.imageUrl.value = "";
    addArtistForm.description.value = "";

    render();
  } catch (error) {
    console.error(error);
  }
}

import SpotifyWhite from "../assets/spotify-white.png";
import SpotifyBlack from "../assets/spotify-black.png"

export function Logo(props) {
  if (props.useWhite){
    return(
      <a href="#/dashboard"><img src={SpotifyWhite}alt="spotifylogo"/></a>
    )
  }else{
  return(
    <a href="#/dashboard">  <img src={SpotifyBlack} alt="spotifylogo"/></a>
  )
  }
}

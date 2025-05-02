// Importamos React y los hooks necesarios: "useEffect, useState "
import React, { useEffect, useState, useRef } from "react";

// Importamos el componente del reproductor que es Player
import Player from "./Player";

const Home = () => {
	//aquí declaramos el estado para guardar la lista de canciones
	const [songs, setSongs] = useState([]);
	//cancion actual seleccionada
	const [currentSong, setCurrentSong] = useState(null);
	const audioRef = useRef(null);

	const reproducir = (song) => {
		console.log(song.url);
		setCurrentSong(song.name)
		let baseUrl = "https://playground.4geeks.com"
		//if (audioRef.current.paused) {
		audioRef.current.src = baseUrl.concat(song.url)
		audioRef.current.play();
		//}
	}
	// Función para retroceder 
	const handleRewind = () => {
		audioRef.current.rewind();
	};

	// Función para reproducir
	const handlePlay = () => {
		audioRef.current.play();
	};

	// Función para pausar
	const handlePause = () => {
		audioRef.current.paused();
	};

	// Función para adelantar
	const handleForward = () => {
		// audioRef.current
	};

	//esta función obtiene los datos desde la API
	const getdata = async () => {
		try {
			const resp = await fetch("https://playground.4geeks.com/sound/songs");
			const data = await resp.json();

			setSongs(Array.isArray(data) ? data : data.songs);
		} catch (error) {
			console.log("Error al obtener las canciones:", error);
		}
	};



	// este useEffect se ejecuta al montar el componente y llama a getdata()
	useEffect(() => {
		getdata();
	}, []);

	// el return solo contiene el JSX (lo que se renderiza en pantalla)
	return (
		<div className="text-center container bg-dark text-white">
			<h3>🎧 Playlist 📀</h3>

			{/* aqui pondremos la playlist */}
			<ul className="list-group">
				{songs.map((song, i) => (
					<li key={i}
						value={song}
						className="list-group-item list-group-item-action"
						onClick={() => reproducir(song)}>
						{song.name}
					</li>
				))}
			</ul>
			{/* control de audio */}
			<audio ref={audioRef} controls className="w-100">
				<source src={audioRef} type="audio/mp3" />
			</audio>
			<div className="bt-secondary p-3 mt-3">
				<h3>🎼Reproductor🎵</h3>

				{/* si hay una cancion seleccionada mostrara el nombre */}
				{currentSong ? (
					<div>
						<h4>🎶Reproduciendo: <strong>{currentSong}</strong> </h4>

						<p><strong>Made by Jenn with love❤️!</strong></p>




						{/* botones
						<div className="d-flex justify-content-center gap-3 mt-3">
							<button className="btn btn-secondary" onClick={handleRewind}>
								<i className="fas fa-backward"></i>
							</button>
							<button className="btn btn-success" onClick={handlePlay}>
								<i className="fas fa-play"></i>
							</button>
							<button className="btn btn-warning" onClick={handlePause}>
								<i className="fas fa-pause"></i>
							</button>
							<button className="btn btn-secondary" onClick={handleForward}>
								<i className="fas fa-forward"></i>
							</button>
						</div> */}
					</div>

				) : (
					<p>Cancion seleccionada:</p>
				)}
			</div>

			{/* Aqui pasamos las canciones al Player */}
			{/* <Player song={currentSong} /> */}
		</div>
	);
};

export default Home;

//este componente se encargara de la reproduccion de musica
//estarn los botones de play y pause 

import React, { useEffect, useRef } from "react";

const Player = ({ song }) => {
    console.log(song)
    //creamos la referencia al elemento audio
    

    //este se ejecutara cada vez que suene la cancion
    // useEffect(() => {
    //     if (song && audioRef.current) {
    //         audioRef.current.load(); // Carga el nuevo audio

    //         // Función para cuando el audio esté listo
    //         const playAudioWhenReady = () => {
    //             audioRef.current.play().catch((error) => {
    //                 console.log("No se pudo reproducir automáticamente:", error);
    //             });
    //         };

    //         // Esperar a que se pueda reproducir sin interrupciones
    //         audioRef.current.addEventListener("canplaythrough", playAudioWhenReady);

    //         // Limpieza: elimina el evento cuando cambia la canción o se desmonta el componente
    //         return () => {
    //             audioRef.current.removeEventListener("canplaythrough", playAudioWhenReady);
    //         };
    //     }
    // }, [song]);
    useEffect(() => {
        if (song && audioRef.current) {
            audioRef.current.load(); // Solo carga el audio
        }
        
    }, [song]);

   


    return (
       <></>
    );
};


export default Player;

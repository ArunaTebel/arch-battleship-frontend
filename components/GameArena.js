import {collection, doc, onSnapshot, query, addDoc, setDoc} from "firebase/firestore";
import fb from "../firebase";
import {useEffect, useState} from "react";

export default function GameArena() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            query(
                collection(fb.db, 'games')),
            (querySnapshot) => {
                const games = [];
                querySnapshot.forEach((game) => {
                    games.push({...game.data(), id: game.id});
                });
                setGames(games)
            }
        );
    }, []);

    return (
        <div>
            <h3>Game Arena</h3>
            <ul>
                {
                    games.map(function (game, i) {
                        return <li key={i}><a href={`game/${game.id}`}>{game.name}</a></li>;
                    })
                }
            </ul>
        </div>
    )
}
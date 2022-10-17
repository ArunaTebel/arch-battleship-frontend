import {useRouter} from 'next/router'
import {doc, onSnapshot} from "firebase/firestore";
import fb from "../../firebase";
import {useEffect, useState} from "react";

const Game = () => {
    const router = useRouter()
    const {gid} = router.query
    const [game, setGame] = useState({});
    useEffect(() => {
        if (gid) {
            const unsub = onSnapshot(
                doc(fb.db, 'games', `${gid}/players/${localStorage.getItem('userid')}`),
                (game) => {
                    setGame(game.data())
                }
            );
        }
    }, [gid]);

    return <div>
        <p>Game ID: {gid}</p>
        <code>
            {JSON.stringify(game)}
        </code>
    </div>
}

export default Game
import {useRouter} from 'next/router'
import {collection, doc, onSnapshot} from "firebase/firestore";
import fb from "../../firebase";
import {useEffect, useState} from "react";
import {getCells} from "../../util/board";

const Game = () => {
    const router = useRouter()
    const {gid} = router.query
    const [towers, setTowers] = useState({});
    const [missiles, setMissiles] = useState({});
    useEffect(() => {
        if (gid) {
            const playerRef = doc(fb.db, 'games', `${gid}/players/${localStorage.getItem('userid')}`)
            onSnapshot(playerRef, (querySnapshot) => {
                const playerData = querySnapshot.data()
                setTowers(playerData['towers'])
                setMissiles(playerData['missiles'])
            });
        }
    }, [gid]);
    const opponentBoardCells = [];
    for (let i = 0; i < 100; i++) {
        opponentBoardCells.push(<div className={`border w-5 h-5`} key={i}>X</div>)
    }
    return <div>
        <p>Game ID: {gid}</p>
        <div className="grid grid-cols-3 gap-1">
            <div className="w-96 h-96 grid grid-cols-10 gap-1">
                {getCells(towers)}
            </div>
            <div className="w-60 h-60 grid grid-cols-10 gap-1">
                {opponentBoardCells}
            </div>
        </div>
        <code>
            {JSON.stringify(towers)}
        </code>
    </div>
}

export default Game
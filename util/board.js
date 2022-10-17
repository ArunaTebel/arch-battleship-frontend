export const getCells = (boardConfig) => {
    console.log(boardConfig)

    const cells = [];
    for (let i = 0; i < 100; i++) {
        const cellConfig = boardConfig[i] ? boardConfig[i] : {};
        cells.push(
            <div className={getCellStyles(cellConfig)} key={i}>
                {getCellContent(cellConfig)}
            </div>
        )
    }
    return cells;
}

const getCellContent = (cellConfig) => {
    switch (cellConfig.type) {
        case 'x':
            return 'x'
        case 'xx':
            return 'xx'
        case 'xxx':
            return 'xxx'
        default:
            return '.'
    }
}

const getCellStyles = (cellConfig) => {
    let cellBgColor;
    if (cellConfig.health === 0) {
        cellBgColor = 'bg-red-900'
    } else if (cellConfig.health <= 0.25) {
        cellBgColor = 'bg-red-600'
    } else if (cellConfig.health <= 0.5) {
        cellBgColor = 'bg-red-300'
    } else if (cellConfig.health <= 0.75) {
        cellBgColor = 'bg-green-300'
    } else if (cellConfig.health < 1) {
        cellBgColor = 'bg-green-600'
    } else if (cellConfig.health === 1){
        cellBgColor = 'bg-green-900'
    } else {
        cellBgColor = ''
    }
    return `border text-center ${cellBgColor}`
}
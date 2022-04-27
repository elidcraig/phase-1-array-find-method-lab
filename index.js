function superbowlWin(record) {
    const result = record.find(isWin)
    if (typeof result === 'object') {
        return result.year
    } else {
        return result
    }
}

function isWin(season) {
    return (season.result === 'W')
}
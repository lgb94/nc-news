export const dateFormatter = (date) => {
    if (date === 'Just now'){
        return 'Just now'
    }
    const slice = date.slice(0, -1)
    const newDate = new Date(slice)
    const formattedDate = newDate.toLocaleString()
    return formattedDate
}


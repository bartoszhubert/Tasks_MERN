export const getActualFormattedDate = () => {
    const day = new Date().getDate();
    const month = new Date().getMonth() + 1;
    const formMonth = month < 10 ? '0' + month : month;
    const year = new Date().getFullYear();
    return `${year}/${formMonth}/${day}`;
}

export const setBtnColor = text => {
    if (text === 'INFO') return 'blue';
    if (text === 'WARNING') return 'orange';
    return 'red';
}
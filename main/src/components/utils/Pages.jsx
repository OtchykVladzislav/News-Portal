export const Pages = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const ButtonsPage = (totalPages) => {
    let result = [];
    for(let i = 0; i < totalPages; i++){
        result.push(i+1)
    }
    return result;
}
function jsonSort(jsonList) {
    if (jsonList === [null]) {
        return;
    }
    let jsonArray = [];
    for (let element of jsonList) {
        for (let i = 0; i < jsonArray.length + 1; i++) {
            if (jsonArray === [] || i === jsonArray.length) {
                jsonArray.push([]);
                jsonArray[jsonArray.length - 1].push(element);
                break;
            }
            if (element.category === jsonArray[i][0].category) {
                jsonArray[i].push(element);
                break;
            }
        }
    }
    return jsonArray;
}

export default jsonSort;

export const updateObjectInArray = (items, objPropName, userId, newObjProps) => {
    return items.map((i) => {
        if (i[objPropName] === userId) {
            return {...i, ...newObjProps};
        }
        return i;
    })

}

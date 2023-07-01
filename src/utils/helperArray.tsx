const helperArray = {
    filterArray(array:[], include = [], exclude = []) {
        let result = [...array];

        if (exclude.length > 0) {
            result = result.filter((item:any) => !exclude.includes(item.id));
        }
    
        if (include.length > 0) {
            result = result.filter((item:any) => include.includes(item.id));
        }
    
        return result;
    }
};

export default helperArray;

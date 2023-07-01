const helperString = {
    excerpt(text:string, value:number) {
        if (text.length > value) text = text.substring(0,value) + "...";
        return text
    }
}

export default helperString;

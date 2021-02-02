function utility() {
    function setData(key, value) {
        if(key && value) {
            var stringValue = JSON.stringify(value);
            localStorage.setItem(key, stringValue)
        } else {
            console.error("key or value is invalid");
        }
        
    }

    function getData(key) {
        if(key) {
            var stringValue = localStorage.getItem(key);
            if(isJson(stringValue)) return JSON.parse(stringValue);
        } else {
            console.error("key is invalid");
        }
        return null;
    }

    function isJson(params) {
        try {
            JSON.parse(params);
            return true;
        } catch (e) {
            console.error("value cannot be parsed");
        } 
        return false;
    }

    return {
        setData: setData,
        getData: getData,
        isJson: isJson
    }
}
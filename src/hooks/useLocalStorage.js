import React from "react";

function useLocalStorage(initialValue) {
    const [value, setValue] = useState(initialValue);
    return [value, setValue];
}

export default useLocalStorage;

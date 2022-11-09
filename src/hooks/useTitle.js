const { useEffect } = require("react")

const useTitle = title =>{
    useEffect( () => {
        document.title = `${title} - Ahsan Photography`;
    }, [title])
}

export default useTitle;
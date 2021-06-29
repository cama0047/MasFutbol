
export async function getData() {

    try {
        let URL
        URL = `https://www.scorebat.com/video-api/v1/`

        const response = await fetch(URL)
        if (!response.ok) throw new Error(response.statusText)
        return response.json()

    } catch (error) {
        // handle error
        console.log(error)
    }

}
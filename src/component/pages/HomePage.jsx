import MyName from "./MyName"
import Photo from "./photoProdacte"
function Home() {
    let arrayPhoto = ["IMG.jpg", "IMGG.png", "IMGGG.jpg", "img3.png", "NIKE.png"]
    return (
        <>
            <div>
                <h1>welcome world</h1>

            </div>
            <MyName name="nati" />
            <MyName name="natan" />
            {
                arrayPhoto.map((item) => {
                    return (

                        <Photo img={`./img/${item} `} />
                    )
                })
            }
        </>
    )
}
export default Home
import { useNavigate } from "react-router-dom";
 const Information = () => {
    const navigate = useNavigate();

    const redirectToNewMovies = () => {
        navigate('/movies',{
            state: {
                new: true
            }
        })
    }

    const redirectToPulp = () => {
        navigate('/movies',{
            state: {
                name: "Pulp Fiction"
            }
        })
    }
    

    return (
        <main>
            <h1>Information Page</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
                laborum amet ab cumque sit nihil dolore modi error repudiandae
                perspiciatis atque voluptas corrupti, doloribus ex maiores quam magni
                mollitia illum dolor quis alias in sequi quod. Sunt ex numquam hic
                asperiores facere natus sapiente cum neque laudantium quam, expedita
                voluptates atque quia aspernatur saepe illo, rem quasi praesentium
                aliquid sed inventore obcaecati veniam? Nisi magnam vero, dolore
                praesentium totam ducimus similique asperiores culpa, eius amet
                repudiandae quam ut. Architecto commodi, tempore ut nostrum voluptas
                dolorum illum voluptatum dolores! Quas perferendis quis alias excepturi
                eaque voluptatibus eveniet error, nulla rem iusto?
            </p>
            <div onClick={redirectToNewMovies}>Go to new movies</div>
            <div onClick={redirectToPulp}>Go to Pulp Fiction</div>
        </main>
    )
}

export default Information
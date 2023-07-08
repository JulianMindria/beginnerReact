import React, {useState, useEffect} from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'
import Details from '../../component/details'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function details() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const params = useParams()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [details, setDetails] = useState([])

    const getMovies = async () => {
        try {
            const {data} = await axios.get('http://localhost:8333/movie/'+params.id)
            setDetails(data.data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        getMovies()
    }, [])
    

  return (
    <>
        <Header/>
        {details.map((v)=>{
            return <Details title={v.title} image={v.movie_banner} genre={v.genre_id} duration={v.duration} director={v.director} synopsis={v.synopsis}/>
        })}
        <Footer/>
    </>
  )
}

export default details
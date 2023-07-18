import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from '../../component/header'
import Footer from '../../component/footer'
import Updateform from '../../component/updateForm'
import { useParams } from 'react-router-dom'



function update() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const params = useParams()

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [update, setUpdate] = useState([])

    const getMovies = async () => {
        try {
            const {data} = await axios.get('http://localhost:8333/movie/'+params.id)
            setUpdate(data.data)
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
        <Header />
        {update.map((v)=>{
            return <Updateform id={v.movie_id} names={v.title} dates={v.date_released} genres={v.genres} cast={v.casts} directors={v.director} syn={v.synopsis} images={v.movie_banner} durations={v.duration} />
        })}
        <Footer />
    </>
  )
}

export default update
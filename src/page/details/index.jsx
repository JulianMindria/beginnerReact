import React, {useState, useEffect} from 'react'
import Header from '../../component/header'
import Footer from '../../component/footer'
import Details from '../../component/details'
import { Link, useParams } from 'react-router-dom'
import moment from 'moment'
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
        } catch (error) {
            console.log(error)
        }
    }

    
    details.map((v) => {
        const date = moment(v.date_released)
        v.date_released = date.format('DD MMMM YYYY')
        console.log(typeof(v.date_released))
    })

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        getMovies()
    }, [])
    

  return (
    <>
        <Header/>
        {details.map((v)=>{
            return <Details title={v.title} image={v.movie_banner} genre={v.genres} duration={v.duration} director={v.director} synopsis={v.synopsis} date={v.date_released}/>
        })}
        <Footer/>
    </>
  )
}

export default details
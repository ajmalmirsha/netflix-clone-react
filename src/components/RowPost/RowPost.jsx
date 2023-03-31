import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY,baseUrl,imageUrl } from '../../constatnts/constants'
import Youtube from 'react-youtube'


function RowPost(props) {
  const [movies,setMovie] = useState([])
  const [movieid,setMovieid] = useState()
  useEffect(()=>{
   axios.get(props.url).then((response)=>{
   console.log('tisss');
    console.log(response.data.results);

   console.log('movie');
console.log(movies);
   setMovie(response.data.results)
   }) 
  },[])
  const opts ={
    height: '390',
    width: '100%',
    playerVars:{
      autoplay:1
    }
  }
  function moviePlay(id){
   console.log('id :',id);
   axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response);
    if(response.data.results.length !== 0){
      setMovieid(response.data.results[0])
    
    }else{
      setMovieid('')
 
    }
   })
  }
return (
  <div className='row'>
    <h2>{props.title}</h2>
    <div className="posters">
      {movies.map((x) => (
        <img onClick={()=>moviePlay(x.id)} className={props.isSmall? 'smallPoster' :'poster'} src={`${imageUrl+x.backdrop_path}`} alt="" />
      ))}
    </div>
    {
      movieid && <Youtube opts={opts} videoId={movieid?.key} /> 
    }
    
  </div>
)
}

export default RowPost

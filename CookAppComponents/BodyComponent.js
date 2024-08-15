import { useState , useEffect } from "react";
import CookApiURL from "../CookAPIs/CookingAPI"
import SkeletonLoader from "./SkimmerComponent";

const BodyComp = ()=>{
    console.log('body')
    let getApiData = CookApiURL;
    let [AllReciepes,setAllReciepes] = useState();
    let [searchedText,setsearchedText] = useState();
    

    const loadAPIData = async(getApiData)=>{
        try {
            let resposne = await fetch(getApiData);
            if(!resposne.ok){
                console.log("Response Failed From API")
            }
            let data =  await resposne.json();
            setAllReciepes(data);   
        } catch (error) {
            console.log(error);
            return ""
        }
    }
    
    const getSearchedReciepe = ()=>{
        let searchedText = document.getElementById("searchedReciepe").value;
        let SearchAPI = `${CookApiURL}=${searchedText}`;
        loadAPIData(SearchAPI);
    }

    const testfunc = ()=>{
        setsearchedText("Changed Text")
    }

const ReciepeCard = (props)=>{

    let Ingredients = Object.keys(props.props).filter(item=>item.includes('strIngredient'));
    let measurements = Object.keys(props.props).filter(item=>item.includes('strMeasure'));
    let recepcontent = (<div className="recep">
        <img height="250px" width="350px" src={props.props.strMealThumb}></img>
        <h4>The Reciepe Name : {props.props.strMeal}</h4>
        <h4>The Origin Country : {props.props.strArea}</h4>
        <h4>Reciepe Type  : {props.props.strCategory}</h4>
        <h4>Ingredients And Their measurements</h4>
        {Ingredients.map((item,index)=>{
            if(index<6){
                return (<h5 key={index}>{props.props[item]} : {props.props[measurements[index]]} </h5>)
            }
            else return ""
           
        })}
        <h4> {props.props.strInstructions}</h4>

    </div>)
    return recepcontent
}

useEffect(()=>{loadAPIData(CookApiURL),console.log("Use Effect Called")},[])

    let bodycontent = ( <div id="BodyContent">
        <div id="SearchBar">
            <input type="text" id="searchedReciepe" placeholder="Search For Your Reciepe"></input>
            <button onClick={()=>getSearchedReciepe()} id="searchFood">Search</button>
            {/* <button onClick={()=>testfunc()} id="test">Test</button> */}
        </div>
        <div id="AllCards">
        { !!AllReciepes && !!AllReciepes.meals ?  AllReciepes.meals.map((item,index)=>(<ReciepeCard key = {index} props = {item} />)) :<SkeletonLoader/>}
        </div>
        
    </div>)
    return bodycontent    
}

export default BodyComp
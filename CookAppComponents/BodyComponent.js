import { useState , useEffect } from "react";
import CookApiURL from "../CookAPIs/CookingAPI"
import SkeletonLoader from "./SkimmerComponent";
import { Card } from "antd";

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
    
    let recepcontent = (<div className="CardsMultiple">
       <Card 
       title={props.props.strMeal} 
       extra={<a href="#">More</a>}
      style={{
        width: 800,
      }}>
        <div className="CardContent">
        <img height="250px" width="350px" src={props.props.strMealThumb}></img>
        <h3>The Reciepe Name : {props.props.strMeal}</h3>
        <h3>The Origin Country : {props.props.strArea}</h3>
        <h3>Reciepe Type  : {props.props.strCategory}</h3>
        <h3>Ingredients And Their measurements</h3>
        {Ingredients.map((item,index)=>{
            if(index<6){
                return (<h3 key={index}>{props.props[item]} : {props.props[measurements[index]]} </h3>)
            }
            else return ""
           
        })}</div>
        <h4> {props.props.strInstructions}</h4>
        </Card>
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
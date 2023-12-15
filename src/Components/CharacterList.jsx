import { EyeSlashIcon } from "@heroicons/react/24/outline";
import { allCharacters } from '../../data/data'
import { useState } from "react";

function CharacterList({characters}) {
    return (
        <div className="w-full overflow-auto sm:w-1/2 md:w-1/3">
            {characters.map((item) => (
                <Character key={item.id} item={item} />
            ))}
        </div>

    );
}

export default CharacterList;

function Character({ item }) {
    return (

  <div className="mb-2 grid grid-cols-4 gap-x-2 gap-y-2 bg-slate-700 rounded-lg p-4 m-4 cursor-pointer transition duration-200 ease-out hover:bg-slate-600">
<CharacterName item={item}/>
 <CharacterInfo item={item}/>
    <div className="col-span-1 flex justify-end items-center">
      <button className="text-rose-500 w-10 h-16">
        <EyeSlashIcon  item={item}/>
      </button>
    </div>
  </div>
    )
}

function CharacterName({item}){
  return(
    <div className="col-span-2 sm:col-span-1 ">
    <img alt={item.title} src={item.image} className=" block w-full h-atuo max-h-fit object-cover object-center rounded-lg" />
  </div>
  )
}

function CharacterInfo({item}){
  return(
    <div className="col-span-2 flex flex-col">
    <h3 className="mb-7 text-slate-200 text-xs lg:text-xl md:text-lg  font-bold sm:text-md">
      <span>{item.gender === "Male" ? "👱🏻‍♂️" : "👩🏻‍🦳"}</span>
      <span>{item.name}</span>
    </h3>
    <div className="text-slate-200 bottom-0  text-xs sm:text-md md:text-lg lg:text-xl">
      <span className={`inline-block w-3 h-3 rounded-lg bg-green-600 ${item.status === "Dead" ? "bg-rose-600" : ""}`}></span>
      <span>{item.status}</span>
      <span>- {item.species}</span>
    </div>
  </div>
  )
}
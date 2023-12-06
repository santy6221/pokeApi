"use client";
import 'bootstrap/dist/css/bootstrap.css';
// import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
// import path from "path"
// import { promises as fs } from 'fs';
import { useEffect } from "react";
import { useState } from 'react';

export default function Home(message) {
  // const [data, setData] = useState()
  // const [isLoading, setLoading] = useState(true)

  // const getData = () => {
  //   fetch('https://pokeapi.co/api/v2/pokemon/squirtle', {
  //     headers: {
  //       'Content-Type': 'application.json',
  //       'Accept': 'application.json'
  //     }
  //   }).then(function (response) {
  //     return response.json();
  //   }).then(function (myJson) {
  //     console.log(myJson);
  //     setData(myJson);
  //   })
  // }

  useEffect(() => {
    console.log(message);
    // console.log(second);
    // fetch('https://pokeapi.co/api/v2/pokemon/squirtle', {
    //   headers: {
    //     'Content-Type': 'application.json',
    //     'Accept': 'application.json'
    //   }
    // }).then(function (response) {
    //   return response.json();
    // }).then(function (myJson) {
    //   // console.log(myJson);
    //   setData(myJson);
    //   setLoading(false)
    // }, []);
    // getData();
    import("bootstrap/dist/js/bootstrap");
    // fetch('https://pokeapi.co/api/v2/pokemon/charmander', {
    //   headers: {
    //     'Content-Type': 'application.json',
    //     'Accept': 'application.json'
    //   }
    // }).then(function(response){
    //   // console.log(response);
    //   // return response.json();
    // }).then(function(myJson){
    //   console.log(myJson);
    //   setData(myJson);
    //   setLoading(false);
    // }, []);
  }, []);

  // if (isLoading) {
  //   return <p>loading... </p>
  // }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="topnav" width="100vw">
        <a className="active" href="#home">Home</a>
      </div>
      <div>
        <div className="card" >
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body row g-0">
            <h5 className="card-title">nada</h5>
            <a href="/charmander" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        <div className="card" >
          <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" className="card-img-top" alt="..." />
          <div className="card-body row g-0">
            <h5 className="card-title">nada</h5>
            <a href="/squirtle" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </main>
  )


}

export async function GetServerSideProps(){
  const [firtsRes, secondRes] = await Promise.all([
    fetch('https://pokeapi.co/api/v2/pokemon/squirtle'),
    fetch('https://pokeapi.co/api/v2/pokemon/charmander')
  ]);
  const [first, second] = await Promise.all([
    firtsRes.json(),
    secondRes.json()
  ]);
  console.log(first);
  return {props: {message: "Funca o no funca?"}}
}

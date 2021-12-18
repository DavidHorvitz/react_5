import React from "react";
import Table from "../Display_Components/Table";


function Tableprop(){
  let user = [{
    name: 'rivi',
    lastName:'Horvitz',
    age: 25,
    id:3435,

    },
  {
    name: 'david',
    lastName:'Horvitz',
    age: 24,
    id:34335,
    },
  {
    name: 'shri',
    lastName:'Horvitz',
    age: 5,
    id:345,
    },
   {
    name: 'mali',
    lastName:'Horvitz',
    age:4,
    id:67874,
    },
   {
    name: 'shmulik',
    lastName:'Horvitz',
    age: 1.5,
    id:9484,
    }];
    
  
   
    return (
    <div><Table user={user[0]} />
    <Table user={user[1]} />
    <Table user={user[2]} />
    <Table user={user[3]} />
    <Table user={user[4]} />
    </div>
    );
}
export default Tableprop;
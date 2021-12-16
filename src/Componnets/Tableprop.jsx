import React from "react";
import Table from "../Display_Components/Table";

function Tableprop(props){
    const rivi = {
        name: 'rivi',
        lastName:'Horvitz',
        age: 25,
        id:3435,
    
        };
      const david = {
        name: 'david',
        lastName:'Horvitz',
        age: 24,
        id:34335,
        };
      const shri = {
        name: 'shri',
        lastName:'Horvitz',
        age: 5,
        id:345,
        };
      const mali = {
        name: 'mali',
        lastName:'Horvitz',
        age:4,
        id:67874,
        };
      const shmulik = {
        name: 'shmulik',
        lastName:'Horvitz',
        age: 1.5,
        id:9484,
        };
  
   
    return (
    <div><Table user={david} />
    <Table user={rivi} />
    <Table user={shri} />
    <Table user={mali} />
    <Table user={shmulik} />
    </div>
    );
}
export default Tableprop;
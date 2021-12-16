import React from "react";
import '../table.css';

function Table(props) {
    const { age, name,lastName ,id } = props.user;

 return (
        <div>
            <table>
                <tr>
                   
                    <td>{name}</td>
                    <td>{lastName}</td>
                    <td>{age}</td>
                    <td>{id}</td>
                </tr>
            
            </table>
        </div>
    )
}
export default Table;
import React from 'react'
import {INFO} from '../Content/InfoData.js'


export default function Info() {
    const menu = INFO
    console.log(menu);
    return (
        menu.map(function(item){
            return <div className='col-lg-10'>
                <div className="title">{item.title}</div>
                <div className="discrip">{item.discription}</div>
            </div>
        })       
    )
    
    
}

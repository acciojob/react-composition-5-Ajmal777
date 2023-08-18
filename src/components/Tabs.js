import React , {useState} from "react";

const Tabs = ({list}) =>{
    const [tab, setTab] = useState(()=>{
        return `${list[0].title} ${list[0].content}`;
    });
    return (
        <div className="tabs">
            <ul>
                {
                    list.map(item => {
                        return <li onClick={()=>setTab(`${item.title} ${item.content}`)}>{item.title} {item.content}</li>
                    })
                }
            </ul>
            <p>Content for {tab}</p>
        </div>
    )
}

export default Tabs;
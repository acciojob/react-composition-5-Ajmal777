import React , {useState} from "react";

const Tabs = ({list}) =>{
    const [tab, setTab] = useState('');
    return (
        <div className="tabs">
            <ul>
                {
                    list.map(item => {
                        return <li onClick={()=>setTab(`${item.title} ${item.content}`)}>{item.title} {item.content}</li>
                    })
                }
            </ul>
            {tab && <p>Content for {tab}</p>}
        </div>
    )
}

export default Tabs;
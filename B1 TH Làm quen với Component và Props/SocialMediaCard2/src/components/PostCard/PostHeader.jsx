import Avatar from "../Avatar";

export default function PostHeader({avatar, username, time }) {

    return(
        <div  style={{ display: "flex", gap: "10px", alignItems: "center" }}>   
            <Avatar src = {avatar} />
            <div>
                <h4>{username}</h4>
                <small>{time}</small>
            </div>
        </div>
        
    );
}
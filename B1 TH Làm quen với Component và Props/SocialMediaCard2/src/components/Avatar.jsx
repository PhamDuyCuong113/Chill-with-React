export default function Avatar({src}) {

    return(
        <img
            src={src}
            alt="Avatar"
            style={{width: "50px", borderRadius: "50%"}}
        />
    );
}
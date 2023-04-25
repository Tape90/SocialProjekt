export default function Headline({text}) {
    return(
    <>
        <h1 style={{
            textAlign:"center",
            color: "green",
            fontSize: "36px",
            marginTop: "20px"
        }}>{text}</h1>
    </>
    );
}
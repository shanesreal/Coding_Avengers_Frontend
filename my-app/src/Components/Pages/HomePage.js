import MyButton from "../Buttons/MyButton"

export const HomePage = () => {

    return (
        <>
        <div>Welcome to Trivial Compute</div>
        <MyButton name={"New Game"} /><MyButton name={"Load Game"} /><MyButton name={"Settings"}/>
        <MyButton name={"Leaderboard"}/>
        </>
    )
}

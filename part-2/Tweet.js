// Define a Tweet component which takes as props the username of the user who wrote the tweet, the name of the user who wrote the tweet, the date of the tweet, and the message being tweeted.

const Tweet = ({username, name, date, msg}) => {
    return(
        <div>
            <h4>{username}</h4>
            <h6>{name} || {date}</h6>
            <h2>{msg}</h2>
        </div>
    )
}
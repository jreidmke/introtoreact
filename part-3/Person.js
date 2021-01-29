const Person = ({name, age, hobbies=[]}) => {
    return(
        <div>
            <p>Learn some more information about this person</p>
            {age > 18 ? "Please go vote!" : "You must be 18 to vote"}
            {name.length > 8 ? name.slice(0, 6) : name}
            <ul>
                {hobbies.map(h => (
                    <li>{h}</li>
                ))}
            </ul>
        </div>
    )
}
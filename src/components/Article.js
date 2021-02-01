function Article({title, date="January 1, 1970", preview, minutes}){
    console.log(minutes)
    function numOfEmojis(minutes){
        let num = 0;
        let emoji = "";
        if(minutes < 30){
            num = Math.ceil(minutes / 5);
            for (let i = 0; i < num; i++){
                emoji += "☕️";
            }
            return  emoji + minutes + " min read";
        } else {
            num = Math.ceil(minutes / 10);
            for (let i = 0; i < num; i++){
                emoji += "🍱";
            }
            return emoji + minutes + " min read";
        }
    }
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}-{numOfEmojis(minutes)}
            </small>
            <p>{preview}</p>
        </article>
    );   
}

export default Article;
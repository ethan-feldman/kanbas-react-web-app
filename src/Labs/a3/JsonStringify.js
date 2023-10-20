function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    const loggedIn = true;

    return (
        <div>
            <h3>JSON Stringify</h3>
            <br/>
            loggedIn = {loggedIn}
            <br />
            loggedIn = {JSON.stringify(loggedIn)}
            squares = {squares}
            <br />
            squares = { JSON.stringify(squares) } <br /> 
        </div>
    );
}
export default JsonStringify;

const Header = () => {
    return (

        <div className="box">
            <div className="Format">
                <h3>Login Form</h3></div>
            <div className="Email">
                <label>Email or Phone</label><input class="button1" type="email"></input></div>
            <div className="Password"><label>Password</label>
                <br></br><input class="button1" type="text"></input>
                <br></br>
                <a href="Forget Password?">Forget Password?</a>
            </div>
            <div className="Loginnow">
                <input type={"submit"} value="LOGIN"></input>
                <br></br><br></br><p9>Not a Member?   <a href="Signup Now!">Signup Now!</a></p9>
            </div>
        </div>
    )
}

export default Header

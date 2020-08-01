const components = {};
components.registerScreen = `
<div class="register-container">
<div class="aside-mid">
    <div class="header">
        <h1 class="register-logo">linkedin</h1>
        <h3 class="register-content">Make the most of your professional life</h3>
    </div>
    <!-- ----------form-design------ --------------->
    <form id="register-form">
        <div class="input-wrapper">
            <div class="element-content">First name</div>
            <input type="text" name="firstName" placeholder="Please input your first name">
            <div class="error" id="first-name-error"></div>
        </div>
        <div class="input-wrapper">
            <div class="element-content">Last name</div>
            <input type="text" name="lastName" placeholder="Please input your last name">
            <div class="error" id="last-name-error"></div>
        </div>
        <div class="input-wrapper">
            <div class="element-content">Email</div>
            <input type="text" name="email" placeholder="Please input your first name">
            <div class="error" id="email-error"></div>
        </div>
        <div class="input-wrapper">
            <div class="element-content">Password (6 or more characters)</div>
            <input type="password" name="password" placeholder="Please input your first name">
            <div class="error" id="password-error"></div>
        </div>
        <span id = "content-explain">
            By clicking join now, you agree to LinkedLn's User Agreemen, <br>
            Privacy policy, and Cookie Policy.
        </span>
        <div class="btn-join" >
            <button type="submit" class="btn">Join now</button>
        </div>
        <div id="line-to-line"> or </div>
        <div class="btn-login-with-facebook" >
            <button id="sign-in-facebook" class="btn" >Continue with Facebook   </button>
            <i id="facebook-icon" class="fab fa-facebook-f"></i>
        </div>
        <span class="sign-in-container">
            Already on Linkedln?
            <div id="redirect-to-sign-in" clas = "cursor" >Sign in</div>
        </span>

    </form>
    <div class="footer">
        <h4>LinkedIn Corporation @ 2016</h4>
    </div>

</div>




</div>
`;
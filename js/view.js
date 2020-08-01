const view = {};
view.setAtiveScreen = (screenName) => {
    switch (screenName) {
        case `registerScreen`:
            document.getElementById("app").innerHTML = components.registerScreen;
            const registerForm = document.getElementById("register-form");
            registerForm.addEventListener("submit", (event) => {
                event.preventDefault();
                const data = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                };
                console.log(data);
                controller.register(data);
            });
            break;
    }
}
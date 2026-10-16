/* =========================
   PURPLE YUM JAVASCRIPT
========================= */


/* =========================
   MOBILE NAVIGATION
========================= */

const menuButton =
    document.querySelector(".menu-btn");

const navigation =
    document.querySelector(".nav-links");


if (menuButton) {

    menuButton.addEventListener(
        "click",
        function () {

            navigation.classList.toggle("open");

        }
    );

}


/* =========================
   DARK / LIGHT MODE
========================= */

const themeButton =
    document.querySelector("#themeBtn");


const savedTheme =
    localStorage.getItem(
        "purpleYumTheme"
    );


if (savedTheme) {

    document.documentElement.dataset.theme =
        savedTheme;

}


/* Update icon */

function updateThemeIcon() {

    if (!themeButton) return;

    if (
        document.documentElement.dataset.theme
        === "dark"
    ) {

        themeButton.textContent = "☀";

    } else {

        themeButton.textContent = "☾";

    }

}


updateThemeIcon();


if (themeButton) {

    themeButton.addEventListener(
        "click",
        function () {

            const isDark =
                document.documentElement.dataset.theme
                !== "dark";


            if (isDark) {

                document.documentElement.dataset.theme =
                    "dark";

                localStorage.setItem(
                    "purpleYumTheme",
                    "dark"
                );

            } else {

                document.documentElement.dataset.theme =
                    "light";

                localStorage.setItem(
                    "purpleYumTheme",
                    "light"
                );

            }


            updateThemeIcon();

        }
    );

}


/* =========================
   PRODUCT POPUP
========================= */

const productButtons =
    document.querySelectorAll(
        ".open-menu"
    );


const modal =
    document.querySelector(
        "#productModal"
    );


const modalTitle =
    document.querySelector(
        "#modalTitle"
    );


const modalText =
    document.querySelector(
        "#modalText"
    );


const closeButton =
    document.querySelector(
        ".close"
    );


productButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const productName =
                    button.dataset.name;

                const productDescription =
                    button.dataset.description;


                modalTitle.textContent =
                    productName;


                modalText.textContent =
                    productDescription;


                modal.classList.add(
                    "show"
                );

            }
        );

    }
);


/* CLOSE MODAL */

if (closeButton) {

    closeButton.addEventListener(
        "click",
        function () {

            modal.classList.remove(
                "show"
            );

        }
    );

}


/* CLOSE WHEN CLICKING OUTSIDE */

if (modal) {

    modal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === modal
            ) {

                modal.classList.remove(
                    "show"
                );

            }

        }
    );

}


/* =========================
   CONTACT FORM
========================= */

const contactForms =
    document.querySelectorAll(
        ".contact-form"
    );


contactForms.forEach(
    function (form) {

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                alert(
                    "Thank you for contacting Purple Yum! 💜\n\nWe will get back to you soon."
                );


                form.reset();

            }
        );

    }
);
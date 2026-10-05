/* =====================================================
   MOBILE MENU
===================================================== */

const menu = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav");


menu.addEventListener("click", () => {

    const isOpen =
        nav.classList.toggle("open");

    menu.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const navLinks =
    document.querySelectorAll(".nav a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


/* =====================================================
   SECTION ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav a"
    );


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {

                    return;

                }


                const currentSection =
                    entry.target.id;


                navigationLinks.forEach(link => {

                    const linkSection =
                        link.getAttribute("href");


                    link.classList.toggle(
                        "active",
                        linkSection ===
                        `#${currentSection}`
                    );

                });

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.1
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   TOAST MESSAGE
===================================================== */

const toast =
    document.getElementById("toast");


function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        }, 2500);

}


/* =====================================================
   PROJECT PLACEHOLDER BUTTONS
===================================================== */

const placeholderLinks =
    document.querySelectorAll(
        ".placeholder-link"
    );


placeholderLinks.forEach(link => {

    link.addEventListener(
        "click",
        event => {

            event.preventDefault();


            const message =
                link.dataset.placeholder;


            showToast(
                message ||
                "This link can be added later."
            );

        }
    );

});


/* =====================================================
   RESUME PLACEHOLDER
===================================================== */

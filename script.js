const cards = document.querySelectorAll(".luggage_card");
const skills = document.querySelectorAll(".skills_list");

cards.forEach((card) => {
    card.addEventListener("click", () => {
        cards.forEach((c) => {
            c.classList.remove("is_active")
        })
        skills.forEach((s) => {
            s.classList.remove("on_screen")
        })
        card.classList.add("is_active")
        const luggage = document.getElementById(card.dataset.tab);
        luggage.classList.add("on_screen");
    })
});

const filter_buttons = document.querySelectorAll(".filter_button");
const entries = document.querySelectorAll(".entry");

filter_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        filter_buttons.forEach((btn) => {
            btn.classList.remove("is_active")
        })
        button.classList.add("is_active");
        const filter = button.dataset.filter;
        entries.forEach((entry) => {
            const techs = entry.dataset.tech.split(" ");
            const has_tech = filter === "all" || techs.includes(filter);
            entry.classList.toggle("is_hidden", !has_tech);
            entry.classList.toggle("is_shown", has_tech);
        })
    })
});

const dialog_buttons = document.querySelectorAll("[data-dialog]");

dialog_buttons.forEach((button) => {
    const dialog = document.getElementById(button.dataset.dialog);
    button.addEventListener("click", () => {
        dialog.showModal();
    });
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            dialog.close();
        }
    });
})

const contact_form = document.querySelector(".contact_form");

contact_form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = contact_form.elements.name.value.trim();
    const email = contact_form.elements.email.value.trim();
    const message = contact_form.elements.message.value.trim();
    const subject = `Contact portfolio - ${name}`;
    const body = `${message}\n\n--\n${name}`;
    window.location.href = `mailto:${contact_form.dataset.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

const nav_toggle = document.querySelector(".nav_toggle");
const main_nav = document.querySelector(".main-nav");

nav_toggle.addEventListener("click", () => {
    const is_open = main_nav.classList.toggle("is_open");
    nav_toggle.setAttribute("aria-expanded", is_open);
});

const nav_close = document.querySelector(".nav_close");

function close_menu() {
    main_nav.classList.remove("is_open");
    nav_toggle.setAttribute("aria-expanded", false);
}

main_nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", close_menu);
});

nav_close.addEventListener("click", () => {
    close_menu();
    nav_toggle.focus({ preventScroll : true });
});

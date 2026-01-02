import coockie from "js-cookie";

export function Toggle_Theme(Active: boolean) {
    const htmlElement = document.documentElement as HTMLElement;
    const button = document.getElementById("theme-toggle-button") as HTMLButtonElement;
    switch (Active) {
        case true:
            if (htmlElement.classList.contains("dark")) {
                button!.innerText = "☀️";
                htmlElement.classList.remove("dark");
                localStorage.setItem("theme", "light");
                coockie.set("theme", "light");
            } else {
                button!.innerText = "🌙";
                htmlElement.classList.add("dark");
                localStorage.setItem("theme", "dark");
                coockie.set("theme", "dark");
            }
            break;
        case false:
            if (coockie.get("theme") || localStorage.getItem("theme") === "dark") {
                button!.innerText = "🌙";
                htmlElement.classList.add("dark");
            } else {
                button!.innerText = "☀️";
                htmlElement.classList.remove("dark");
            }
            break;
    }
}
import { DEVICE_type } from "uadetect";

let navText: HTMLElement = document.querySelector(".navText");

if (DEVICE_type === "mobile") {
    navText.style.display = "block";
}
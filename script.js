// ✅ Replace this with your real email
const WAITLIST_EMAIL = "lee-bellas-NPLH@outlook.com";

const toggleBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");

if (toggleBtn && nav) {
  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("waitlistForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const payload = {
      name: data.get("name") || "",
      email: data.get("email") || "",
      phone: data.get("phone") || "",
      ageGroup: data.get("ageGroup") || "",
      schedule: data.get("schedule") || "",
      transport: data.get("transport") || "",
      notes: data.get("notes") || ""
    };

    const subject = encodeURIComponent("Founding Families Waitlist Request - Lee-Bella’s CDC");
    const body = encodeURIComponent(
      `Founding Families Waitlist Request\n\n` +
      `Name: ${payload.name}\n` +
      `Email: ${payload.email}\n` +
      `Phone: ${payload.phone}\n` +
      `Child Age Group: ${payload.ageGroup}\n` +
      `Care Needed: ${payload.schedule}\n` +
      `Transportation Needed: ${payload.transport}\n` +
      `Notes: ${payload.notes}\n`
    );

    const mailto = `mailto:${WAITLIST_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  });
}

function addRightsReserved() {
    const rightsContainer = document.querySelector('.rights');

    if (!rightsContainer) return;

    try {
        const zdt = Temporal.Now.zonedDateTimeISO('Europe/Amsterdam');
        const year = zdt.year;

        rightsContainer.textContent = `© ${year} Wouter's Kindercore. All rights reserved.`;
    } catch (error) {
        rightsContainer.textContent = `© Wouter's Kindercore. All rights reserved.`
    }
}

window.addEventListener('load', () => {
   addRightsReserved();
});

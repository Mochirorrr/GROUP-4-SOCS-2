document.addEventListener("DOMContentLoaded", function () {
    const monthYear = document.getElementById("month-year");
    const calendarGrid = document.getElementById("calendar-grid");
    const prevMonthBtn = document.getElementById("prev-month");
    const nextMonthBtn = document.getElementById("next-month");
    const eventDate = document.getElementById("event-date");
    const eventTitle = document.getElementById("event-title");
    const addEventBtn = document.getElementById("add-event");
    const eventList = document.getElementById("event-list");

    let currentDate = new Date();
    let events = JSON.parse(localStorage.getItem("events")) || {};

    function renderCalendar() {
        calendarGrid.innerHTML = "";
        let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        let totalDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

        monthYear.innerText = currentDate.toLocaleDateString("id-ID", { month: "long", year: "numeric" });

        for (let i = 0; i < firstDay; i++) {
            let emptyDiv = document.createElement("div");
            emptyDiv.classList.add("day");
            emptyDiv.style.visibility = "hidden";
            calendarGrid.appendChild(emptyDiv);
        }

        for (let i = 1; i <= totalDays; i++) {
            let dayDiv = document.createElement("div");
            dayDiv.classList.add("day");
            dayDiv.innerText = i;
            let dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;

            if (events[dateStr]) {
                dayDiv.classList.add("has-event");
            }

            dayDiv.addEventListener("click", function () {
                eventDate.value = dateStr;
            });

            calendarGrid.appendChild(dayDiv);
        }
    }

    function renderEvents() {
        eventList.innerHTML = "";
        for (let date in events) {
            events[date].forEach((event, index) => {
                let li = document.createElement("li");
                li.innerText = `${date}: ${event}`;

                let deleteBtn = document.createElement("button");
                deleteBtn.innerText = "Hapus";
                deleteBtn.classList.add("delete");
                deleteBtn.addEventListener("click", function () {
                    deleteEvent(date, index);
                });

                li.appendChild(deleteBtn);
                eventList.appendChild(li);
            });
        }
    }

    function deleteEvent(date, index) {
        events[date].splice(index, 1);
        if (events[date].length === 0) {
            delete events[date];
        }
        localStorage.setItem("events", JSON.stringify(events));
        renderCalendar();
        renderEvents();
    }

    addEventBtn.addEventListener("click", function () {
        let date = eventDate.value;
        let title = eventTitle.value.trim();
        if (date && title) {
            if (!events[date]) events[date] = [];
            events[date].push(title);
            localStorage.setItem("events", JSON.stringify(events));
            eventTitle.value = "";
            renderCalendar();
            renderEvents();
        }
    });

    prevMonthBtn.addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
    renderEvents();
});


document.addEventListener("DOMContentLoaded", function () {
    const monthYear = document.getElementById("month-year");
    const calendarGrid = document.getElementById("calendar-grid");
    const prevMonthBtn = document.getElementById("prev-month");
    const nextMonthBtn = document.getElementById("next-month");
    const eventDate = document.getElementById("event-date");
    const eventTitle = document.getElementById("event-title");
    const addEventBtn = document.getElementById("add-event");
    const eventList = document.getElementById("event-list");

    let currentDate = new Date();
    let events = JSON.parse(localStorage.getItem("events")) || {};

    function renderCalendar() {
        calendarGrid.innerHTML = "";
        let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
        let totalDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

        monthYear.innerText = currentDate.toLocaleDateString("id-ID", { month: "long", year: "numeric" });

        for (let i = 0; i < firstDay; i++) {
            let emptyDiv = document.createElement("div");
            emptyDiv.classList.add("day");
            emptyDiv.style.visibility = "hidden";
            calendarGrid.appendChild(emptyDiv);
        }

        for (let i = 1; i <= totalDays; i++) {
            let dayDiv = document.createElement("div");
            dayDiv.classList.add("day");
            dayDiv.innerText = i;
            let dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;

            if (events[dateStr]) {
                dayDiv.classList.add("has-event");
            }

            dayDiv.addEventListener("click", function () {
                eventDate.value = dateStr;
            });

            calendarGrid.appendChild(dayDiv);
        }
    }

    function renderEvents() {
        eventList.innerHTML = "";
        for (let date in events) {
            events[date].forEach(event => {
                let li = document.createElement("li");
                li.innerText = `${date}: ${event}`;
                eventList.appendChild(li);
            });
        }
    }

    addEventBtn.addEventListener("click", function () {
        let date = eventDate.value;
        let title = eventTitle.value.trim();
        if (date && title) {
            if (!events[date]) events[date] = [];
            events[date].push(title);
            localStorage.setItem("events", JSON.stringify(events));
            eventTitle.value = "";
            renderCalendar();
            renderEvents();
        }
    });

    prevMonthBtn.addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthBtn.addEventListener("click", function () {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    renderCalendar();
    renderEvents();
});


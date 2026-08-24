/* =========================================================
   OASIS SURF — EXPERIENCE SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const scrollProgress = document.createElement("div");
    scrollProgress.className = "scroll-progress";
    scrollProgress.innerHTML = "<span></span>";
    document.body.appendChild(scrollProgress);

    const progressBar = scrollProgress.querySelector("span");

    const updateScrollProgress = () => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0
            ? (window.scrollY / scrollableHeight) * 100
            : 0;
        progressBar.style.width = `${progress}%`;
    };

    window.addEventListener("scroll", updateScrollProgress, {passive: true});
    updateScrollProgress();

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

        document
            .querySelectorAll(".program-card, .catalog-card, .condition-card, .values-grid article")
            .forEach(card => {

                card.addEventListener("pointermove", event => {
                    const bounds = card.getBoundingClientRect();
                    const x = (event.clientX - bounds.left) / bounds.width;
                    const y = (event.clientY - bounds.top) / bounds.height;
                    card.style.setProperty("--pointer-x", `${x * 100}%`);
                    card.style.setProperty("--pointer-y", `${y * 100}%`);
                    card.style.setProperty("--tilt-x", `${(0.5 - y) * 3}deg`);
                    card.style.setProperty("--tilt-y", `${(x - 0.5) * 4}deg`);
                });

                card.addEventListener("pointerleave", () => {
                    card.style.removeProperty("--tilt-x");
                    card.style.removeProperty("--tilt-y");
                });

            });

    }

    document
        .querySelectorAll('a[href$=".html"], a[href^="index.html#"]')
        .forEach(link => {
            link.addEventListener("click", () => {
                document.body.classList.add("page-leaving");
            });
        });

    const sitePreloader =
        document.querySelector(".site-preloader");

    if (sitePreloader) {

        window.setTimeout(() => {
            sitePreloader.classList.add("is-hidden");
            document.body.classList.remove("loading");
        }, 1100);

    }

    document
        .querySelectorAll('a[href="index.html#about"], a[href="#about"]')
        .forEach(link => {
            link.setAttribute("href", "sobre-mi.html");
        });

    /* =====================================================
       CONDICIONES EN VIVO
    ===================================================== */

    const conditionsSection =
        document.querySelector(".conditions-section");

    if (conditionsSection) {

        const surfSpot = {
            name: "Punta Hermosa, Lima",
            latitude: -12.337,
            longitude: -76.826
        };

        const weatherTemperature =
            document.querySelector("#weatherTemperature");

        const weatherSummary =
            document.querySelector("#weatherSummary");

        const windSpeed =
            document.querySelector("#windSpeed");

        const windDirection =
            document.querySelector("#windDirection");

        const waveHeight =
            document.querySelector("#waveHeight");

        const wavePeriod =
            document.querySelector("#wavePeriod");

        const updatedLabel =
            document.querySelector("#conditionsUpdated");

        const degreesToDirection = degrees => {
            const directions = ["N", "NE", "E", "SE", "S", "SO", "O", "NO"];
            return directions[Math.round(degrees / 45) % directions.length];
        };

        const weatherDescription = code => {
            if (code === 0) return "Cielo despejado";
            if ([1, 2, 3].includes(code)) return "Parcialmente nublado";
            if ([45, 48].includes(code)) return "Niebla";
            if ([51, 53, 55, 56, 57].includes(code)) return "Llovizna";
            if ([61, 63, 65, 80, 81, 82].includes(code)) return "Lluvia";
            if ([71, 73, 75, 77, 85, 86].includes(code)) return "Nieve";
            return "Condiciones variables";
        };

        const updateConditions = async () => {

            const coordinates =
                `latitude=${surfSpot.latitude}&longitude=${surfSpot.longitude}`;

            const weatherUrl =
                `https://api.open-meteo.com/v1/forecast?${coordinates}&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=kmh&timezone=auto`;

            const marineUrl =
                `https://marine-api.open-meteo.com/v1/marine?${coordinates}&current=wave_height,wave_period&timezone=auto`;

            try {

                const [weatherResponse, marineResponse] =
                    await Promise.all([
                        fetch(weatherUrl),
                        fetch(marineUrl)
                    ]);

                if (!weatherResponse.ok || !marineResponse.ok) {
                    throw new Error("No se pudieron cargar las condiciones");
                }

                const weather = await weatherResponse.json();
                const marine = await marineResponse.json();
                const currentWeather = weather.current;
                const currentMarine = marine.current;

                if (weatherTemperature) weatherTemperature.textContent = `${Math.round(currentWeather.temperature_2m)}°C`;
                if (weatherSummary) weatherSummary.textContent = weatherDescription(currentWeather.weather_code);
                if (windSpeed) windSpeed.textContent = `${Math.round(currentWeather.wind_speed_10m)} km/h`;
                if (windDirection) windDirection.textContent = `Dirección ${degreesToDirection(currentWeather.wind_direction_10m)}`;
                if (waveHeight) waveHeight.textContent = `${Number(currentMarine.wave_height || 0).toFixed(1)} m`;
                if (wavePeriod) wavePeriod.textContent = `Periodo ${Number(currentMarine.wave_period || 0).toFixed(1)} s`;
                if (updatedLabel) updatedLabel.textContent = `Actualizado ${new Date().toLocaleTimeString("es-PE", {hour: "2-digit", minute: "2-digit"})}`;

            } catch (error) {

                if (updatedLabel) updatedLabel.textContent = "Datos temporalmente no disponibles";
                if (weatherSummary) weatherSummary.textContent = "Revisa la conexión para actualizar";

            }

        };

        const locationLabel =
            document.querySelector("#conditionsLocation");

        if (locationLabel) locationLabel.textContent = surfSpot.name;
        updateConditions();
        window.setInterval(updateConditions, 15 * 60 * 1000);

    }

    /* =====================================================
       GSAP
    ===================================================== */

    if (typeof gsap !== "undefined") {

        if (typeof ScrollTrigger !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

    }


    /* =====================================================
       ELEMENTOS
    ===================================================== */

    const cursor = document.querySelector(".cursor");
    const cursorRing = document.querySelector(".cursor-ring");



    /* =====================================================
       CURSOR PERSONALIZADO
    ===================================================== */

    if (
        cursor &&
        cursorRing &&
        window.innerWidth > 800 &&
        typeof gsap !== "undefined"
    ) {

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        let ringX = mouseX;
        let ringY = mouseY;


        window.addEventListener("mousemove", (event) => {

            mouseX = event.clientX;
            mouseY = event.clientY;

            gsap.to(cursor, {
                x: mouseX,
                y: mouseY,
                duration: 0.08,
                ease: "power2.out",
                overwrite: true
            });

        });


        function animateCursorRing() {

            ringX += (mouseX - ringX) * 0.16;
            ringY += (mouseY - ringY) * 0.16;

            gsap.set(cursorRing, {
                x: ringX,
                y: ringY
            });

            requestAnimationFrame(animateCursorRing);

        }

        animateCursorRing();


        document
            .querySelectorAll("a, button, .hotspot")
            .forEach(element => {

                element.addEventListener("mouseenter", () => {

                    gsap.to(cursorRing, {
                        width: 55,
                        height: 55,
                        duration: 0.25,
                        ease: "power2.out"
                    });

                });


                element.addEventListener("mouseleave", () => {

                    gsap.to(cursorRing, {
                        width: 35,
                        height: 35,
                        duration: 0.25,
                        ease: "power2.out"
                    });

                });

            });

    }



    /* =====================================================
       HEADER
    ===================================================== */

    const header = document.querySelector(".header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }



    /* =====================================================
       HERO ANIMATION
    ===================================================== */

    if (
        typeof gsap !== "undefined" &&
        document.querySelector(".hero")
    ) {

        const heroTimeline = gsap.timeline();


        if (document.querySelector(".hero-label")) {

            heroTimeline.from(".hero-label", {

                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power3.out"

            });

        }


        if (document.querySelector(".hero h1")) {

            heroTimeline.from(".hero h1", {

                opacity: 0,
                y: 80,
                duration: 1,
                ease: "power4.out"

            }, "-=.4");

        }


        if (document.querySelector(".hero p")) {

            heroTimeline.from(".hero p", {

                opacity: 0,
                y: 30,
                duration: 0.7

            }, "-=.5");

        }


        if (document.querySelector(".hero-cta")) {

            heroTimeline.from(".hero-cta", {

                opacity: 0,
                y: 25,
                duration: 0.6

            }, "-=.3");

        }


        if (document.querySelector(".hero-surfboard")) {

            heroTimeline.from(".hero-surfboard", {

                opacity: 0,
                scale: 0.75,
                rotation: 12,
                duration: 1.5,
                ease: "power3.out"

            }, "-=1");

        }

    }



    /* =====================================================
       HERO PARALLAX
    ===================================================== */

    if (
        typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined" &&
        document.querySelector(".hero-surfboard")
    ) {

        gsap.to(".hero-surfboard", {

            y: -80,
            rotation: -5,

            scrollTrigger: {

                trigger: ".hero",
                start: "top top",
                end: "bottom top",
                scrub: 1

            }

        });

    }



    /* =====================================================
       HERO ORBS
    ===================================================== */

    if (
        typeof gsap !== "undefined" &&
        document.querySelector(".orb-1")
    ) {

        gsap.to(".orb-1", {

            x: -80,
            y: 60,
            duration: 7,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"

        });

    }


    if (
        typeof gsap !== "undefined" &&
        document.querySelector(".orb-2")
    ) {

        gsap.to(".orb-2", {

            x: 60,
            y: -40,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"

        });

    }



    /* =====================================================
       SMOOTH ANCHOR LINKS
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(link => {

            link.addEventListener("click", (event) => {

                const targetID =
                    link.getAttribute("href");

                const target =
                    document.querySelector(targetID);

                if (!target) return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            });

        });



    /* =====================================================
       INTRO ANIMATION
    ===================================================== */

    if (
        typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined"
    ) {

        const introNumber =
            document.querySelector(".intro-number");

        const introText =
            document.querySelector(".intro-text");


        if (introNumber) {

            gsap.from(introNumber, {

                opacity: 0,
                x: -100,

                scrollTrigger: {

                    trigger: ".intro-section",
                    start: "top 75%",
                    end: "top 25%",
                    scrub: 1

                }

            });

        }


        if (introText) {

            gsap.from(introText, {

                opacity: 0,
                x: 100,

                scrollTrigger: {

                    trigger: ".intro-section",
                    start: "top 75%",
                    end: "top 25%",
                    scrub: 1

                }

            });

        }

    }



    /* =====================================================
       ANATOMY
    ===================================================== */

    const anatomyBoard =
        document.querySelector(".main-surfboard");

    const anatomySection =
        document.querySelector(".anatomy-section");


    if (
        anatomyBoard &&
        anatomySection &&
        typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined"
    ) {

        gsap.to(anatomyBoard, {

            rotation: 8,
            y: -40,

            scrollTrigger: {

                trigger: anatomySection,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5

            }

        });

    }


    const anatomyInteractiveBoard =
        document.querySelector(".interactive-board");

    if (anatomyInteractiveBoard && anatomyBoard && typeof gsap !== "undefined") {

        anatomyInteractiveBoard.addEventListener("mousemove", event => {

            const bounds = anatomyInteractiveBoard.getBoundingClientRect();
            const pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
            const pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;

            gsap.to(anatomyBoard, {
                rotationY: pointerX * 10,
                rotationX: pointerY * -8,
                duration: .45,
                ease: "power3.out",
                overwrite: "auto"
            });

        });

        anatomyInteractiveBoard.addEventListener("mouseleave", () => {

            gsap.to(anatomyBoard, {
                rotationX: 0,
                rotationY: 0,
                duration: .8,
                ease: "elastic.out(1, .55)"
            });

        });

    }



    /* =====================================================
       HOTSPOT DATA
    ===================================================== */

    const information = {

        nose: {

            number: "01",

            title: "Punta / Nose",

            description:
                "La parte delantera de la tabla. Su forma influye en la entrada a la ola, la flotación y la estabilidad.",

            function:
                "Entrada en ola",

            influence:
                "Flotación",

            percent: 72

        },


        stringer: {

            number: "02",

            title: "Alma / Stringer",

            description:
                "La estructura longitudinal que recorre el centro de la tabla. Ayuda a controlar la flexión y aporta rigidez.",

            function:
                "Estructura",

            influence:
                "Flexión",

            percent: 85

        },


        rail: {

            number: "03",

            title: "Cantos / Rails",

            description:
                "Los bordes de la tabla controlan la interacción con el agua y tienen una gran influencia durante los giros.",

            function:
                "Control del agua",

            influence:
                "Giros",

            percent: 94

        },


        center: {

            number: "04",

            title: "Centro / Center",

            description:
                "La zona central proporciona una referencia importante para el equilibrio y la distribución del volumen.",

            function:
                "Equilibrio",

            influence:
                "Estabilidad",

            percent: 78

        },


        pad: {

            number: "05",

            title: "Pad",

            description:
                "Superficie antideslizante que proporciona agarre al pie trasero y ayuda a controlar la tabla durante las maniobras.",

            function:
                "Agarre",

            influence:
                "Control",

            percent: 82

        },


        tail: {

            number: "06",

            title: "Cola / Tail",

            description:
                "La parte trasera determina cómo libera agua la tabla y modifica la respuesta durante los giros.",

            function:
                "Liberación",

            influence:
                "Respuesta",

            percent: 89

        }

    };



    /* =====================================================
       INFO CARD
    ===================================================== */

    const hotspots =
        document.querySelectorAll(".hotspot");


    const infoNumber =
        document.getElementById("infoNumber");

    const infoTitle =
        document.getElementById("infoTitle");

    const infoDescription =
        document.getElementById("infoDescription");

    const infoFunction =
        document.getElementById("infoFunction");

    const infoInfluence =
        document.getElementById("infoInfluence");

    const infoPercent =
        document.getElementById("infoPercent");

    const infoProgress =
        document.getElementById("infoProgress");


    function updateInformation(part) {

        const data = information[part];

        if (!data) return;


        if (
            !infoNumber ||
            !infoTitle ||
            !infoDescription ||
            !infoFunction ||
            !infoInfluence ||
            !infoPercent ||
            !infoProgress
        ) {
            return;
        }


        const animatedElements = [

            infoTitle,
            infoDescription,
            infoFunction,
            infoInfluence

        ];


        if (typeof gsap !== "undefined") {

            gsap.to(animatedElements, {

                opacity: 0,
                y: 10,
                duration: 0.15,

                onComplete: () => {

                    infoNumber.textContent =
                        data.number;

                    infoTitle.textContent =
                        data.title;

                    infoDescription.textContent =
                        data.description;

                    infoFunction.textContent =
                        data.function;

                    infoInfluence.textContent =
                        data.influence;

                    infoPercent.textContent =
                        data.percent + "%";


                    gsap.to(animatedElements, {

                        opacity: 1,
                        y: 0,
                        duration: 0.35

                    });

                }

            });


            gsap.to(infoProgress, {

                width: data.percent + "%",

                duration: 0.8,

                ease: "power3.out"

            });

        } else {

            infoNumber.textContent = data.number;
            infoTitle.textContent = data.title;
            infoDescription.textContent = data.description;
            infoFunction.textContent = data.function;
            infoInfluence.textContent = data.influence;
            infoPercent.textContent = data.percent + "%";

            infoProgress.style.width =
                data.percent + "%";

        }


        /* Movimiento de la tabla */

        if (anatomyBoard && typeof gsap !== "undefined") {

            let movement = 0;

            if (part === "rail") {
                movement = -22;
            }

            if (part === "nose") {
                movement = 10;
            }

            if (part === "tail") {
                movement = -10;
            }


            gsap.to(anatomyBoard, {

                x: movement,
                scale: 1.025,

                duration: 0.6,

                ease: "power3.out"

            });

        }

    }



    /* =====================================================
       HOTSPOTS EVENTS
    ===================================================== */

    hotspots.forEach(hotspot => {

        const activate = () => {

            const part =
                hotspot.dataset.part;

            updateInformation(part);


            hotspots.forEach(item => {

                item.classList.remove("active");

            });

            hotspot.classList.add("active");

        };


        hotspot.addEventListener(
            "mouseenter",
            activate
        );


        hotspot.addEventListener(
            "click",
            activate
        );

    });



    /* =====================================================
       RESET ANATOMY BOARD
    ===================================================== */

    const interactiveBoard =
        document.querySelector(".interactive-board");


    if (interactiveBoard && anatomyBoard) {

        interactiveBoard.addEventListener(
            "mouseleave",
            () => {

                if (typeof gsap === "undefined") return;

                gsap.to(anatomyBoard, {

                    x: 0,
                    scale: 1,

                    duration: 0.7,

                    ease: "power3.out"

                });

            }
        );

    }



    /* =====================================================
       VIEW SWITCHER
    ===================================================== */

    const viewButtons =
        document.querySelectorAll(".view-button");

    const viewBoard =
        document.getElementById("viewBoard");

    const viewTitle =
        document.getElementById("viewTitle");

    const viewDescription =
        document.getElementById("viewDescription");

    const viewLabel =
        document.getElementById("viewLabel");


    const views = {

        deck: {

            title: "Deck",

            label: "VIEW 01",

            description:
                "La superficie superior de la tabla, donde el surfista encuentra estabilidad, agarre y control.",

            rotation: 0

        },


        bottom: {

            title: "Bottom",

            label: "VIEW 02",

            description:
                "La parte inferior de la tabla. Su diseño controla el flujo del agua y modifica la velocidad y el agarre.",

            rotation: 180

        },


        rocker: {

            title: "Rocker",

            label: "VIEW 03",

            description:
                "La curvatura longitudinal de la tabla desde el nose hasta el tail. Influye directamente en la maniobrabilidad.",

            rotation: 90

        }

    };


    viewButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const selected =
                    button.dataset.view;

                const data =
                    views[selected];

                if (!data) return;


                viewButtons.forEach(btn => {

                    btn.classList.remove("active");

                });


                button.classList.add("active");


                if (
                    viewBoard &&
                    typeof gsap !== "undefined"
                ) {

                    gsap.to(viewBoard, {

                        rotationY: data.rotation,

                        rotationX:
                            selected === "rocker"
                                ? 15
                                : 0,

                        scale: 0.85,

                        duration: 0.35,

                        ease: "power2.inOut",

                        onComplete: () => {

                            if (viewTitle) {
                                viewTitle.textContent =
                                    data.title;
                            }

                            if (viewDescription) {
                                viewDescription.textContent =
                                    data.description;
                            }

                            if (viewLabel) {
                                viewLabel.textContent =
                                    data.label;
                            }


                            gsap.to(viewBoard, {

                                scale: 1,

                                duration: 0.6,

                                ease: "back.out(1.5)"

                            });

                        }

                    });

                } else {

                    if (viewTitle) {
                        viewTitle.textContent =
                            data.title;
                    }

                    if (viewDescription) {
                        viewDescription.textContent =
                            data.description;
                    }

                    if (viewLabel) {
                        viewLabel.textContent =
                            data.label;
                    }

                }

            }
        );

    });



    /* =====================================================
       PERFORMANCE CARDS
    ===================================================== */

    if (
        typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined" &&
        document.querySelector(".performance-card")
    ) {

        gsap.from(".performance-card", {

            opacity: 0,
            y: 80,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
            immediateRender: false,

            scrollTrigger: {

                trigger: ".performance-grid",
                start: "top 75%"

            }

        });

    }



    /* =====================================================
       FINAL SECTION
    ===================================================== */

    if (
        typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined" &&
        document.querySelector(".final-content")
    ) {

        gsap.from(".final-content", {

            opacity: 0,
            scale: 0.85,
            duration: 1.2,

            scrollTrigger: {

                trigger: ".final-section",
                start: "top 70%"

            }

        });

    }



    /* =====================================================
       ANIMACIONES GENERALES
    ===================================================== */

    if (
        typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined"
    ) {

        document
            .querySelectorAll(
                ".surf-class-card, .surfboard-card, .about-card, .gallery-item, .testimonial-card, .class-card, .experience-step, .catalog-card, .program-card"
            )
            .forEach(element => {

                gsap.from(element, {

                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    ease: "power3.out",

                    scrollTrigger: {

                        trigger: element,
                        start: "top 85%"

                    }

                });

            });

    }



    /* =====================================================
       TABLAS / GALERÍA — HOVER
    ===================================================== */

    document
        .querySelectorAll(
            ".surfboard-card, .gallery-item"
        )
        .forEach(card => {

            card.addEventListener(
                "mouseenter",
                () => {

                    if (typeof gsap === "undefined") return;

                    gsap.to(card, {

                        y: -8,
                        duration: 0.35,
                        ease: "power2.out"

                    });

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    if (typeof gsap === "undefined") return;

                    gsap.to(card, {

                        y: 0,
                        duration: 0.35,
                        ease: "power2.out"

                    });

                }
            );

        });



    /* =====================================================
       FAQ
    ===================================================== */

    const faqItems =
        document.querySelectorAll(".faq-item");


    faqItems.forEach(item => {

        const question =
            item.querySelector(
                ".faq-question"
            );


        if (!question) return;


        question.addEventListener(
            "click",
            () => {

                const isActive =
                    item.classList.contains("active");


                faqItems.forEach(other => {

                    other.classList.remove("active");

                });


                if (!isActive) {

                    item.classList.add("active");

                }

            }
        );

    });



    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.querySelector(".mobile-menu-button");

    const mobileMenu =
        document.querySelector(".mobile-menu");


    if (menuToggle && mobileMenu) {

        menuToggle.addEventListener(
            "click",
            () => {

                menuToggle.classList.toggle("active");

                mobileMenu.classList.toggle("active");

                document.body.classList.toggle(
                    "menu-open"
                );

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener(
                    "click",
                    () => {

                        menuToggle.classList.remove(
                            "active"
                        );

                        mobileMenu.classList.remove(
                            "active"
                        );

                        document.body.classList.remove(
                            "menu-open"
                        );

                    }
                );

            });

    }



    /* =====================================================
       FILTRO DE TABLAS
    ===================================================== */

    const filterButtons =
        document.querySelectorAll(
            ".board-filter"
        );

    const boardCards =
        document.querySelectorAll(
            ".surfboard-card"
        );


    filterButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.filter;


                filterButtons.forEach(btn => {

                    btn.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );


                boardCards.forEach(card => {

                    const category =
                        card.dataset.category;


                    if (
                        filter === "all" ||
                        category === filter
                    ) {

                        card.style.display =
                            "";

                        if (
                            typeof gsap !== "undefined"
                        ) {

                            gsap.fromTo(
                                card,
                                {
                                    opacity: 0,
                                    scale: 0.95
                                },
                                {
                                    opacity: 1,
                                    scale: 1,
                                    duration: 0.4
                                }
                            );

                        }

                    } else {

                        card.style.display =
                            "none";

                    }

                });

            }
        );

    });



    /* =====================================================
       BOTONES DE RESERVA
    ===================================================== */

    const bookingForm =
        document.querySelector("#booking-form");


    if (bookingForm) {

        const bookingDate =
            bookingForm.querySelector('[name="bookingDate"]');

        if (bookingDate) {

            bookingDate.min =
                new Date().toISOString().split("T")[0];

        }

        bookingForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const formData =
                    new FormData(bookingForm);

                const message = [
                    "Hola, quiero reservar una clase de surf.",
                    "",
                    "Nombre: " + formData.get("bookingName"),
                    "Teléfono: " + formData.get("bookingPhone"),
                    "Clase: " + formData.get("bookingClass"),
                    "Nivel: " + formData.get("bookingLevel"),
                    "Fecha: " + formData.get("bookingDate"),
                    "Horario: " + formData.get("bookingTime"),
                    "Mensaje: " + (formData.get("bookingMessage") || "Sin mensaje")
                ].join("\n");

                window.open(
                    "https://wa.me/51999999999?text=" + encodeURIComponent(message),
                    "_blank"
                );

            }
        );

    }


    /* =====================================================
       BOARD FINDER
    ===================================================== */

    const finder =
        document.querySelector(".finder");

    if (finder) {

        const questions =
            [...finder.querySelectorAll(".finder-question")];

        const result =
            finder.querySelector(".finder-result");

        const resultTitle =
            finder.querySelector("#finderResult");

        const resultDescription =
            finder.querySelector("#finderDescription");

        const resetButton =
            finder.querySelector("#finderReset");

        const answers = [];

        const recommendations = {
            beginner: {
                title: "Longboard de iniciación",
                description: "Una tabla amplia y estable para ganar confianza, aprender a remar y disfrutar tus primeras olas."
            },
            intermediate: {
                title: "Funboard versátil",
                description: "El equilibrio ideal entre estabilidad y maniobrabilidad para seguir progresando con seguridad."
            },
            advanced: {
                title: "Shortboard de performance",
                description: "Una tabla rápida y reactiva para aprovechar mejor cada sección y trabajar tus maniobras."
            }
        };

        const showQuestion = index => {

            questions.forEach((question, questionIndex) => {
                question.classList.toggle(
                    "active",
                    questionIndex === index
                );
            });

            if (result) {
                result.classList.remove("active");
            }

        };

        finder
            .querySelectorAll(".finder-options button")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const question =
                        button.closest(".finder-question");

                    const questionIndex =
                        questions.indexOf(question);

                    answers[questionIndex] =
                        button.dataset.answer;

                    if (questionIndex < questions.length - 1) {

                        showQuestion(questionIndex + 1);
                        return;

                    }

                    const recommendation =
                        recommendations[answers[0]] || recommendations.intermediate;

                    if (resultTitle) {
                        resultTitle.textContent = recommendation.title;
                    }

                    if (resultDescription) {
                        resultDescription.textContent = recommendation.description;
                    }

                    questions.forEach(item => {
                        item.classList.remove("active");
                    });

                    if (result) {
                        result.classList.add("active");
                    }

                });

            });

        if (resetButton) {

            resetButton.addEventListener("click", () => {
                answers.length = 0;
                showQuestion(0);
            });

        }

    }


    /* =====================================================
       TESTIMONIAL SLIDER
    ===================================================== */

    const testimonialSlider =
        document.querySelector(".testimonial-slider");

    if (testimonialSlider) {

        const testimonials =
            [...testimonialSlider.querySelectorAll(".testimonial")];

        const previousButton =
            testimonialSlider.querySelector("#testimonialPrev");

        const nextButton =
            testimonialSlider.querySelector("#testimonialNext");

        let testimonialIndex =
            testimonials.findIndex(item => item.classList.contains("active"));

        if (testimonialIndex < 0) testimonialIndex = 0;

        const showTestimonial = index => {

            testimonialIndex =
                (index + testimonials.length) % testimonials.length;

            testimonials.forEach((testimonial, itemIndex) => {
                testimonial.classList.toggle(
                    "active",
                    itemIndex === testimonialIndex
                );
            });

        };

        previousButton?.addEventListener(
            "click",
            () => showTestimonial(testimonialIndex - 1)
        );

        nextButton?.addEventListener(
            "click",
            () => showTestimonial(testimonialIndex + 1)
        );

        let testimonialTimer =
            window.setInterval(
                () => showTestimonial(testimonialIndex + 1),
                6500
            );

        testimonialSlider.addEventListener("mouseenter", () => {
            window.clearInterval(testimonialTimer);
        });

        testimonialSlider.addEventListener("mouseleave", () => {
            testimonialTimer = window.setInterval(
                () => showTestimonial(testimonialIndex + 1),
                6500
            );
        });

    }


    /* =====================================================
       BOARD CATALOG / BOARD LIGHTBOX
    ===================================================== */

    const boardCatalog =
        document.querySelector("#boardCatalog");

    const boardPhoto =
        document.querySelector("#boardPhoto");

    const addBoardButton =
        document.querySelector("#addBoard");

    const uploadFeedback =
        document.querySelector("#uploadFeedback");

    const boardSearch =
        document.querySelector("#boardSearch");

    const boardFilters =
        [...document.querySelectorAll(".board-filter")];

    const compareStatus =
        document.querySelector("#compareStatus");

    const compareButton =
        document.querySelector("#compareBoards");

    const comparedCards = [];

    const getBoardCards = () =>
        [...document.querySelectorAll(".catalog-card")];

    let selectedFilter = "all";

    const filterBoards = () => {

        const query =
            (boardSearch?.value || "").trim().toLowerCase();

        getBoardCards().forEach(card => {

            const searchableText = [
                card.dataset.boardTitle,
                card.dataset.boardType,
                card.dataset.boardDescription,
                card.dataset.boardSpecs
            ].join(" ").toLowerCase();

            const matchesFilter =
                selectedFilter === "all" ||
                card.dataset.category === selectedFilter;

            const matchesSearch =
                !query || searchableText.includes(query);

            card.hidden = !(matchesFilter && matchesSearch);

        });

    };

    boardSearch?.addEventListener("input", filterBoards);

    boardFilters.forEach(button => {
        button.addEventListener("click", () => {
            selectedFilter = button.dataset.filter || "all";
            boardFilters.forEach(item => {
                item.classList.toggle("active", item === button);
            });
            filterBoards();
        });
    });

    const updateCompareStatus = () => {
        if (!compareStatus) return;
        compareStatus.textContent = comparedCards.length
            ? `${comparedCards.length} de 2 tablas seleccionadas.`
            : "Elige hasta 2 tablas para compararlas.";
    };

    const openBoardLightbox = card => {

        const image = card.querySelector("img");
        const overlay = document.createElement("div");
        const whatsappMessage = encodeURIComponent(
            `Hola, me interesa la tabla ${card.dataset.boardTitle || "seleccionada"}.`
        );

        overlay.className = "image-lightbox";
        overlay.innerHTML = `
            <button class="lightbox-close" aria-label="Cerrar">×</button>
            <div class="image-lightbox-board">
                <img src="${image.src}" alt="${image.alt}">
                <div class="lightbox-board-copy">
                    <span>${card.dataset.boardType || "OASIS SURF"}</span>
                    <h3>${card.dataset.boardTitle || image.alt}</h3>
                    <p>${card.dataset.boardDescription || "Tabla de surf OasisSurf."}</p>
                    <strong>${card.dataset.boardSpecs || "Consulta disponibilidad por WhatsApp"}</strong>
                    <a class="lightbox-board-action" href="https://wa.me/51999999999?text=${whatsappMessage}" target="_blank" rel="noopener">CONSULTAR ESTA TABLA <span>↗</span></a>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        requestAnimationFrame(() => {
            overlay.classList.add("active");
        });

        overlay.addEventListener("click", event => {
            if (
                event.target === overlay ||
                event.target.classList.contains("lightbox-close")
            ) {
                overlay.classList.remove("active");
                window.setTimeout(() => overlay.remove(), 300);
            }
        });

    };

    boardCatalog?.addEventListener("click", event => {

        const card = event.target.closest(".catalog-card");

        if (card && event.target.closest(".board-compare-button")) {

            const existingIndex = comparedCards.indexOf(card);

            if (existingIndex >= 0) {
                comparedCards.splice(existingIndex, 1);
                card.classList.remove("compare-selected");
            } else if (comparedCards.length < 2) {
                comparedCards.push(card);
                card.classList.add("compare-selected");
            } else if (uploadFeedback) {
                uploadFeedback.textContent = "Solo puedes comparar dos tablas a la vez.";
            }

            updateCompareStatus();
            return;
        }

        if (card && (event.target.closest("img") || event.target.closest(".board-view-button"))) {
            openBoardLightbox(card);
        }

    });

    compareButton?.addEventListener("click", () => {

        if (comparedCards.length !== 2) {
            if (compareStatus) compareStatus.textContent = "Selecciona dos tablas para compararlas.";
            return;
        }

        const overlay = document.createElement("div");
        overlay.className = "image-lightbox compare-lightbox";
        overlay.innerHTML = `
            <button class="lightbox-close" aria-label="Cerrar">×</button>
            <div class="compare-panel">
                <span>BOARD MATCHUP</span>
                <h3>Compara tu quiver</h3>
                <div class="compare-grid">
                    ${comparedCards.map(card => `
                        <div class="compare-item">
                            <strong>${card.dataset.boardTitle}</strong>
                            <span>${card.dataset.boardType}</span>
                            <p>${card.dataset.boardDescription}</p>
                            <b>${card.dataset.boardSpecs}</b>
                        </div>
                    `).join("")}
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add("active"));
        overlay.addEventListener("click", event => {
            if (event.target === overlay || event.target.closest(".lightbox-close")) {
                overlay.classList.remove("active");
                window.setTimeout(() => overlay.remove(), 300);
            }
        });

    });

    addBoardButton?.addEventListener("click", () => {

        const file = boardPhoto?.files[0];
        const name = document.querySelector("#boardName")?.value.trim();
        const specs = document.querySelector("#boardSpecs")?.value.trim();
        const description = document.querySelector("#boardDescription")?.value.trim();

        if (!file || !name || !description) {
            if (uploadFeedback) uploadFeedback.textContent = "Selecciona una foto, escribe un nombre y añade una descripción.";
            return;
        }

        const reader = new FileReader();

        reader.addEventListener("load", () => {

            const card = document.createElement("article");
            card.className = "catalog-card";
            card.dataset.category = "all";
            card.dataset.boardTitle = name;
            card.dataset.boardType = "NUEVA TABLA";
            card.dataset.boardDescription = description;
            card.dataset.boardSpecs = specs || "Consulta características";
            card.innerHTML = `
                <div class="catalog-card-image">
                    <img src="${reader.result}" alt="${name}">
                    <button class="board-view-button" type="button">VER TABLA <span>↗</span></button>
                </div>
                <div class="catalog-card-copy">
                    <span>04 / NUEVA TABLA</span>
                    <h3>${name}</h3>
                    <p>${description}</p>
                    <strong>${specs || "Consulta características"}</strong>
                    <button class="board-compare-button" type="button">Comparar tabla</button>
                </div>
            `;

            boardCatalog?.appendChild(card);
            filterBoards();
            if (uploadFeedback) uploadFeedback.textContent = "Tabla añadida a tu quiver.";
            if (boardPhoto) boardPhoto.value = "";
            ["#boardName", "#boardSpecs", "#boardDescription"].forEach(selector => {
                const field = document.querySelector(selector);
                if (field) field.value = "";
            });

        });

        reader.readAsDataURL(file);

    });

    document
        .querySelectorAll(
            "[data-booking]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.booking;

                    const message =
                        type === "private"
                            ? "Hola, quiero información sobre una clase privada de surf."
                            : "Hola, quiero información sobre las clases de surf.";


                    const whatsappNumber =
                        "51999999999";


                    const url =
                        "https://wa.me/" +
                        whatsappNumber +
                        "?text=" +
                        encodeURIComponent(message);


                    window.open(
                        url,
                        "_blank"
                    );

                }
            );

        });



    /* =====================================================
       FORMULARIO DE CONTACTO
    ===================================================== */

    const contactForm =
        document.querySelector(
            ".contact-form"
        );


    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const name =
                    contactForm.querySelector(
                        '[name="name"]'
                    )?.value || "";


                const message =
                    contactForm.querySelector(
                        '[name="message"]'
                    )?.value || "";


                const whatsappNumber =
                    "51999999999";


                const whatsappMessage =
                    `Hola, soy ${name}. ${message}`;


                const url =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(
                        whatsappMessage
                    );


                window.open(
                    url,
                    "_blank"
                );

            }
        );

    }



    /* =====================================================
       CONTADOR / ESTADÍSTICAS
    ===================================================== */

    const counters =
        document.querySelectorAll(
            "[data-counter]"
        );


    counters.forEach(counter => {

        const target =
            parseInt(
                counter.dataset.counter
            );


        if (isNaN(target)) return;


        if (
            typeof gsap !== "undefined" &&
            typeof ScrollTrigger !== "undefined"
        ) {

            gsap.fromTo(
                counter,
                {
                    textContent: 0
                },
                {
                    textContent: target,
                    duration: 2,

                    snap: {
                        textContent: 1
                    },

                    ease: "power2.out",

                    scrollTrigger: {

                        trigger: counter,
                        start: "top 85%"

                    }

                }
            );

        }

    });



    /* =====================================================
       GALERÍA LIGHTBOX
    ===================================================== */

    const galleryItems =
        document.querySelectorAll(
            ".gallery-item img"
        );


    galleryItems.forEach(image => {

        image.style.cursor = "pointer";


        image.addEventListener(
            "click",
            () => {

                const overlay =
                    document.createElement(
                        "div"
                    );


                overlay.className =
                    "image-lightbox";


                overlay.innerHTML = `

                    <button class="lightbox-close">
                        ×
                    </button>

                    <img
                        src="${image.src}"
                        alt="${image.alt || "Oasis Surf"}"
                    >

                `;


                document.body.appendChild(
                    overlay
                );


                requestAnimationFrame(() => {

                    overlay.classList.add(
                        "active"
                    );

                });


                overlay.addEventListener(
                    "click",
                    event => {

                        if (
                            event.target === overlay ||
                            event.target.classList.contains(
                                "lightbox-close"
                            )
                        ) {

                            overlay.classList.remove(
                                "active"
                            );


                            setTimeout(() => {

                                overlay.remove();

                            }, 300);

                        }

                    }
                );

            }
        );

    });



    /* =====================================================
       ESC PARA CERRAR LIGHTBOX
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") return;


            const lightbox =
                document.querySelector(
                    ".image-lightbox"
                );


            if (lightbox) {

                lightbox.classList.remove(
                    "active"
                );


                setTimeout(() => {

                    lightbox.remove();

                }, 300);

            }

        }
    );



    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            '.navigation a[href^="#"]'
        );


    if (
        sections.length &&
        navLinks.length &&
        typeof ScrollTrigger !== "undefined"
    ) {

        sections.forEach(section => {

            ScrollTrigger.create({

                trigger: section,

                start: "top 40%",
                end: "bottom 40%",

                onEnter: () => {

                    updateActiveNavigation(
                        section.id
                    );

                },

                onEnterBack: () => {

                    updateActiveNavigation(
                        section.id
                    );

                }

            });

        });

    }


    function updateActiveNavigation(id) {

        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + id
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }



    /* =====================================================
       SCROLL REVEAL
    ===================================================== */

    if (
        typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined"
    ) {

        document
            .querySelectorAll(
                ".section-label, .views-title"
            )
            .forEach(element => {

                gsap.from(element, {

                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    immediateRender: false,

                    scrollTrigger: {

                        trigger: element,
                        start: "top 85%"

                    }

                });

            });

    }


    /* =====================================================
       MOVIMIENTO AMBIENTAL
    ===================================================== */

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reduceMotion) {

        const hero = document.querySelector(".hero");
        const heroPhoto = document.querySelector(".hero-photo img");

        if (hero && heroPhoto && typeof gsap !== "undefined") {

            const movePhotoX = gsap.quickTo(heroPhoto, "x", { duration: .8, ease: "power3.out" });
            const movePhotoY = gsap.quickTo(heroPhoto, "y", { duration: .8, ease: "power3.out" });

            hero.addEventListener("pointermove", event => {
                if (!heroPhoto || window.innerWidth < 851) return;

                const bounds = hero.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width - .5;
                const y = (event.clientY - bounds.top) / bounds.height - .5;

                movePhotoX(x * -14);
                movePhotoY(y * -10);
            });

            hero.addEventListener("pointerleave", () => {
                if (!heroPhoto) return;
                movePhotoX(0);
                movePhotoY(0);
            });

        }

        if (typeof gsap !== "undefined") {

            document.querySelectorAll(
                ".hero-cta, .header-button, .booking-submit, .page-hero-button, .whatsapp-button"
            ).forEach(button => {

                const moveX = gsap.quickTo(button, "x", { duration: .35, ease: "power3.out" });
                const moveY = gsap.quickTo(button, "y", { duration: .35, ease: "power3.out" });

                button.addEventListener("pointermove", event => {
                    if (window.innerWidth < 851) return;
                    const bounds = button.getBoundingClientRect();
                    moveX((event.clientX - bounds.left - bounds.width / 2) * .13);
                    moveY((event.clientY - bounds.top - bounds.height / 2) * .13);
                });

                button.addEventListener("pointerleave", () => {
                    moveX(0);
                    moveY(0);
                });

            });

        }

    }


    /* =====================================================
       ENTRADAS DE CONTENIDO
    ===================================================== */

    if (!reduceMotion && typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {

        const revealGroups = [
            ".program-card",
            ".catalog-card",
            ".condition-card",
            ".values-grid article",
            ".method-list article",
            ".included-grid > div",
            ".gallery-item",
            ".faq-item"
        ];

        revealGroups.forEach(selector => {
            const items = gsap.utils.toArray(selector);
            if (!items.length) return;

            gsap.from(items, {
                opacity: 0,
                y: 38,
                duration: .75,
                stagger: .1,
                ease: "power3.out",
                immediateRender: false,
                scrollTrigger: {
                    trigger: items[0].parentElement,
                    start: "top 82%",
                    once: true
                }
            });
        });

    }



    /* =====================================================
       REFRESH GSAP
    ===================================================== */

    if (
        typeof ScrollTrigger !== "undefined"
    ) {

        window.addEventListener(
            "load",
            () => {

                ScrollTrigger.refresh();

            }
        );

    }


});

/* =========================================================
    SURFEANDO CON HENRY — EXPERIENCE SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("a").forEach(link => {
        link.href = link.href
            .replace("51999999999", "51961385016")
            .replace("index.html#boards", "anatomia.html");

        if (link.href.includes("index.html#conditions")) {
            link.href = "condiciones.html";
        }
    });

    const translations = {
        "Inicio": "Home", "Sobre mí": "About me", "Clases": "Lessons", "Anatomía": "Anatomy",
        "Tablas": "Boards", "Experiencia": "Experience", "Condiciones": "Conditions", "Galería": "Gallery",
        "Reservar": "Book now", "Reservar clase": "Book a lesson", "Preparando la sesión": "Preparing your session",
        "Precios y tarifas": "Prices and rates", "Conoce tu tabla.": "Explore your board.",
        "Lee el océano antes de entrar.": "Read the ocean before you paddle out.",
        "Explora la tabla": "Explore the board", "Todo tiene una función.": "Every part has a purpose.",
        "Clases de Surf": "Surf Lessons", "Alquiler de tabla": "Board Rental",
        "Wetsuit rental & surf classes": "Wetsuit rental & surf lessons", "Consultar alquiler": "Ask about rental",
        "RESERVAR CLASE": "BOOK A LESSON", "CONSULTAR ALQUILER": "ASK ABOUT RENTAL",
        "COMENZAR EXPERIENCIA": "START EXPERIENCE", "CONOCE LAS CLASES": "EXPLORE LESSONS",
        "RESERVAR SESIÓN": "BOOK A SESSION", "Todo preparado para": "Everything ready to",
        "entrar al agua.": "paddle out.", "Aprende. Surfea. Vive.": "Learn. Surf. Live.",
        "Cargando...": "Loading...", "Actualizando condiciones...": "Updating conditions...",
        "Dirección pendiente": "Direction pending", "Periodo pendiente": "Period pending",
        "Calculando marea...": "Calculating tide...", "Clima": "Weather", "Viento": "Wind",
        "Oleaje": "Waves", "Mareas": "Tides", "Sobre mí | Surfeando con Henry": "About me | Surfeando con Henry",
        "CLIMA": "WEATHER", "VIENTO": "WIND", "OLEAJE": "WAVES", "MAREAS": "TIDES",
        "CONDICIONES EN VIVO": "LIVE CONDITIONS", "INTERACTIVE ANATOMY": "INTERACTIVE ANATOMY",
        "TOCA LOS PUNTOS": "TOUCH THE POINTS", "SELECCIONA UNA PARTE": "SELECT A PART",
        "COMPONENTE": "COMPONENT", "FUNCIÓN": "FUNCTION", "INFLUENCIA": "INFLUENCE", "IMPACTO": "IMPACT",
        "SURFEANDO CON HENRY / EL OCÉANO": "SURFEANDO CON HENRY / THE OCEAN",
        "SURFEANDO CON HENRY / BIENVENIDO": "SURFEANDO CON HENRY / WELCOME",
        "SURFEANDO CON HENRY / MOMENTS": "SURFEANDO CON HENRY / MOMENTS",
        "ELIGE TU SESIÓN": "CHOOSE YOUR SESSION", "CLASES Y EQUIPAMIENTO": "LESSONS AND EQUIPMENT",
        "AÑOS SURFEANDO": "YEARS SURFING", "ALUMNOS": "STUDENTS", "PASIÓN": "PASSION",
        "Paciencia": "Patience", "Seguridad": "Safety", "Presencia": "Presence",
        "LEE EL OCÉANO": "READ THE OCEAN", "MY WAY OF TEACHING": "MY WAY OF TEACHING",
        "THE SURFER BEHIND THE LESSON": "THE SURFER BEHIND THE LESSON",
        "Surfeando con Henry — Surf. Aprende. Vive.": "Surfeando con Henry — Surf. Learn. Live.",
        "Brisa Funboard | Surfeando con Henry": "Brisa Funboard | Surfeando con Henry", "Marea Longboard | Surfeando con Henry": "Marea Longboard | Surfeando con Henry", "Rayo Shortboard | Surfeando con Henry": "Rayo Shortboard | Surfeando con Henry",
        "Clases | Surfeando con Henry": "Lessons | Surfeando con Henry", "Condiciones | Surfeando con Henry": "Conditions | Surfeando con Henry",
        "Anatomía | Surfeando con Henry": "Anatomy | Surfeando con Henry", "Galería | Surfeando con Henry": "Gallery | Surfeando con Henry",
        "Tablas | Surfeando con Henry": "Boards | Surfeando con Henry", "Experiencia | Surfeando con Henry": "Experience | Surfeando con Henry"
    };

    Object.assign(translations, {
        "Una vida entre olas.": "A life between waves.", "Conoce las condiciones del océano y prepárate para cada sesión.": "Discover ocean conditions and prepare for every session.",
        "El océano es nuestro lugar.": "The ocean is our place.", "La próxima historia puede ser tuya.": "The next story could be yours.",
        "Así comienza tu sesión.": "This is how your session begins.", "Claridad dentro del agua.": "Clarity in the water.",
        "Confianza fuera de ella.": "Confidence beyond it.", "Una tabla. Tres perspectivas.": "One board. Three perspectives.",
        "Explora todas las tablas.": "Explore all boards.", "Aprende a leer las olas, descubre tu tabla y vive el océano desde una nueva perspectiva.": "Learn to read the waves, discover your board and experience the ocean from a new perspective.",
        "El surf comenzó como una pasión y terminó convirtiéndose en una forma de vida.": "Surf began as a passion and became a way of life.",
        "Después de años aprendiendo a escuchar el océano, entendí que enseñar no consiste solamente en conseguir que alguien se ponga de pie sobre una tabla.": "After years of learning to listen to the ocean, I understood that teaching is about more than simply standing on a board.",
        "Se trata de ganar confianza, leer mejor las condiciones y descubrir una sensación que solo aparece cuando estás realmente presente en el agua.": "It is about building confidence, reading conditions and discovering a feeling that only appears when you are truly present in the water.",
        "En mi opinión, el surf es un proceso tanto emocional y mental como físico. Estoy aquí para acompañarte a descubrirlo.": "In my view, surfing is as emotional and mental as it is physical. I am here to help you discover it.",
        "Mi primer encuentro con el surf.": "My first encounter with surfing.", "Mi hogar y mi conexión con el mar.": "My home and connection with the sea.", "El surf también transforma por dentro.": "Surf also transforms from within.",
        "Cada persona tiene su propio ritmo. El progreso se construye sin prisa y con atención.": "Everyone has their own rhythm. Progress is built patiently and with care.",
        "Aprender a leer el océano es tan importante como aprender a remar o girar.": "Learning to read the ocean is as important as learning to paddle or turn.",
        "La mejor ola no siempre es la más grande, sino la que puedes disfrutar de verdad.": "The best wave is not always the biggest, but the one you can truly enjoy.",
        "Marea subiendo": "Tide rising", "Marea bajando": "Tide falling", "Marea estable": "Stable tide", "Marea no disponible": "Tide unavailable", "Cielo despejado": "Clear sky", "Parcialmente nublado": "Partly cloudy", "Niebla": "Fog", "Llovizna": "Drizzle", "Lluvia": "Rain", "Condiciones variables": "Variable conditions",
        "Datos temporalmente no disponibles": "Data temporarily unavailable", "Revisa la conexión para actualizar": "Check your connection to refresh",
        "SURF EXPERIENCE": "SURF EXPERIENCE", "INSTRUCTOR DE SURF": "SURF INSTRUCTOR", "CONOCE A TU PROFESOR": "MEET YOUR INSTRUCTOR",
        "PARTES DE LA TABLA": "BOARD PARTS", "VER TODAS LAS TABLAS": "VIEW ALL BOARDS", "CONSULTAR TABLA": "ASK ABOUT BOARD"
        ,"Explora cada parte y descubre cómo influye en tu forma de surfear.": "Explore every part and discover how it affects your surfing.",
        "Conoce": "Explore", "tu tabla.": "your board.", "Tu próxima sesión": "Your next session", "empieza aquí.": "starts here.",
        "Todo tiene una": "Every part has a", "función.": "purpose.",
        "Lee el océano": "Read the ocean", "antes de entrar.": "before you paddle out.",
        "Observa el clima, el viento, las olas y la marea para preparar mejor cada sesión en Lobitos.": "Watch the weather, wind, waves and tide to prepare for every session in Lobitos.",
        "Datos actualizados para ayudarte a elegir el mejor momento para entrar al agua.": "Updated data to help you choose the best time to paddle out.",
        "Precios y": "Prices and", "tarifas": "rates", "Entra al agua con": "Paddle out with", "todo listo.": "everything ready.",
        "El océano es": "The ocean is", "nuestro lugar.": "our place.", "La próxima historia": "The next story", "puede ser tuya.": "could be yours.",
        "Una vida": "A life", "entre olas.": "between waves.", "nuestro lugar.": "our place.",
        "Selecciona un punto de la tabla para conocerlo.": "Select a point on the board to learn more.",
        "Pasa el cursor por los puntos para comenzar a descubrir la anatomía de la tabla.": "Hover over the points to explore the board's anatomy.",
        "Punta / Nose": "Nose", "Alma / Stringer": "Stringer", "Cantos / Rails": "Rails", "Centro / Center": "Center", "Cola / Tail": "Tail",
        "La parte delantera de la tabla. Su forma influye en la entrada a la ola, la flotación y la estabilidad.": "The front of the board. Its shape affects wave entry, flotation and stability.",
        "La estructura longitudinal que recorre el centro de la tabla. Ayuda a controlar la flexión y aporta rigidez.": "The longitudinal structure running through the board's center. It controls flex and adds stiffness.",
        "Los bordes de la tabla controlan la interacción con el agua y tienen una gran influencia durante los giros.": "The board's edges control its interaction with the water and strongly influence turns.",
        "La zona central proporciona una referencia importante para el equilibrio y la distribución del volumen.": "The center provides an important reference for balance and volume distribution.",
        "Superficie antideslizante que proporciona agarre al pie trasero y ayuda a controlar la tabla durante las maniobras.": "The non-slip surface gives the back foot grip and helps control the board during maneuvers.",
        "La parte trasera determina cómo libera agua la tabla y modifica la respuesta durante los giros.": "The back of the board determines how it releases water and changes its response through turns.",
        "Entrada en ola": "Wave entry", "Control del agua": "Water control", "Equilibrio": "Balance", "Estabilidad": "Stability", "Estructura": "Structure", "Flexión": "Flex", "Giros": "Turns", "Agarre": "Grip", "Control": "Control", "Liberación": "Release", "Respuesta": "Response", "Flotación": "Flotation",
        "Abrir menú": "Open menu", "Seleccionar idioma": "Select language", "Cerrar": "Close", "Foto anterior": "Previous photo", "Foto siguiente": "Next photo", "Seleccionar foto": "Select photo", "Ver foto 1": "View photo 1", "Ver foto 2": "View photo 2", "Ver foto 3": "View photo 3", "Ver foto 4": "View photo 4",
        "Contactar por WhatsApp": "Contact via WhatsApp", "Buscar por nombre o estilo": "Search by name or style", "Filtrar tablas": "Filter boards", "Buscar": "Search", "Todas": "All", "Principiantes": "Beginners", "Progresión": "Progression", "Performance": "Performance", "VER MÁS": "VIEW MORE", "VER TABLA": "VIEW BOARD", "Comparar tabla": "Compare board", "Comparar tablas": "Compare boards",
        "Tu nombre": "Your name", "Tu número": "Your number", "¿Hay algo más que debamos saber?": "Is there anything else we should know?", "Selecciona dos tablas para compararlas.": "Select two boards to compare them.", "Elige hasta 2 tablas para compararlas.": "Choose up to 2 boards to compare.", "de 2 tablas seleccionadas.": "of 2 boards selected.", "Solo puedes comparar dos tablas a la vez.": "You can only compare two boards at a time.", "Selecciona una foto, escribe un nombre y añade una descripción.": "Select a photo, enter a name and add a description.", "Tabla añadida a tu quiver.": "Board added to your quiver.", "Consulta características": "Ask for details", "Consultar disponibilidad por WhatsApp": "Check availability on WhatsApp", "CONSULTAR ESTA TABLA": "ASK ABOUT THIS BOARD", "Compara tu quiver": "Compare your quiver", "BOARD MATCHUP": "BOARD MATCHUP",
        "ARRASTRA PARA GIRAR · PASA POR LOS PUNTOS": "DRAG TO ROTATE · HOVER OVER THE POINTS", "Selecciona una parte": "Select a part", "NUEVA TABLA": "NEW BOARD", "LARGO": "LENGTH", "VOLUMEN": "VOLUME", "VERSATILIDAD": "VERSATILITY", "ESTABILIDAD": "STABILITY", "RESPUESTA": "RESPONSE", "CLASES Y EQUIPAMIENTO": "LESSONS AND EQUIPMENT", "CONSULTAR ALQUILER": "ASK ABOUT RENTAL", "RESERVAR CLASE": "BOOK A LESSON", "Ver más sobre": "Learn more about",
        "Marea no disponible": "Tide unavailable", "Dirección": "Direction", "Periodo": "Period", "Actualizado": "Updated", "Norte": "North", "Noreste": "Northeast", "Este": "East", "Sureste": "Southeast", "Sur": "South", "Suroeste": "Southwest", "Oeste": "West", "Noroeste": "Northwest", "Datos temporalmente no disponibles": "Data temporarily unavailable", "Revisa la conexión para actualizar": "Check your connection to refresh", "Revisa la conexion para actualizar": "Check your connection to refresh"
        ,"Todo lo que necesitas para vivir el surf en Lobitos: clases con instructores certificados y equipo listo para usar.": "Everything you need to enjoy surfing in Lobitos: lessons with certified instructors and equipment ready to use.", "CLASES PARA PRINCIPIANTES E INTERMEDIOS": "LESSONS FOR BEGINNERS AND INTERMEDIATE SURFERS", "Clases para principiantes e intermedios": "Lessons for beginners and intermediate surfers", "Equipo adecuado": "The right equipment", "Elegimos la tabla y el material según tu nivel.": "We choose the board and equipment according to your level.", "Lectura del océano": "Reading the ocean", "Aprendes a entender condiciones, corrientes y olas.": "You learn to understand conditions, currents and waves.", "Seguimiento real": "Real follow-up", "Cada sesión termina con próximos pasos concretos.": "Every session ends with clear next steps.", "Elige una tabla y pulsa “Ver más” para conocer todos sus detalles.": "Choose a board and click \"View more\" to see all its details.", "Estabilidad y control para tus primeras olas.": "Stability and control for your first waves.", "PREPARANDO LA SESIÓN": "PREPARING YOUR SESSION", "Encuentra tu ola.": "Find your wave.", "MÁS QUE APRENDER A SURFEAR, VIVE LA EXPERIENCIA.": "MORE THAN LEARNING TO SURF, LIVE THE EXPERIENCE.", "Bienvenido al agua,": "Welcome to the water,", "soy Henry.": "I am Henry.", "¿Qué tabla": "Which board", "es para ti?": "is right for you?", "¿Cómo describes tu nivel?": "How would you describe your level?", "¿Qué quieres conseguir?": "What do you want to achieve?"
    });

    const reverseTranslations = Object.fromEntries(
        Object.entries(translations).map(([spanish, english]) => [english, spanish])
    );
    const englishToSpanish = {
        "01 / BOARD RENTAL": "01 / ALQUILER DE TABLA", "02 / WETSUIT + CLASSES": "02 / TRAJE + CLASES", "BOARD RENTAL": "ALQUILER DE TABLA", "WETSUIT RENTAL & SURF CLASSES": "ALQUILER DE TRAJE Y CLASES DE SURF", "Wetsuit rental & surf classes": "Alquiler de traje y clases de surf", "SURF EXPERIENCE": "EXPERIENCIA DE SURF", "EVERY SESSION": "CADA SESIÓN", "THE OCEAN": "EL OCÉANO", "THE SESSION": "LA SESIÓN", "THE RIDE": "LA OLA", "OUR SPOT": "NUESTRO SPOT", "1 day": "1 día", "1 week": "1 semana", "2 weeks": "2 semanas", "3 weeks": "3 semanas", "1 month": "1 mes", "Wetsuit 1 day": "Traje 1 día", "1 class (1h)": "1 clase (1h)", "5 classes": "5 clases", "+ wetsuit included S/ 10 per day": "+ traje incluido S/ 10 por día", "100% OF PROFITS FUND THE WAVES LOBITOS NGO": "100% DE LAS GANANCIAS FINANCIAN A LOBITOS NGO"
    };
    const wordTranslations = {
        "aprende": "learn", "aprender": "learn", "aprendes": "learn", "descubre": "discover", "descubrir": "discover", "conoce": "explore", "conocer": "learn", "elige": "choose", "entra": "paddle out", "agua": "water", "océano": "ocean", "olas": "waves", "ola": "wave", "tabla": "board", "tablas": "boards", "clases": "lessons", "clase": "lesson", "sesión": "session", "sesiones": "sessions", "experiencia": "experience", "condiciones": "conditions", "viento": "wind", "marea": "tide", "mareas": "tides", "alquiler": "rental", "principiantes": "beginners", "seguridad": "safety", "control": "control", "estabilidad": "stability", "velocidad": "speed", "dirección": "direction", "para": "for", "con": "with", "desde": "from", "sobre": "about", "entre": "between", "cada": "every", "tu": "your", "tus": "your", "una": "a", "un": "a", "el": "the", "la": "the", "los": "the", "las": "the", "y": "and", "o": "or", "de": "of", "del": "of the", "que": "that", "más": "more", "cómo": "how", "por": "for", "en": "in", "al": "to the", "mejor": "best", "todo": "everything", "todo": "everything", "listo": "ready", "listos": "ready", "vive": "live", "vivir": "live", "vida": "life", "fácil": "easy", "rápida": "fast", "rápido": "fast", "nueva": "new", "nuevo": "new", "función": "purpose", "parte": "part", "partes": "parts", "búsqueda": "search"
    };
    const reverseWords = Object.fromEntries(Object.entries(wordTranslations).map(([spanish, english]) => [english, spanish]));
    const originalText = new WeakMap();
    const originalAttributes = new WeakMap();

    const translateValue = value => value;

    const translateText = (node, language = document.documentElement.lang) => {
        if (node.parentElement?.closest(".logo, .language-toggle, [data-language]")) return;
        if (!originalText.has(node)) originalText.set(node, node.nodeValue);
        const source = originalText.get(node);
        const leading = source.match(/^\s*/)?.[0] || "";
        const trailing = source.match(/\s*$/)?.[0] || "";
        const value = source.trim();
        node.nodeValue = leading + translateValue(value, language) + trailing;
    };

    const translateAttributes = (element, language = document.documentElement.lang) => {
        const attributes = [...element.attributes].filter(attribute =>
            ["alt", "aria-label", "placeholder", "title"].includes(attribute.name) || (attribute.name.startsWith("data-") && attribute.name !== "data-language")
        );
        attributes.forEach(attribute => {
            const key = `${element.tagName}:${attribute.name}`;
            if (!originalAttributes.has(element)) originalAttributes.set(element, {});
            const originals = originalAttributes.get(element);
            if (!(key in originals)) originals[key] = attribute.value;
            element.setAttribute(attribute.name, translateValue(originals[key], language));
        });
    };

    document.documentElement.lang = "es";

    const languageObserver = new MutationObserver(records => {
        if (document.documentElement.lang !== "en") return;
        records.forEach(record => {
            record.addedNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) translateText(node, "en");
                if (node.nodeType === Node.ELEMENT_NODE) {
                    translateAttributes(node, "en");
                    node.querySelectorAll("*").forEach(element => translateAttributes(element, "en"));
                    const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT);
                    while (walker.nextNode()) translateText(walker.currentNode, "en");
                }
            });
        });
    });
    languageObserver.observe(document.body, {childList: true, subtree: true});

    const detailMedia = document.querySelector(".board-detail-media");

    if (detailMedia) {
        const originalImage = detailMedia.querySelector("img");
        const originalSource = originalImage?.getAttribute("src") || "assets/images/tabla-blanca-final.jpg";
        const originalAlt = originalImage?.getAttribute("alt") || "Tabla de surf";

        detailMedia.classList.add("detail-board-stage");
        detailMedia.innerHTML = `
            <div class="detail-board-model">
                <img class="detail-board-face detail-board-front" src="${originalSource}" alt="${originalAlt} vista superior">
                <img class="detail-board-face detail-board-back" src="assets/images/tabla-trasera.png" alt="${originalAlt} vista inferior">
            </div>
            <button class="detail-hotspot" style="top:8%;left:50%" data-detail-part="Nose" data-detail-description="La punta ayuda a entrar en la ola y aporta estabilidad." aria-label="Nose"></button>
            <button class="detail-hotspot" style="top:44%;left:35%" data-detail-part="Rail" data-detail-description="Los cantos controlan el agua y permiten dirigir la tabla durante los giros." aria-label="Rail"></button>
            <button class="detail-hotspot" style="top:49%;left:50%" data-detail-part="Stringer" data-detail-description="La línea central recorre la tabla y ayuda a mantener su rigidez." aria-label="Stringer"></button>
            <button class="detail-hotspot" style="top:78%;left:50%" data-detail-part="Pad y quillas" data-detail-description="El pad da agarre y las quillas aportan dirección y control." aria-label="Pad y quillas"></button>
            <span class="detail-board-hint">ARRASTRA PARA GIRAR · PASA POR LOS PUNTOS</span>
            <div class="detail-part-label" aria-live="polite">Selecciona una parte</div>
        `;

        const detailBoard = detailMedia.querySelector(".detail-board-model");
        const detailHint = detailMedia.querySelector(".detail-part-label");
        const detailCopy = document.querySelector(".board-detail-copy");

        detailCopy?.insertAdjacentHTML("beforeend", `
            <div class="detail-parts-list">
                <span class="section-label">PARTES DE LA TABLA</span>
                <div><strong>Nose</strong><span>Entrada y estabilidad sobre la ola.</span></div>
                <div><strong>Rails</strong><span>Bordes que ayudan a girar y controlar.</span></div>
                <div><strong>Stringer</strong><span>Línea central que aporta rigidez.</span></div>
                <div><strong>Pad y quillas</strong><span>Agarre, dirección y respuesta.</span></div>
            </div>
        `);

        const detailPopover = document.createElement("div");
        detailPopover.className = "detail-hotspot-card";
        detailPopover.innerHTML = "<strong></strong><p></p>";
        detailMedia.appendChild(detailPopover);
        let detailRotationY = -12;
        let detailRotationX = 4;
        let detailStartX = 0;
        let detailStartY = 0;
        let detailDragging = false;

        const renderDetailBoard = () => {
            detailBoard.style.transform = `perspective(1100px) rotateX(${detailRotationX}deg) rotateY(${detailRotationY}deg) rotateZ(-2deg)`;
        };

        renderDetailBoard();

        detailBoard.addEventListener("pointerdown", event => {
            detailDragging = true;
            detailStartX = event.clientX;
            detailStartY = event.clientY;
            detailBoard.classList.add("is-dragging");
            detailBoard.setPointerCapture(event.pointerId);
        });

        detailBoard.addEventListener("pointermove", event => {
            if (!detailDragging) return;
            detailRotationY += (event.clientX - detailStartX) * .55;
            detailRotationX = Math.max(-25, Math.min(25, detailRotationX - (event.clientY - detailStartY) * .3));
            detailStartX = event.clientX;
            detailStartY = event.clientY;
            renderDetailBoard();
        });

        const stopDetailDrag = event => {
            detailDragging = false;
            detailBoard.classList.remove("is-dragging");
            detailBoard.releasePointerCapture?.(event.pointerId);
        };

        detailBoard.addEventListener("pointerup", stopDetailDrag);
        detailBoard.addEventListener("pointercancel", stopDetailDrag);

        detailMedia.querySelectorAll(".detail-hotspot").forEach(point => {
            const showDetail = () => {
                detailHint.textContent = point.dataset.detailPart;
                point.classList.add("is-active");
                detailPopover.querySelector("strong").textContent = point.dataset.detailPart;
                detailPopover.querySelector("p").textContent = point.dataset.detailDescription;
                detailPopover.style.left = `${Math.min(76, Math.max(24, parseFloat(point.style.left) + 7))}%`;
                detailPopover.style.top = `${Math.max(12, parseFloat(point.style.top) - 4)}%`;
                detailPopover.classList.add("is-visible");
            };
            const hideDetail = () => {
                point.classList.remove("is-active");
                detailPopover.classList.remove("is-visible");
            };
            point.addEventListener("mouseenter", showDetail);
            point.addEventListener("mouseleave", hideDetail);
            point.addEventListener("click", event => {
                event.stopPropagation();
                detailPopover.classList.contains("is-visible") ? hideDetail() : showDetail();
            });
        });
    }

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

    document.querySelectorAll("img").forEach(image => {
        image.addEventListener("error", () => {
            image.classList.add("image-missing");
            image.parentElement?.classList.add("image-fallback");
        }, {once: true});
    });

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

        document
            .querySelectorAll(".program-card, .catalog-card, .condition-card, .values-grid article, .performance-card, .testimonial")
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

    const heroPhotoImages = document.querySelectorAll(".hero-photo-image");
    if (heroPhotoImages.length > 1) {
        let activePhotoIndex = 0;

        window.setInterval(() => {
            heroPhotoImages[activePhotoIndex].classList.remove("is-active");
            activePhotoIndex = (activePhotoIndex + 1) % heroPhotoImages.length;
            heroPhotoImages[activePhotoIndex].classList.add("is-active");
        }, 5200);
    }

    const instructorImages = document.querySelectorAll(".instructor-image");
    const instructorDots = document.querySelectorAll(".instructor-carousel-dots button");
    const instructorPrevious = document.querySelector(".instructor-carousel-prev");
    const instructorNext = document.querySelector(".instructor-carousel-next");

    if (instructorImages.length > 1) {
        let instructorPhotoIndex = 0;

        const showInstructorPhoto = index => {
            instructorPhotoIndex = (index + instructorImages.length) % instructorImages.length;
            instructorImages.forEach((image, imageIndex) => {
                image.classList.toggle("is-active", imageIndex === instructorPhotoIndex);
            });
            instructorDots.forEach((dot, dotIndex) => {
                dot.classList.toggle("is-active", dotIndex === instructorPhotoIndex);
            });
        };

        instructorPrevious?.addEventListener("click", () => showInstructorPhoto(instructorPhotoIndex - 1));
        instructorNext?.addEventListener("click", () => showInstructorPhoto(instructorPhotoIndex + 1));
        instructorDots.forEach((dot, dotIndex) => {
            dot.addEventListener("click", () => showInstructorPhoto(dotIndex));
        });
        window.setInterval(() => showInstructorPhoto(instructorPhotoIndex + 1), 5200);
    }

    document
        .querySelectorAll('a[href="index.html#about"], a[href="#about"]')
        .forEach(link => {
            link.setAttribute("href", "sobre-mi.html");
        });

    if (!window.location.pathname.endsWith("/index.html") && !window.location.pathname.endsWith("/")) {
        document
            .querySelectorAll('a[href="index.html#boards"], a[href="#boards"]')
            .forEach(link => link.setAttribute("href", "anatomia.html"));
    }

    if (!window.location.pathname.endsWith("/index.html") && !window.location.pathname.endsWith("/")) {
        document
            .querySelectorAll('a[href="index.html#conditions"], a[href="#conditions"]')
            .forEach(link => link.setAttribute("href", "condiciones.html"));
    }

    /* =====================================================
       CONDICIONES EN VIVO
    ===================================================== */

    const conditionsSection =
        document.querySelector(".conditions-section");

    if (conditionsSection) {

        const surfSpot = {
            name: "Lobitos, Piura",
            latitude: -4.45674,
            longitude: -81.28487
        };

        const weatherTemperature =
            document.querySelector("#weatherTemperature");

        const weatherSummary =
            document.querySelector("#weatherSummary");

        const weatherMeter =
            document.querySelector(".weather-meter");

        const windSpeed =
            document.querySelector("#windSpeed");

        const windDirection =
            document.querySelector("#windDirection");

        const windCard =
            document.querySelector(".wind-card");

        const waveHeight =
            document.querySelector("#waveHeight");

        const wavePeriod =
            document.querySelector("#wavePeriod");

        const waveMeter =
            document.querySelector(".wave-meter");

        const tideStatus =
            document.querySelector("#tideStatus");

        const tideSummary =
            document.querySelector("#tideSummary");

        const tideCard =
            document.querySelector(".tide-card");

        const tideTrendIcon =
            document.querySelector("#tideTrendIcon");

        const tideChartLine =
            document.querySelector(".tide-chart-line");

        const tideChartArea =
            document.querySelector(".tide-chart-area");

        const tideChartDot =
            document.querySelector(".tide-chart-dot");

        const tideLevelFill =
            document.querySelector("#tideLevelFill");

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

        const clamp = (value, min, max) =>
            Math.min(Math.max(value, min), max);

        const updateConditionVisuals = (currentWeather, currentMarine) => {
            const temperature =
                Number(currentWeather.temperature_2m);
            const wind =
                Number(currentWeather.wind_speed_10m);
            const windDegrees =
                Number(currentWeather.wind_direction_10m);
            const wave =
                Number(currentMarine.wave_height);

            if (weatherMeter && Number.isFinite(temperature)) {
                const weatherFill =
                    clamp(((temperature - 12) / 24) * 100, 12, 100);

                weatherMeter.style.setProperty("--weather-fill", `${weatherFill.toFixed(0)}%`);
            }

            if (windCard && Number.isFinite(windDegrees)) {
                windCard.style.setProperty("--wind-rotation", `${windDegrees}deg`);
            }

            if (windCard && Number.isFinite(wind)) {
                const windFill =
                    clamp((wind / 45) * 100, 14, 100);

                windCard.style.setProperty("--wind-fill", `${windFill.toFixed(0)}%`);
            }

            if (waveMeter && Number.isFinite(wave)) {
                const waveFill =
                    clamp((wave / 3.5) * 100, 16, 100);

                waveMeter.style.setProperty("--wave-fill", `${waveFill.toFixed(0)}%`);
            }
        };

        const updateTide = marine => {
            const tideTimes = marine.hourly?.time || [];
            const tideLevels = marine.hourly?.sea_level_height_msl || [];

            if (!tideTimes.length || !tideLevels.length) {
                if (tideStatus) tideStatus.textContent = "-- m";
                if (tideSummary) tideSummary.textContent = translateValue("Marea no disponible", document.documentElement.lang);
                return;
            }

            const now = new Date();
            const nearestIndex = tideTimes.reduce((closestIndex, time, index) => {
                const closestDifference =
                    Math.abs(new Date(tideTimes[closestIndex]) - now);
                const currentDifference =
                    Math.abs(new Date(time) - now);

                return currentDifference < closestDifference
                    ? index
                    : closestIndex;
            }, 0);

            const numericLevels =
                tideLevels.map(level => Number(level));

            const currentLevel =
                numericLevels[nearestIndex];

            const nextLevel =
                numericLevels[nearestIndex + 1];

            if (!Number.isFinite(currentLevel)) {
                if (tideStatus) tideStatus.textContent = "-- m";
                if (tideSummary) tideSummary.textContent = translateValue("Marea no disponible", document.documentElement.lang);
                return;
            }

            let trend = "Marea estable";
            let trendClass = "is-stable";
            let trendIcon = "~";

            if (Number.isFinite(nextLevel)) {
                const difference = nextLevel - currentLevel;

                if (difference > 0.03) {
                    trend = "Marea subiendo";
                    trendClass = "is-rising";
                    trendIcon = "↑";
                }

                if (difference < -0.03) {
                    trend = "Marea bajando";
                    trendClass = "is-falling";
                    trendIcon = "↓";
                }
            }

            const validLevels =
                numericLevels.filter(Number.isFinite);

            const minLevel =
                Math.min(...validLevels);

            const maxLevel =
                Math.max(...validLevels);

            const levelRange =
                maxLevel - minLevel || 1;

            const chartPoints =
                numericLevels.map((level, index) => {
                    const x = tideTimes.length > 1
                        ? (index / (tideTimes.length - 1)) * 180
                        : 90;
                    const y = Number.isFinite(level)
                        ? 48 - ((level - minLevel) / levelRange) * 40
                        : 48;

                    return `${x.toFixed(1)},${y.toFixed(1)}`;
                });

            const currentX = tideTimes.length > 1
                ? (nearestIndex / (tideTimes.length - 1)) * 180
                : 90;
            const currentY =
                48 - ((currentLevel - minLevel) / levelRange) * 40;
            const fillPercent =
                ((currentLevel - minLevel) / levelRange) * 70 + 18;

            if (tideStatus) tideStatus.textContent = `${currentLevel.toFixed(2)} m`;
            if (tideSummary) tideSummary.textContent = translateValue(trend, document.documentElement.lang);
            if (tideTrendIcon) tideTrendIcon.textContent = trendIcon;
            if (tideCard) {
                tideCard.classList.remove("is-rising", "is-falling", "is-stable");
                tideCard.classList.add(trendClass);
            }
            if (tideChartLine) tideChartLine.setAttribute("points", chartPoints.join(" "));
            if (tideChartArea) tideChartArea.setAttribute("d", `M 0 54 L ${chartPoints.join(" L ")} L 180 54 Z`);
            if (tideChartDot) {
                tideChartDot.setAttribute("cx", currentX.toFixed(1));
                tideChartDot.setAttribute("cy", currentY.toFixed(1));
            }
            if (tideLevelFill) tideLevelFill.style.setProperty("--tide-fill", `${fillPercent.toFixed(0)}%`);
        };

        const updateConditions = async () => {

            const coordinates =
                `latitude=${surfSpot.latitude}&longitude=${surfSpot.longitude}`;

            const weatherUrl =
                `https://api.open-meteo.com/v1/forecast?${coordinates}&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m&wind_speed_unit=kmh&timezone=auto`;

            const marineUrl =
                `https://marine-api.open-meteo.com/v1/marine?${coordinates}&current=wave_height,wave_period&hourly=sea_level_height_msl&past_hours=2&forecast_hours=6&cell_selection=sea&timezone=auto`;

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
                if (windDirection) windDirection.textContent = `${translateValue("Dirección", document.documentElement.lang)} ${translateValue(degreesToDirection(currentWeather.wind_direction_10m), document.documentElement.lang)}`;
                if (waveHeight) waveHeight.textContent = `${Number(currentMarine.wave_height || 0).toFixed(1)} m`;
                if (wavePeriod) wavePeriod.textContent = `${translateValue("Periodo", document.documentElement.lang)} ${Number(currentMarine.wave_period || 0).toFixed(1)} s`;
                updateConditionVisuals(currentWeather, currentMarine);
                updateTide(marine);
                const updatedTime = new Date().toLocaleTimeString("es-PE", {hour: "2-digit", minute: "2-digit"});
                if (updatedLabel) updatedLabel.textContent = `${translateValue("Actualizado", document.documentElement.lang)} ${updatedTime}`;

            } catch (error) {

                if (updatedLabel) updatedLabel.textContent = translateValue("Datos temporalmente no disponibles", document.documentElement.lang);
                if (weatherSummary) weatherSummary.textContent = translateValue("Revisa la conexión para actualizar", document.documentElement.lang);
                if (tideSummary) tideSummary.textContent = translateValue("Revisa la conexion para actualizar", document.documentElement.lang);

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

    if (cursor && cursorRing && window.innerWidth > 800 && typeof gsap === "undefined") {
        let ringX = window.innerWidth / 2;
        let ringY = window.innerHeight / 2;
        let targetX = ringX;
        let targetY = ringY;

        window.addEventListener("mousemove", event => {
            targetX = event.clientX;
            targetY = event.clientY;
            cursor.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`;
        });

        const animateCursorRing = () => {
            ringX += (targetX - ringX) * .16;
            ringY += (targetY - ringY) * .16;
            cursorRing.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
            requestAnimationFrame(animateCursorRing);
        };

        animateCursorRing();

        document.querySelectorAll("a, button, .hotspot").forEach(element => {
            element.addEventListener("mouseenter", () => cursorRing.classList.add("active"));
            element.addEventListener("mouseleave", () => cursorRing.classList.remove("active"));
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
        document.querySelector(".hero-orb-one")
    ) {

        gsap.to(".hero-orb-one", {

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
        document.querySelector(".hero-orb-two")
    ) {

        gsap.to(".hero-orb-two", {

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
            document.querySelector(".intro-content");


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


    if (anatomySection) {
        anatomySection.classList.add("anatomy-ready");
    }


    const anatomyInteractiveBoard =
        document.querySelector(".interactive-board");

    if (anatomyInteractiveBoard && anatomyBoard) {

        anatomyInteractiveBoard.addEventListener("mousemove", event => {

            const bounds = anatomyInteractiveBoard.getBoundingClientRect();
            const pointerX = (event.clientX - bounds.left) / bounds.width - 0.5;
            const pointerY = (event.clientY - bounds.top) / bounds.height - 0.5;

            anatomyBoard.style.setProperty("--board-rotate-y", `${pointerX * 10}deg`);
            anatomyBoard.style.setProperty("--board-rotate-x", `${pointerY * -8}deg`);
            anatomyBoard.style.setProperty("--board-scale", anatomyBoard.dataset.focus ? "1.24" : "1");

        });

        anatomyInteractiveBoard.addEventListener("mouseleave", () => {

            delete anatomyBoard.dataset.focus;
            anatomyInteractiveBoard.classList.remove("has-focus");
            anatomyBoard.style.setProperty("--board-x", "0px");
            anatomyBoard.style.setProperty("--board-scale", "1");
            anatomyBoard.style.setProperty("--board-rotate-x", "0deg");
            anatomyBoard.style.setProperty("--board-rotate-y", "0deg");

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

            tip:
                "Una punta más ancha ayuda a remar con confianza y facilita la entrada en olas suaves.",

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

            tip:
                "El alma mantiene la tabla alineada y reparte la flexión cuando aceleras sobre la ola.",

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

            tip:
                "Apoyar el peso en los cantos es la clave para dirigir la tabla durante un giro.",

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

            tip:
                "Mantén el pecho centrado sobre esta zona para encontrar equilibrio y remar mejor.",

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

            tip:
                "Presiona el pad con el pie trasero para controlar la tabla sin perder estabilidad.",

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

            tip:
                "Una cola más estrecha libera el agua rápido y responde mejor a los cambios de dirección.",

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

    const infoTip =
        document.getElementById("infoTip");


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
            !infoProgress ||
            !infoTip
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
                        translateValue(data.title, document.documentElement.lang);

                    infoDescription.textContent =
                        translateValue(data.description, document.documentElement.lang);

                    infoFunction.textContent =
                        translateValue(data.function, document.documentElement.lang);

                    infoInfluence.textContent =
                        translateValue(data.influence, document.documentElement.lang);

                    infoPercent.textContent =
                        data.percent + "%";

                    infoTip.textContent =
                        data.tip;


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
            infoTitle.textContent = translateValue(data.title, document.documentElement.lang);
            infoDescription.textContent = translateValue(data.description, document.documentElement.lang);
            infoFunction.textContent = translateValue(data.function, document.documentElement.lang);
            infoInfluence.textContent = translateValue(data.influence, document.documentElement.lang);
            infoPercent.textContent = data.percent + "%";
            infoTip.textContent = data.tip;

            infoProgress.style.width =
                data.percent + "%";

        }


        /* Movimiento de la tabla */

        if (anatomyBoard) {

            let movement = 0;
            const zoomOrigins = {
                nose: "50% 8%",
                stringer: "50% 50%",
                rail: "30% 48%",
                center: "50% 39%",
                pad: "50% 78%",
                tail: "50% 94%"
            };

            if (part === "rail") {
                movement = -22;
            }

            if (part === "nose") {
                movement = 10;
            }

            if (part === "tail") {
                movement = -10;
            }

            anatomyBoard.style.transformOrigin = zoomOrigins[part] || "50% 50%";
            anatomyBoard.dataset.focus = part;
            anatomyInteractiveBoard?.classList.add("has-focus");
            anatomyBoard.style.setProperty("--board-x", `${movement}px`);
            anatomyBoard.style.setProperty("--board-scale", "1.24");

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

                anatomyBoard.style.setProperty("--board-x", "0px");
                anatomyBoard.style.setProperty("--board-scale", "1");
                anatomyBoard.style.setProperty("--board-rotate-x", "0deg");
                anatomyBoard.style.setProperty("--board-rotate-y", "0deg");

            }
        );

    }

    const stanceStage = document.querySelector(".stance-stage");
    const stanceImage = document.querySelector("#stanceImage");
    const stanceTabs = document.querySelectorAll(".stance-tab");
    const stanceTitle = document.querySelector("#stanceTitle");
    const stanceDescription = document.querySelector("#stanceDescription");
    const stanceStep = document.querySelector("#stanceStep");
    const stanceMeterFill = document.querySelector("#stanceMeterFill");
    const stanceStageLabel = document.querySelector("#stanceStageLabel");

    const stances = {
        stand: {image: "assets/images/henry-surfeando.jpg", alt: "Henry de pie sobre una tabla de surf", title: "De pie sobre la tabla", description: "Rodillas flexionadas, mirada al frente y peso repartido entre ambos pies para mantener el equilibrio.", label: "DE PIE / EQUILIBRIO", step: "01 / 03", meter: "88%"},
        paddle: {image: "assets/images/henry-clase-surf.jpg", alt: "Henry enseñando a remar sobre una tabla de surf", title: "Remando hacia la ola", description: "Mantén el cuerpo centrado sobre el stringer y usa brazadas largas para avanzar sin perder dirección.", label: "REMANDO / DIRECCIÓN", step: "02 / 03", meter: "58%"},
        "pop-up": {image: "assets/images/henry-con-alumnos.jpg", alt: "Henry enseñando la posición de pop-up sobre una tabla", title: "El pop-up", description: "Apoya las manos, lleva los pies debajo del cuerpo y sube de una vez sin mirar hacia abajo.", label: "POP-UP / TRANSICIÓN", step: "03 / 03", meter: "72%"}
    };

    stanceTabs.forEach(tab => tab.addEventListener("click", () => {
        const data = stances[tab.dataset.stance];
        if (!data || !stanceImage) return;
        stanceTabs.forEach(item => {
            const active = item === tab;
            item.classList.toggle("is-active", active);
            item.setAttribute("aria-selected", active ? "true" : "false");
        });
        stanceImage.classList.add("is-changing");
        window.setTimeout(() => {
            stanceImage.src = data.image;
            stanceImage.alt = data.alt;
            stanceImage.classList.remove("is-changing");
        }, 180);
        if (stanceTitle) stanceTitle.textContent = data.title;
        if (stanceDescription) stanceDescription.textContent = data.description;
        if (stanceStep) stanceStep.textContent = data.step;
        if (stanceStageLabel) stanceStageLabel.textContent = data.label;
        if (stanceMeterFill) stanceMeterFill.style.width = data.meter;
    }));

    if (stanceStage && stanceImage) {
        let stanceDragging = false;
        let stanceStartX = 0;
        stanceStage.addEventListener("pointerdown", event => {
            stanceDragging = true;
            stanceStartX = event.clientX;
            stanceStage.setPointerCapture(event.pointerId);
            stanceStage.classList.add("is-dragging");
        });
        stanceStage.addEventListener("pointermove", event => {
            if (!stanceDragging) return;
            const movement = Math.max(-18, Math.min(18, (event.clientX - stanceStartX) * .08));
            stanceImage.style.setProperty("--stance-shift", `${movement}px`);
        });
        const stopDragging = event => {
            stanceDragging = false;
            stanceStage.classList.remove("is-dragging");
            stanceImage.style.setProperty("--stance-shift", "0px");
            stanceStage.releasePointerCapture?.(event.pointerId);
        };
        stanceStage.addEventListener("pointerup", stopDragging);
        stanceStage.addEventListener("pointercancel", stopDragging);
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

    let dragRotationY = 0;
    let dragRotationX = 0;


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

                if (viewBoard) {
                    dragRotationY = 0;
                    dragRotationX = 0;
                    viewBoard.classList.remove("view-deck", "view-bottom", "view-rocker");
                    viewBoard.classList.add(`view-${selected}`);
                        viewBoard.classList.remove("show-fins");
                    viewBoard.style.removeProperty("transform");

                    if (viewTitle) viewTitle.textContent = translateValue(data.title, document.documentElement.lang);
                    if (viewDescription) viewDescription.textContent = translateValue(data.description, document.documentElement.lang);
                    if (viewLabel) viewLabel.textContent = translateValue(data.label, document.documentElement.lang);

                    return;
                }


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
                                    translateValue(data.title, document.documentElement.lang);
                            }

                            if (viewDescription) {
                                viewDescription.textContent =
                                    translateValue(data.description, document.documentElement.lang);
                            }

                            if (viewLabel) {
                                viewLabel.textContent =
                                    translateValue(data.label, document.documentElement.lang);
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
                            translateValue(data.title, document.documentElement.lang);
                    }

                    if (viewDescription) {
                        viewDescription.textContent =
                            translateValue(data.description, document.documentElement.lang);
                    }

                    if (viewLabel) {
                        viewLabel.textContent =
                            translateValue(data.label, document.documentElement.lang);
                    }

                }

            }
        );

    });

    if (viewBoard) {
        let pointerStartX = 0;
        let pointerStartY = 0;
        let isDraggingBoard = false;

        const updateDraggedBoard = () => {
            viewBoard.style.transform = `perspective(1000px) rotateX(${dragRotationX}deg) rotateY(${dragRotationY}deg) rotateZ(0deg) scale(1.04)`;
            const rearVisible = Math.cos(dragRotationY * Math.PI / 180) < 0;
            viewBoard.classList.toggle("show-fins", rearVisible);
        };

        viewBoard.addEventListener("pointerdown", event => {
            isDraggingBoard = true;
            pointerStartX = event.clientX;
            pointerStartY = event.clientY;
            viewBoard.classList.add("is-dragging");
            viewBoard.setPointerCapture(event.pointerId);
        });

        viewBoard.addEventListener("pointermove", event => {
            if (!isDraggingBoard) return;

            dragRotationY += (event.clientX - pointerStartX) * .8;
            dragRotationX = Math.max(-72, Math.min(72, dragRotationX - (event.clientY - pointerStartY) * .45));
            pointerStartX = event.clientX;
            pointerStartY = event.clientY;
            updateDraggedBoard();
        });

        const finishBoardDrag = event => {
            if (!isDraggingBoard) return;
            isDraggingBoard = false;
            viewBoard.classList.remove("is-dragging");
            viewBoard.releasePointerCapture?.(event.pointerId);
        };

        viewBoard.addEventListener("pointerup", finishBoardDrag);
        viewBoard.addEventListener("pointercancel", finishBoardDrag);
    }



    /* =====================================================
       PERFORMANCE CARDS
    ===================================================== */

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
                ".surf-class-card, .surfboard-card, .about-card, .gallery-item, .testimonial-card, .class-card, .experience-step, .catalog-card, .program-card, .performance-card, .faq-item"
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

        question.setAttribute(
            "aria-expanded",
            item.classList.contains("active") ? "true" : "false"
        );


        question.addEventListener(
            "click",
            () => {

                const isActive =
                    item.classList.contains("active");


                faqItems.forEach(other => {

                    other.classList.remove("active");
                    other.querySelector(".faq-question")?.setAttribute("aria-expanded", "false");

                });


                if (!isActive) {

                    item.classList.add("active");
                    question.setAttribute("aria-expanded", "true");

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
                    "🏄‍♂️ NUEVA RESERVA DE SURF",
                    "Hola Henry, quiero reservar una clase.",
                    "",
                    "👤 Nombre: " + formData.get("bookingName"),
                    "📞 Teléfono: " + formData.get("bookingPhone"),
                    "🌊 Clase: " + formData.get("bookingClass"),
                    "Nivel: " + formData.get("bookingLevel"),
                    "📅 Fecha: " + formData.get("bookingDate"),
                    "🕒 Horario: " + formData.get("bookingTime"),
                    "📝 Mensaje: " + (formData.get("bookingMessage") || "Sin mensaje"),
                    "",
                    "Nos vemos en el agua 🌴"
                ].join("\n");

                window.open(
                    "https://wa.me/51961385016?text=" + encodeURIComponent(message),
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

        const resultImage =
            finder.querySelector("#finderBoardImage");

        const resultTag =
            finder.querySelector("#finderBoardTag");

        const resetButton =
            finder.querySelector("#finderReset");

        const answers = [];

        const recommendations = {
            beginner: {
                title: "Longboard de iniciación",
                description: "Una tabla amplia y estable para ganar confianza, aprender a remar y disfrutar tus primeras olas.",
                image: "assets/images/clase-01.jpg",
                tag: "BOARD MATCH / 01"
            },
            intermediate: {
                title: "Funboard versátil",
                description: "El equilibrio ideal entre estabilidad y maniobrabilidad para seguir progresando con seguridad.",
                image: "assets/images/clase-02.jpg",
                tag: "BOARD MATCH / 02"
            },
            advanced: {
                title: "Shortboard de performance",
                description: "Una tabla rápida y reactiva para aprovechar mejor cada sección y trabajar tus maniobras.",
                image: "assets/images/clase-03.jpg",
                tag: "BOARD MATCH / 03"
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

                    if (resultImage) {
                        resultImage.src = recommendation.image;
                        resultImage.alt = `Tabla recomendada: ${recommendation.title}`;
                    }

                    if (resultTag) {
                        resultTag.textContent = recommendation.tag;
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
                    <span>${card.dataset.boardType || "SURFEANDO CON HENRY"}</span>
                    <h3>${card.dataset.boardTitle || image.alt}</h3>
                    <p>${card.dataset.boardDescription || "Tabla de surf de Surfeando con Henry."}</p>
                    <strong>${card.dataset.boardSpecs || "Consulta disponibilidad por WhatsApp"}</strong>
                    <a class="lightbox-board-action" href="https://wa.me/51961385016?text=${whatsappMessage}" target="_blank" rel="noopener">CONSULTAR ESTA TABLA <span>↗</span></a>
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

    const lessonOptions = document.querySelectorAll(".lesson-option");
    const lessonBookingButton = document.querySelector(".pricing-main-button");

    lessonOptions.forEach(option => {
        option.addEventListener("click", () => {
            lessonOptions.forEach(item => item.classList.remove("is-selected"));
            option.classList.add("is-selected");
            if (lessonBookingButton) {
                lessonBookingButton.dataset.booking = option.dataset.booking || "group";
                lessonBookingButton.innerHTML = `<span>◉</span> Reservar ${option.querySelector("h4")?.textContent || "mi clase"}`;
            }
        });
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

                    const bookingMessages = {
                        rental: "Hola, quiero informacion sobre el alquiler de tabla y wetsuit.",
                        private: "Hola, quiero informacion sobre una clase privada de surf.",
                        group: "Hola, quiero informacion sobre las clases de surf."
                    };

                    const message =
                        bookingMessages[type] || bookingMessages.group;


                    const whatsappNumber =
                        "51961385016";


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
                    "51961385016";


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
                        alt="${image.alt || "Surfeando con Henry"}"
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

        const pricingGrid = document.querySelector(".pricing-grid");

        if (pricingGrid) {
            const revealPricing = () => pricingGrid.classList.add("pricing-is-visible");

            if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
                ScrollTrigger.create({
                    trigger: pricingGrid,
                    start: "top 82%",
                    once: true,
                    onEnter: revealPricing
                });
            } else if ("IntersectionObserver" in window) {
                const pricingObserver = new IntersectionObserver(entries => {
                    if (!entries[0].isIntersecting) return;
                    revealPricing();
                    pricingObserver.disconnect();
                }, {threshold: .15});
                pricingObserver.observe(pricingGrid);
            } else {
                revealPricing();
            }
        }

        const hero = document.querySelector(".hero");
        const heroPhoto = document.querySelector(".hero-photo-image.is-active");

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
            ".included-list > div",
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

    /* Reveals and parallax stay available on pages without GSAP. */
    if (!reduceMotion) {
        const revealTargets = document.querySelectorAll(
            "main > section, .catalog-card, .program-card, .condition-card, .values-grid article, .included-list > div, .gallery-item, .faq-item, .info-card"
        );

        if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
            revealTargets.forEach((element, index) => {
                element.classList.add("motion-reveal");
                element.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
            });

            if ("IntersectionObserver" in window) {
                const revealObserver = new IntersectionObserver(entries => {
                    entries.forEach(entry => {
                        if (!entry.isIntersecting) return;
                        entry.target.classList.add("is-revealed");
                        revealObserver.unobserve(entry.target);
                    });
                }, {threshold: .12, rootMargin: "0px 0px -7%"});

                revealTargets.forEach(element => revealObserver.observe(element));
            } else {
                revealTargets.forEach(element => element.classList.add("is-revealed"));
            }
        }

        const parallaxTargets = document.querySelectorAll(
            ".hero-photo-image, .instructor-image, .gallery-item img, .catalog-card-image img"
        );
        let parallaxFrame = 0;
        const renderParallax = () => {
            parallaxFrame = 0;
            parallaxTargets.forEach(image => {
                const bounds = image.getBoundingClientRect();
                if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
                const offset = (bounds.top + bounds.height / 2 - window.innerHeight / 2) * -.025;
                image.style.setProperty("--scroll-offset", `${offset.toFixed(2)}px`);
            });
        };

        window.addEventListener("scroll", () => {
            if (!parallaxFrame) parallaxFrame = requestAnimationFrame(renderParallax);
        }, {passive: true});
        window.addEventListener("resize", () => {
            if (!parallaxFrame) parallaxFrame = requestAnimationFrame(renderParallax);
        }, {passive: true});
        renderParallax();
    }

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

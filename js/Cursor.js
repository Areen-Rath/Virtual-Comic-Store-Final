AFRAME.registerComponent("cursor-listener", {
    schema: {
        itemId: {
            type: "string",
            default: ''
        }
    },
    init: function() {
        this.enter();
        this.leave();
    },
    update: function() {
        const fadeBackground = document.querySelector("#fade-background");

        let c = fadeBackground.children;
        if (c.length > 0) {
            for (var i = 0; i <= c.length; i++) {
                fadeBackground.removeChild(c[i]);
            }
        } else {
            this.click();
        }
    },
    handlePosters: function() {
        const id = this.el.getAttribute("id");
        const posterssId = ["superman", "spiderman", "avengers", "calvinhobbes"];
        if (posterssId.includes(id)) {
            const postersContainer = document.querySelector("#posters-container");
            postersContainer.setAttribute("cursor-listener", {
                itemId: id
            });
            this.el.setAttribute("material", {
                color: "#d76b30",
                opacity: 1
            });
        }
    },
    enter: function() {
        this.el.addEventListener("mouseenter", () => {
            this.handlePosters();
        });
    },
    leave: function() {
        this.el.addEventListener("mouseleave", () => {
            const { itemId } = this.data;
            if (itemId) {
                const el = document.querySelector(`#${itemId}`);
                const id = el.getAttribute("id");
                if (id === itemId) {
                    el.setAttribute("material", {
                        color: "#0077cc",
                        opacity: 1
                    });
                }
            }
        });
    },
    click: function() {
        this.el.addEventListener("click", e => {
            const postersContainer = document.querySelector("#posters-container");
            const fadeBackground = document.querySelector("#fade-background");
            const cursor = document.querySelector("#cursor");
            const title = document.querySelector("#title");
            const { state } = postersContainer.getAttribute("posters");
            if (state === "posters-list") {
                const id = this.el.getAttribute("id");
                const postersId = ["superman", "spiderman", "avengers", "calvinhobbes"];
                if (postersId.includes(id)) {
                    postersContainer.setAttribute("posters", {
                        state: "view"
                    });
                    fadeBackground.setAttribute("visible", true);
                    fadeBackground.setAttribute("info-banner", {
                        card: id
                    });
                    title.setAttribute("visible", false);
                    cursor.setAttribute("visible", false);
                }
            } else {
                fadeBackground.setAttribute("visible", false);
                title.setAttribute("visible", true);
                cursor.setAttribute("visible", true);
            }
        });
    }
});
AFRAME.registerComponent("info-banner", {
    schema: {
        card: {
            type: "string",
            default: ""
        }
    },
    init: function() {
        this.fadeBackground = this.el;
        this.createBanner();
    },
    createBanner: function() {
        const cardDetails = [
            {
                id: "superman",
                src: '../assets/strips/superman.jpg',
                title: "Superman",
                desc: "Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938)."
            },
            {
                id: "spiderman",
                src: '../assets/strips/spiderman.jpg',
                title: "Spiderman",
                desc: "Spider-Man is a superhero appearing in American comic books published by Marvel Comics. Created by writer-editor Stan Lee and artist Steve Ditko, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books."
            },
            {
                id: "avengers",
                src: '../assets/strips/avengers.jpg',
                title: "Avengers",
                desc: "The Avengers are a team of superheroes appearing in American comic books published by Marvel Comics. The team made its debut in The Avengers #1 (cover-dated Sept. 1963), created by writer-editor Stan Lee and artist/co-plotter Jack Kirby."
            },
            {
                id: "calvinhobbes",
                src: '../assets/strips/calvinhobbes.jpg',
                title: "Calvin and Hobbes",
                desc: "Calvin and Hobbes is a daily American comic strip created by cartoonist Bill Watterson that was syndicated from November 18, 1985, to December 31, 1995. Commonly cited as 'the last great newspaper comic',[2][3][4] Calvin and Hobbes has enjoyed broad and enduring popularity, influence, and academic and philosophical interest."
            }
        ]
        if (this.data.card !== "") {
            for (let i in cardDetails) {
                if (cardDetails[i].id === this.data.card) {
                    let data = cardDetails[i];
                    break;
                }
            }
            const entity = document.createElement("a-entity");
            entity.setAttribute("position", {
                x: 0,
                y: 0,
                z: -1.5
            });
            const image = this.createImage(data.src);
            entity.appendChild(image);
            const box = this.createBox(data.title, data.desc);
            entity.appendChild(box);
            this.fadeBackground.appendChild(entity);
        }
    },
    createImage: function(img) {
        const entity = document.createElement("a-entity");
        entity.setAttribute("geometry", {
            primitive: "plane",
            width: 40,
            height: 15
        });
        entity.setAttribute("position", {
            x: 0,
            y: 7.5,
            z: -30
        });
        entity.setAttribute("material", {
            src: img
        });
        return entity;
    },
    createBox: function(title, desc) {
        const entity = document.createElement("a-entity");
        entity.setAttribute("geometry", {
            primitive: "plane",
            width: 40,
            height: 20
        });
        entity.setAttribute("position", {
            x: 0,
            y: -10,
            z: -30
        });
        entity.setAttribute("material", {
            color: "black"
        });
        const title = this.createTitle();
        entity.appendChild(title);
        const desc = this.createDescription();
        entity.appendChild(desc);
        return entity;
    },
    createTitle: function(text) {
        const entity = document.createElement("a-entity");
        entity.setAttribute("position", {
            x: 0,
            y: 0,
            z: 0
        });
        entity.setAttribute("text", {
            font: "exo2bold",
            align: "center",
            width: 2,
            color: "#fff",
            value: text
        });
        return entity;
    },
    createDescription: function(text) {
        const entity = document.createElement("a-entity");
        entity.setAttribute("position", {
            x: 0,
            y: 5,
            z: 0
        });
        entity.setAttribute("text", {
            font: "exo2bold",
            align: "center",
            width: 1,
            color: "#fff",
            value: text
        });
        return entity;
    }
});
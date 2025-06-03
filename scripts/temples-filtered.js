
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    hamburger.textContent = navMenu.classList.contains('show') ? '✖' : '☰';
});


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manaus Brazil",
        location: "Manaus, Brazil",
        dedicated: "2007, May, 23",
        area: 32032,
        imageUrl: "images/138-Manaus-Brazil-Temple (1) (1).jpg"
      },
    {
        templeName: "Auckland New Zealand",
        location: "Auckland, New Zealand",
        dedicated: "2025, April, 13",
        area: 45456,
        imageUrl: "images/auckland-new-zealand-temple-56277-main (1).jpg"
    },
    {
        templeName: "Bentonville Arkansas",
        location: "Bentonville, Arkansas",
        dedicated: "2023, September, 17",
        area: 28472,
        imageUrl:
        "images/bentonville-arkansas-temple-55568-main (1).jpg"
      }
];


const templeContainer = document.getElementById('temple-cards');

function renderTemples(filteredTemples) {
    templeContainer.innerHTML = "";
    filteredTemples.forEach(temple => {
        const card = document.createElement('section');
        card.classList.add('temple-card');


        const name = document.createElement('h2');
        name.textContent = temple.templeName;
        card.appendChild(name);


        const location = document.createElement('p');
        location.textContent = `Location: ${temple.location}`;
        card.appendChild(location);


        const dedicated = document.createElement('p');
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        card.appendChild(dedicated);


        const area = document.createElement('p');
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
        card.appendChild(area);


        if (temple.imageUrl) {
            const img = document.createElement('img');
            img.src = temple.imageUrl;
            img.alt = temple.templeName;
            img.loading = 'lazy';
            img.style.maxWidth = "100%";
            img.style.height = "auto";
            card.appendChild(img);
        }

        templeContainer.appendChild(card);
    });
}


document.getElementById('home').addEventListener('click', () => {
    renderTemples(temples);
});

document.getElementById('old').addEventListener('click', () => {
    renderTemples(temples.filter(t => {
        const year = parseInt(t.dedicated.split(',')[0]);
        return year < 1900;
    }));
});

document.getElementById('new').addEventListener('click', () => {
    renderTemples(temples.filter(t => {
        const year = parseInt(t.dedicated.split(',')[0]);
        return year > 2000;
    }));
});

document.getElementById('large').addEventListener('click', () => {
    renderTemples(temples.filter(t => t.area > 90000));
});

document.getElementById('small').addEventListener('click', () => {
    renderTemples(temples.filter(t => t.area < 10000));
});


renderTemples(temples);

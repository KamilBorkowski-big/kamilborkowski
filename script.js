// Obiekt z danymi dla każdej kategorii
const sections = {
  python: {
    image: "pythonprawa.png",
    color: "#ffcc00",
    title: "Projekty w Pythonie",
    description: "Prezentacja projektów w Pythonie: automatyzacja, analiza danych, skrypty i aplikacje webowe."
  },
  html: {
    image: "htmlprawa.png",
    color: "#00ff00",
    title: "Projekty w HTML",
    description: "Przykłady stron internetowych, szablony i responsywne projekty stworzone przy użyciu HTML, CSS i JavaScript."
  },
  gry: {
    image: "gameprawa.png",
    color: "#ff9900",
    title: "Moje gry",
    description: "Prezentacja gier przeglądarkowych i mobilnych, wykonanych w różnych technologiach."
  },
  android: {
    image: "androidprawa.png",
    color: "#9933ff",
    title: "Projekty na Androida",
    description: "Prezentacja aplikacji mobilnych tworzonych na platformę Android, przykłady interfejsów i funkcjonalności."
  },
  podroz: {
    image: "escapeprawa.png",
    color: "#00cccc",
    title: "Wirtualna podróż",
    description: "Interaktywna podróż po najciekawszych miejscach, z wykorzystaniem map, zdjęć i opowieści."
  },
  ai: {
    image: "aiprawa.png",
    color: "#ffcc00",
    title: "AI Sztuczna Inteligencja",
    description: "Projekty związane ze sztuczną inteligencją i uczeniem maszynowym."
  },
  viby: {
    image: "vibyprawa.png",
    color: "#39FF14",
    title: "Czujesz te viby!?",
    description: "Interesuję się gamingiem: Forza, Fourunner, World of Tanks, Fortnite itp., a także samochodami wyścigowymi i ciężarówkami."
  }
};

function showContent(category) {
  const content = document.getElementById('contentFrame');
  
  // Jeśli kategoria nie istnieje – pokaż komunikat
  if (!sections[category]) {
    content.innerHTML = `<p class="intro-text">Wybierz kategorię, aby zobaczyć więcej informacji.</p>`;
    return;
  }
  
  const { image, color, title, description } = sections[category];
  content.innerHTML = `
    <div class="content-section" style="background-image: url('assets/${image}'); color: ${color};">
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
  `;
}

import { useState } from "react";

const facts = [
  "Raccoons can rotate their hind feet 180 degrees, allowing them to climb down trees headfirst.",
  "The English word 'raccoon' comes from the Powhatan word 'aroughcun', meaning 'animal that scratches with its hands'.",
  "Raccoons have been known to open complex locks, jars, and latches — they can remember solutions to tasks for up to 3 years.",
  "A raccoon's hands have four times more sensory receptors than their feet. Wetting their paws increases sensitivity even further.",
  "Raccoons wash their food not for cleanliness, but because water helps their nerve endings gather more tactile information.",
  "Baby raccoons are called 'kits'. A mother raccoon can have 1 to 7 kits per litter.",
  "Raccoons can run up to 24 km/h (15 mph) and are excellent swimmers.",
  "In a 1908 study, raccoons outperformed cats and dogs on memory tests — and nearly matched rhesus monkeys.",
  "A group of raccoons is called a 'gaze'. They are mostly solitary but sometimes share dens in winter.",
  "Raccoons have a black 'mask' that reduces glare and may enhance their night vision.",
  "Urban raccoons have learned to look both ways before crossing the street.",
  "Raccoons have five toes on each paw, giving their tracks a tiny handprint appearance.",
  "The raccoon's scientific name, Procyon lotor, means 'washing pre-dog'.",
  "Raccoons can fall from heights of 12 meters (40 feet) without injury.",
  "In Japan, a 1977 anime about a pet raccoon caused a craze — thousands were imported, then released, and now they're an invasive species there.",
];

function getRandomFact(currentFact) {
  let next;
  do {
    next = facts[Math.floor(Math.random() * facts.length)];
  } while (next === currentFact && facts.length > 1);
  return next;
}

export default function App() {
  const [fact, setFact] = useState(() => getRandomFact(null));
  const [animate, setAnimate] = useState(false);

  function handleNewFact() {
    setAnimate(true);
    setTimeout(() => {
      setFact(getRandomFact(fact));
      setAnimate(false);
    }, 200);
  }

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-100 flex flex-col items-center justify-center px-6">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="text-7xl">🦝</div>

        <h1 className="text-3xl font-bold tracking-tight">Raccoon Facts x3</h1>

        <div
          className={`bg-zinc-800 rounded-2xl p-8 shadow-lg border border-zinc-700 transition-opacity duration-200 ${
            animate ? "opacity-0" : "opacity-100"
          }`}
        >
          <p className="text-lg leading-relaxed">{fact}</p>
        </div>

        <button
          onClick={handleNewFact}
          className="bg-purple-600 hover:bg-purple-500 active:scale-95 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-150 cursor-pointer"
        >
          Another one!
        </button>

        <p className="text-zinc-500 text-sm">
          {facts.length} trash panda facts and counting
        </p>
      </div>
    </div>
  );
}

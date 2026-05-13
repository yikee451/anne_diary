export const timelineEvents = [
  {
    year: '1933',
    title: 'A country turns inward',
    event: 'Rise of Nazism',
    text: 'Anti-Jewish laws and public intimidation begin reshaping ordinary life into something watched, measured, and unsafe.',
    compression: 0.02,
  },
  {
    year: '1934',
    title: 'Leaving Frankfurt',
    event: 'Frank family relocation',
    text: 'The Frank family settles in Amsterdam, seeking safety in a city that still feels open enough to breathe.',
    compression: 0.12,
  },
  {
    year: '1942',
    title: 'Behind the bookshelf',
    event: 'Entering the Secret Annex',
    text: 'A hidden door becomes a border. Rooms shrink into a world where every footstep must be negotiated.',
    compression: 0.28,
  },
  {
    year: '1943',
    title: 'Life reduced to whispers',
    event: 'Daily life in hiding',
    text: 'Days are arranged around silence, rationed movement, and the fragile courage of helpers outside the walls.',
    compression: 0.44,
  },
  {
    year: '1943',
    title: 'A private page opens',
    event: 'Anne writing her diary',
    text: 'Writing becomes a room that cannot be searched, a way to remain vivid when the world demands disappearance.',
    compression: 0.56,
  },
  {
    year: '1944',
    title: 'News from the radio',
    event: 'Normandy landing',
    text: 'Hope arrives as distant static. Liberation feels suddenly imaginable, but still unreachable from the annex.',
    compression: 0.68,
  },
  {
    year: '1944',
    title: 'The door opens',
    event: 'Discovery and arrest',
    text: 'The hidden life is violently interrupted. What was quiet becomes exposed in a single, irreversible moment.',
    compression: 0.86,
    rupture: true,
  },
  {
    year: '1944-45',
    title: 'Names become numbers',
    event: 'Concentration camps',
    text: 'The family is deported. Anne and Margot die in Bergen-Belsen shortly before liberation.',
    compression: 0.94,
  },
  {
    year: '1947',
    title: 'A voice survives',
    event: 'Publication of the diary',
    text: 'Otto Frank publishes Anne’s diary, carrying her words into the world as testimony and warning.',
    compression: 1,
  },
];

export const themes = [
  {
    name: 'Fear',
    quote: 'Every creak of the building could become a question.',
    description: 'Fear is rendered as attention: the body listening before the mind can rest.',
  },
  {
    name: 'Loneliness',
    quote: 'Paper is more patient than people.',
    description: 'Isolation turns the diary into witness, companion, and private shelter.',
  },
  {
    name: 'Identity',
    quote: 'Anne writes toward the self she refuses to surrender.',
    description: 'A young voice insists on complexity while history tries to flatten human beings into categories.',
  },
  {
    name: 'Hope',
    quote: 'Hope arrives quietly, then has to be protected.',
    description: 'It is not brightness here; it is endurance, held carefully in the dark.',
  },
  {
    name: 'Growing Up',
    quote: 'A teenage life continues under impossible rules.',
    description: 'The ordinary work of becoming oneself persists inside extraordinary confinement.',
  },
  {
    name: 'Freedom',
    quote: 'Freedom becomes the space between a thought and its page.',
    description: 'When movement is denied, language becomes a form of interior motion.',
  },
];

export const annexRooms = {
  room: {
    label: "Anne's room",
    excerpt: 'The small room holds clippings, arguments, dreams, and the private weather of adolescence.',
    context:
      'Anne shared this room with Fritz Pfeffer. Magazine pictures on the wall helped make the space feel less temporary.',
  },
  attic: {
    label: 'The attic',
    excerpt: 'A strip of sky, a chestnut tree, and a little air: the outside world seen in fragments.',
    context:
      'The attic offered rare glimpses beyond the annex. In the diary, nature often becomes a fragile counterweight to fear.',
  },
  kitchen: {
    label: 'Kitchen',
    excerpt: 'Meals are measured, tempers are close, and ordinary routines become acts of discipline.',
    context:
      'Food was scarce, movement was limited during business hours, and domestic life carried constant risk.',
  },
  entrance: {
    label: 'Hidden bookshelf entrance',
    excerpt: 'A bookcase turns into a threshold between public danger and hidden survival.',
    context:
      'The movable bookcase concealed the entrance to the Secret Annex above Otto Frank’s business premises.',
  },
};

export const parallelMoments = [
  {
    inside: 'Anne revises herself on paper, imagining a future reader who might understand.',
    outside: 'Occupied Europe tightens under surveillance, deportations, and propaganda.',
  },
  {
    inside: 'The annex waits through daytime silence while workers move below.',
    outside: 'Jewish families are forced from homes, registered, transported, and erased from public life.',
  },
  {
    inside: 'The radio carries rumors of invasion, liberation, and return.',
    outside: 'Allied forces land in Normandy while the war enters a brutal final phase.',
  },
  {
    inside: 'Hope and dread share the same room.',
    outside: 'The machinery of persecution continues until the last months of the war.',
  },
];

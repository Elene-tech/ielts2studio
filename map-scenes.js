/* Оригінальні карти курсу Module 6 (Maps). Кожна сцена: MapChart-опис (див. map.js).
   GF: Greenfield (компас, 1990→2025) · SCH: школа (план, 2008→2024) · LINDEN: озеро (компас, 1975→2020) ·
   ISLAND: острів (компас, 1995→2020) · STN: вокзал (план, current → proposed) · CAMPUS: кампус (план, 1998→2022). */
window.MAPSC = (function () {
  var S = {};
  S.GF = { type: 'map', style: 'town', compass: true, span: '35 years', scale: '500 m', title: 'The town of Greenfield, 1990 and 2025', maps: [
    { label: 'GREENFIELD · 1990', f: [
      { id: 'river', k: 'water', pts: [[0, 28], [100, 28]], sw: 4.4, t: 'River Lea', lab: [15, 29.4], fs: 3 },
      { id: 'road', g: 'road', k: 'road', pts: [[38, 0], [38, 56]], sw: 2.2, ch: 'expanded' },
      { id: 'bridge', g: 'road', k: 'bridge', x: 36.6, y: 25.6, w: 2.8, h: 5.6, lab: false, ch: 'expanded' },
      { id: 'station', g: 'nw', k: 'transport', x: 5, y: 5, w: 25, h: 13, t: 'Railway Station', icon: '🚉', ch: 'replaced' },
      { id: 'forest', g: 'ne', k: 'forest', x: 55, y: 2.5, w: 39, h: 18, t: 'Forest', icon: '🌲', ch: 'replaced' },
      { id: 'market', g: 'centre', k: 'plaza', x: 40, y: 17, w: 20, h: 9, t: 'Market', icon: '🏪', ch: 'replaced' },
      { id: 'park', g: 'park', k: 'green', x: 33, y: 30.5, w: 20, h: 10.5, t: 'Small Park', icon: '🌳', ch: 'expanded' },
      { id: 'fields', g: 'sw', k: 'field', x: 5, y: 36, w: 26, h: 17, t: 'Open fields', ch: 'replaced' },
      { id: 'farm', g: 'se', k: 'field', x: 64, y: 31, w: 31, h: 19, t: 'Farmland', ch: 'replaced' }] },
    { label: 'GREENFIELD · 2025', f: [
      { id: 'river', k: 'water', pts: [[0, 28], [100, 28]], sw: 4.4, t: 'River Lea', lab: [15, 29.4], fs: 3 },
      { id: 'road', g: 'road', k: 'road', pts: [[38, 0], [38, 56]], sw: 4.6, ch: 'expanded' },
      { id: 'bridge', g: 'road', k: 'bridge', x: 35.6, y: 25.6, w: 4.8, h: 5.6, lab: false, ch: 'expanded' },
      { id: 'carpark', g: 'nw', k: 'parking', x: 4, y: 4, w: 24, h: 13, t: 'Car Park', icon: '🅿️', ch: 'replaced' },
      { id: 'housing', g: 'ne', k: 'res', x: 52, y: 3, w: 30, h: 11, t: 'Housing Estate', icon: '🏘️', ch: 'replaced' },
      { id: 'mall', g: 'centre', k: 'com', x: 42, y: 14.5, w: 30, h: 10.5, t: 'Shopping Centre', icon: '🏬', ch: 'replaced' },
      { id: 'park', g: 'park', k: 'green', x: 33, y: 30.5, w: 32, h: 14, t: 'Extended Park', icon: '🌳', ch: 'expanded' },
      { id: 'school', g: 'sw', k: 'pub', x: 4, y: 35, w: 26, h: 18, t: 'School & Sports', icon: '🏫', ch: 'replaced' },
      { id: 'indus', g: 'se', k: 'ind', x: 66, y: 31, w: 30, h: 19, t: 'Industrial Park', icon: '🏭', ch: 'replaced' }] }] };

  S.SCH = { type: 'map', style: 'plan', compass: false, span: '16 years', title: 'Meadowbank School, ground floor, 2008 and 2024', maps: [
    { label: 'GROUND FLOOR · 2008', building: { x: 11, y: 2, w: 78, h: 44 }, ent: [{ x: 50, y: 46, d: 'up', t: 'MAIN ENTRANCE' }], f: [
      { id: 'corr', k: 'floor', x: 13, y: 21, w: 74, h: 8, lab: false },
      { id: 'lib', g: 'lib', k: 'pub', x: 13, y: 4, w: 18, h: 16, t: 'Library', icon: '📚', ch: 'expanded' },
      { id: 'c1', g: 'lib2', k: 'room', x: 33, y: 4, w: 16, h: 16, t: 'Class-room 1', icon: '✏️', ch: 'gone' },
      { id: 'c2', k: 'room', x: 51, y: 4, w: 16, h: 16, t: 'Class-room 2', icon: '✏️' },
      { id: 'c3', g: 'c3', k: 'room', x: 69, y: 4, w: 18, h: 16, t: 'Class-room 3', icon: '✏️', ch: 'converted' },
      { id: 'hall', g: 'hall', k: 'leis', x: 13, y: 31, w: 24, h: 13, t: 'Assembly Hall', icon: '🎭', ch: 'converted' },
      { id: 'rec', k: 'com', x: 41, y: 33, w: 18, h: 11, t: 'Reception', icon: '🛎️' },
      { id: 'can', g: 'can', k: 'res', x: 63, y: 31, w: 24, h: 13, t: 'Canteen', icon: '🍽️', ch: 'expanded' }] },
    { label: 'GROUND FLOOR · 2024', building: { x: 11, y: 2, w: 78, h: 44 }, ent: [{ x: 50, y: 46, d: 'up', t: 'MAIN ENTRANCE' }, { id: 'ent2', x: 89, y: 25, d: 'left', t: 'SIDE ENTRANCE', ch: 'built' }], f: [
      { id: 'corr', k: 'floor', x: 13, y: 21, w: 74, h: 8, lab: false },
      { id: 'lib', g: 'lib', k: 'pub', x: 13, y: 4, w: 36, h: 16, t: 'Library', icon: '📚', ch: 'expanded' },
      { id: 'c2', k: 'room', x: 51, y: 4, w: 16, h: 16, t: 'Class-room 2', icon: '✏️' },
      { id: 'comp', g: 'c3', k: 'ind', x: 69, y: 4, w: 18, h: 16, t: 'Computer Suite', icon: '💻', ch: 'converted' },
      { id: 'gym', g: 'hall', k: 'leis', x: 13, y: 31, w: 12, h: 13, t: 'Gym', icon: '🏀', ch: 'converted' },
      { id: 'drama', g: 'hall', k: 'pub', x: 26, y: 31, w: 11, h: 13, t: 'Drama Studio', icon: '🎭', ch: 'converted' },
      { id: 'rec', k: 'com', x: 41, y: 33, w: 18, h: 11, t: 'Reception', icon: '🛎️' },
      { id: 'can', g: 'can', k: 'res', x: 61, y: 31, w: 26, h: 13, t: 'Canteen & Café', icon: '☕', ch: 'expanded' }] }] };

  S.LINDEN = { type: 'map', style: 'town', compass: true, span: '45 years', title: 'The village of Linden Lake, 1975 and 2020', maps: [
    { label: 'LINDEN LAKE · 1975', f: [
      { id: 'lake', k: 'water', poly: [[60, 3], [94, 3], [97, 19], [86, 25], [66, 24], [57, 13]], t: 'Linden Lake', lab: [77, 12], fs: 3.2 },
      { id: 'road', k: 'road', pts: [[0, 33], [100, 33]], sw: 3, t: 'Main Road', lab: [16, 31.2], fs: 2.8 },
      { id: 'church', k: 'pub', x: 38, y: 19, w: 14, h: 10, t: 'Church', icon: '⛪' },
      { id: 'farm', g: 'nw', k: 'field', x: 4, y: 3, w: 30, h: 23, t: 'Farmland', ch: 'replaced' },
      { id: 'wood', g: 'sw', k: 'forest', x: 4, y: 38, w: 26, h: 15, t: 'Woodland', icon: '🌲', ch: 'reduced' },
      { id: 'meadow', g: 'sc', k: 'green', x: 36, y: 38, w: 24, h: 15, t: 'Meadow', ch: 'replaced' },
      { id: 'cott', g: 'se', k: 'res', x: 66, y: 38, w: 28, h: 15, t: 'Cottages', icon: '🏠', ch: 'converted' },
      { id: 'jetty', g: 'jetty', k: 'sand', x: 63, y: 24, w: 10, h: 5, t: 'Jetty', ch: 'expanded' }] },
    { label: 'LINDEN LAKE · 2020', f: [
      { id: 'lake', k: 'water', poly: [[60, 3], [94, 3], [97, 19], [86, 25], [66, 24], [57, 13]], t: 'Linden Lake', lab: [77, 12], fs: 3.2 },
      { id: 'road', k: 'road', pts: [[0, 33], [100, 33]], sw: 3, t: 'Main Road', lab: [16, 31.2], fs: 2.8 },
      { id: 'church', k: 'pub', x: 38, y: 19, w: 14, h: 10, t: 'Church', icon: '⛪' },
      { id: 'housing', g: 'nw', k: 'res', x: 4, y: 3, w: 30, h: 23, t: 'Housing Estate', icon: '🏘️', ch: 'replaced' },
      { id: 'wood', g: 'sw', k: 'forest', x: 4, y: 43, w: 14, h: 10, t: 'Woodland', icon: '🌲', ch: 'reduced' },
      { id: 'hotel', g: 'sc', k: 'com', x: 36, y: 38, w: 24, h: 15, t: 'Country Hotel', icon: '🏨', ch: 'replaced' },
      { id: 'lodges', g: 'se', k: 'leis', x: 66, y: 38, w: 28, h: 15, t: 'Holiday Lodges', icon: '🏡', ch: 'converted' },
      { id: 'marina', g: 'jetty', k: 'sand', x: 60, y: 22, w: 18, h: 8, t: 'Marina', icon: '⛵', ch: 'expanded' },
      { id: 'cycle', k: 'road', pts: [[58, 36], [100, 36]], sw: 1.3, dash: false, lab: false, t: 'Cycle path', ch: 'built' }] }] };

  var SEA = { id: 'sea', k: 'water', x: 0, y: 0, w: 100, h: 56, lab: false };
  var ISL = { id: 'island', k: 'green', poly: [[16, 16], [34, 7], [66, 8], [86, 18], [88, 36], [70, 50], [38, 50], [14, 38]], lab: false };
  S.ISLAND = { type: 'map', style: 'town', compass: true, span: '25 years', title: 'Kestrel Island, 1995 and 2020', maps: [
    { label: 'KESTREL ISLAND · 1995', f: [SEA, ISL,
      { id: 'beach', k: 'sand', x: 36, y: 41, w: 30, h: 8, t: 'Beach', lab: [43, 45.4] },
      { id: 'light', k: 'pub', x: 73, y: 12, w: 12, h: 9, t: 'Lighthouse', icon: '🗼' },
      { id: 'track', g: 'track', k: 'road', pts: [[30, 28], [50, 27], [72, 19]], sw: 1.3, dash: false, lab: false, ch: 'expanded' },
      { id: 'jetty', g: 'jetty', k: 'sand', x: 6, y: 24, w: 13, h: 4, t: 'Jetty', ch: 'expanded' },
      { id: 'huts', g: 'w', k: 'res', x: 19, y: 24, w: 14, h: 10, t: 'Fishing Huts', icon: '🏠', ch: 'replaced' },
      { id: 'wood', g: 'n', k: 'forest', x: 36, y: 12, w: 24, h: 12, t: 'Woodland', icon: '🌲', ch: 'reduced' },
      { id: 'farm', g: 'c', k: 'field', x: 38, y: 30, w: 28, h: 10, t: 'Farmland', ch: 'replaced' }] },
    { label: 'KESTREL ISLAND · 2020', f: [SEA, ISL,
      { id: 'beach', k: 'sand', x: 36, y: 41, w: 30, h: 8, t: 'Beach', lab: [43, 45.4] },
      { id: 'light', k: 'pub', x: 73, y: 12, w: 12, h: 9, t: 'Lighthouse', icon: '🗼' },
      { id: 'track', g: 'track', k: 'road', pts: [[30, 28], [50, 27], [72, 19]], sw: 3, lab: false, ch: 'expanded' },
      { id: 'jetty', g: 'jetty', k: 'sand', x: 3, y: 23, w: 16, h: 6, t: 'Ferry Pier', ch: 'expanded' },
      { id: 'hotel', g: 'w', k: 'com', x: 19, y: 24, w: 14, h: 10, t: 'Beach Hotel', icon: '🏨', ch: 'replaced' },
      { id: 'wood', g: 'n', k: 'forest', x: 36, y: 12, w: 14, h: 12, t: 'Woodland', icon: '🌲', ch: 'reduced' },
      { id: 'visit', k: 'pub', x: 51, y: 13, w: 12, h: 10, t: 'Visitor Centre', icon: 'ℹ️', ch: 'built' },
      { id: 'golf', g: 'c', k: 'green', x: 38, y: 30, w: 28, h: 10, t: 'Golf Course', icon: '⛳', ch: 'replaced' },
      { id: 'cafe', k: 'com', x: 52, y: 42.5, w: 12, h: 5.5, t: 'Café', icon: '☕', ch: 'built' }] }] };

  S.STN = { type: 'map', style: 'plan', compass: false, span: false, title: 'Eastgate Railway Station: current and proposed layout', maps: [
    { label: 'CURRENT LAYOUT', c: '#7A5C16', building: { x: 11, y: 2, w: 78, h: 44 }, ent: [{ x: 50, y: 46, d: 'up', t: 'MAIN ENTRANCE' }], f: [
      { id: 'conc', k: 'floor', x: 13, y: 13, w: 74, h: 31, lab: false },
      { id: 'plat', k: 'rail', x: 13, y: 4, w: 74, h: 8, t: 'Platforms 1–4', icon: '🚆', fs: 3.6 },
      { id: 'tix', g: 'tix', k: 'pub', x: 13, y: 16, w: 16, h: 14, t: 'Ticket Office', icon: '🎫', ch: 'replaced' },
      { id: 'info', k: 'plaza', x: 40, y: 16, w: 20, h: 8, t: 'Information Desk' },
      { id: 'wait', g: 'wait', k: 'ind', x: 71, y: 16, w: 16, h: 14, t: 'Waiting Room', icon: '🪑', ch: 'converted' },
      { id: 'cafe', g: 'cafe', k: 'res', x: 13, y: 32, w: 22, h: 12, t: 'Café', icon: '☕', ch: 'moved' },
      { id: 'news', g: 'news', k: 'com', x: 65, y: 32, w: 22, h: 12, t: 'Newsagent', icon: '📰', ch: 'moved' }] },
    { label: 'PROPOSED LAYOUT', c: '#E1512E', building: { x: 11, y: 2, w: 78, h: 44 }, ent: [{ x: 50, y: 46, d: 'up', t: 'MAIN ENTRANCE' }, { id: 'ent2', x: 89, y: 22, d: 'left', t: 'SIDE ENTRANCE', ch: 'built' }], f: [
      { id: 'conc', k: 'floor', x: 13, y: 13, w: 74, h: 31, lab: false },
      { id: 'plat', k: 'rail', x: 13, y: 4, w: 74, h: 8, t: 'Platforms 1–4', icon: '🚆', fs: 3.6 },
      { id: 'tm', g: 'tix', k: 'pub', x: 13, y: 16, w: 16, h: 8, t: 'Ticket Machines', icon: '🎫', ch: 'replaced' },
      { id: 'wc', k: 'leis', x: 13, y: 25, w: 16, h: 6, t: 'Toilets', icon: '🚻', ch: 'built' },
      { id: 'info', k: 'plaza', x: 40, y: 16, w: 20, h: 8, t: 'Information Desk' },
      { id: 'bike', g: 'wait', k: 'leis', x: 71, y: 16, w: 16, h: 14, t: 'Bicycle Storage', icon: '🚲', ch: 'converted' },
      { id: 'news', g: 'news', k: 'com', x: 13, y: 32, w: 22, h: 12, t: 'Newsagent', icon: '📰', ch: 'moved' },
      { id: 'cafe', g: 'cafe', k: 'res', x: 65, y: 32, w: 22, h: 12, t: 'Café', icon: '☕', ch: 'moved' }] }] };

  S.CAMPUS = { type: 'map', style: 'plan', compass: false, span: '24 years', title: 'Hartwell University campus, 1998 and 2022', maps: [
    { label: 'HARTWELL CAMPUS · 1998', ent: [{ x: 50, y: 47, d: 'up', t: 'MAIN GATE' }], f: [
      { id: 'avenue', g: 'avenue', k: 'road', pts: [[50, 56], [50, 36]], sw: 5, t: 'Main Avenue', lab: [43.6, 47], rot: -90, fs: 2.6, ch: 'converted' },
      { id: 'quad', k: 'green', x: 31, y: 19, w: 38, h: 16, t: 'The Quad', icon: '🌳' },
      { id: 'lib', k: 'pub', x: 37, y: 3, w: 26, h: 12, t: 'Library', icon: '📚' },
      { id: 'cp', g: 'cp', k: 'parking', x: 10, y: 40, w: 30, h: 12, t: 'Car Park', icon: '🅿️', ch: 'replaced' },
      { id: 'sci', g: 'sci', k: 'pub', x: 8, y: 19, w: 19, h: 16, t: 'Science Block', icon: '🔬', ch: 'expanded' },
      { id: 'adm', g: 'adm', k: 'com', x: 73, y: 19, w: 19, h: 16, t: 'Admin Building', icon: '🏛️', ch: 'converted' },
      { id: 'field', g: 'field', k: 'field', x: 64, y: 40, w: 28, h: 12, t: 'Playing Field', ch: 'replaced' }] },
    { label: 'HARTWELL CAMPUS · 2022', ent: [{ x: 50, y: 47, d: 'up', t: 'MAIN GATE' }], f: [
      { id: 'avenue', g: 'avenue', k: 'plaza', x: 47, y: 36, w: 6, h: 20, t: 'Pedestrian Avenue', lab: [43.2, 47], rot: -90, fs: 2.4, ch: 'converted' },
      { id: 'quad', k: 'green', x: 31, y: 19, w: 38, h: 16, t: 'The Quad', icon: '🌳' },
      { id: 'lib', k: 'pub', x: 37, y: 3, w: 26, h: 12, t: 'Library', icon: '📚' },
      { id: 'cafe', k: 'com', x: 8, y: 3, w: 25, h: 12, t: 'Café', icon: '☕', ch: 'built' },
      { id: 'sports', g: 'cp', k: 'leis', x: 10, y: 40, w: 30, h: 12, t: 'Sports Hall', icon: '🏋️', ch: 'replaced' },
      { id: 'sci', g: 'sci', k: 'pub', x: 6, y: 15, w: 22, h: 24, t: 'Science Block', icon: '🔬', ch: 'expanded' },
      { id: 'stu', g: 'adm', k: 'com', x: 73, y: 19, w: 19, h: 16, t: 'Student Centre', icon: '🎒', ch: 'converted' },
      { id: 'halls', g: 'field', k: 'res', x: 64, y: 40, w: 28, h: 12, t: 'Halls of Residence', icon: '🏠', ch: 'replaced' }] }] };
  return S;
})();

import csvAssetUrl from "../../../Assets/vocabulary/vocabulary.csv";

let cachedPairs = null;

const CSV_SPLIT_REGEX = /,(?=(?:[^"]*"[^"]*")*[^"]*$)/;

function parseCSV(text) {
  const lines = text
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter((l) => l.length > 0);
  const rows = lines.map((line) => {
    const parts = line.split(CSV_SPLIT_REGEX).map((s) => s.trim());
    const unquote = (s) => {
      if (s.startsWith('"') && s.endsWith('"')) {
        return s.slice(1, -1).replace(/""/g, '"');
      }
      return s;
    };
    const [c1 = "", c2 = ""] = parts;
    return [unquote(c1), unquote(c2)];
  });
  return rows;
}

export async function loadVocabularyPairs(fallbackPairs) {
  if (cachedPairs) return cachedPairs;
  // 1) Try the bundled CSV asset (static import ensures it exists in production bundles)
  try {
    let csvUrl = csvAssetUrl;
    if (!/^https?:\/\//i.test(csvUrl)) {
      csvUrl = (csvUrl.startsWith('/') ? csvUrl : '/' + csvUrl);
      csvUrl = new URL(csvUrl, window.location.origin).toString();
    }
    const res = await fetch(csvUrl, { cache: 'no-cache' });
    const ct = res.headers.get('content-type') || '';
    if (res.ok && !ct.includes('text/html')) {
      const text = await res.text();
      cachedPairs = parseCSV(text);
      return cachedPairs;
    }
  } catch (_) {}
  try {
    const res = await fetch((process.env.PUBLIC_URL || '') + '/vocabulary/vocabulary.json', { cache: 'no-cache' });
    const ct = res.headers.get('content-type') || '';
    if (res.ok && ct.includes('application/json')) {
      const data = await res.json();
      if (Array.isArray(data)) {
        if (Array.isArray(data[0])) {
          cachedPairs = data;
          return cachedPairs;
        }
        if (typeof data[0] === 'object' && data[0] !== null) {
          cachedPairs = data.map((o) => [o.english ?? o[0] ?? '', o.vietnamese ?? o[1] ?? '']);
          return cachedPairs;
        }
      }
    }
  } catch (_) {}

  // 3) Try CSV served from public folder path if provided
  try {
    const res = await fetch((process.env.PUBLIC_URL || '') + '/vocabulary/vocabulary.csv', { cache: 'no-cache' });
    const ct = res.headers.get('content-type') || '';
    if (res.ok && !ct.includes('text/html')) {
      const text = await res.text();
      cachedPairs = parseCSV(text);
      return cachedPairs;
    }
  } catch (_) {}

  cachedPairs = fallbackPairs;
  return cachedPairs;
}

export function parseIntoMap(picturesGlob: Record<string, any>) {
  const urls = Object.keys(picturesGlob);
  const projects = new Map();
  const titles = [];

  for (const url of urls) {
    const name = url.split("/")[7];
    if (!projects.has(name)) {
      projects.set(name, [url]);
      titles.push(name);
      continue;
    }
    projects.get(name).push(url);
  }
  return { projects, titles };
}

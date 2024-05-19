function createUserProfiles(names, modifiedNames) {
  const result = [];
  for (let i = 0; i < names.length; i++) {
    result.push({ originalName: names[i], modifiedName: modifiedNames[i], id: i + 1 });
  }
  return result;
}

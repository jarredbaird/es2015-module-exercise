const choice = (items) => {
  const randIdx = Math.floor(Math.random() * items.length);
  return items[randIdx];
};

const remove = (items, item) => {
  const itemIndex = items.indexOf(item);
  if (itemIndex === -1) {
    return undefined;
  }
  items.splice(itemIndex, 1);
  return item;
};

export { choice, remove };

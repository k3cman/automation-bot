export const preventAll = (e:MouseEvent) => {
  e.stopPropagation();
  e.stopImmediatePropagation();
  e.preventDefault();
}

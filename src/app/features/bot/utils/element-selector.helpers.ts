export const preventAll = (e:MouseEvent) => {
  e.stopPropagation();
  e.stopImmediatePropagation();
  e.preventDefault();
}


export const removeHelperClasses = () => {
  document.querySelectorAll('.selected-element').forEach(el => {
    el.classList.remove('selected-element')
  })

  document.querySelectorAll('.hover-border').forEach(el => {
    el.classList.remove('hover-border')
  })

  document.querySelectorAll('.hover-border-child').forEach(el => {
    el.classList.remove('hover-border-child')
  })

  document.querySelectorAll('.selected-sub-element').forEach(el => {
    el.classList.remove('selected-sub-element')
  })


}


export const createSelector = (el:Element):string => {
  const elementTagName:string = el.tagName;
  const elementClasses = el.className.replace('hover-border-child','')
    .replace('selected-sub-element','')
    .replace('hover-border', '')
    .replace('selected-element', '')
    .trim()

  const parentId = el.id

  let elementSelector = elementTagName.toLowerCase()
  if(elementClasses && elementClasses !== ''){
    const selectors = elementClasses.replaceAll(' ', '.')
    elementSelector += ('.' + selectors)
  }

  if(parentId){
    elementSelector += '#'+parentId
  }

  return elementSelector
}

export const compareTwoNodes = (elements: Element[]):boolean => {
  const [first, second] = elements;
  const tagName = first.tagName === second.tagName
  const className = first.className.replace('hover-border-child','')
    .replace('selected-sub-element','')
    .replace('hover-border', '')
    .replace('selected-element', '')
    .trim() === second.className.replace('hover-border-child','')
    .replace('selected-sub-element','')
    .replace('hover-border', '')
    .replace('selected-element', '')
    .trim()
  return (tagName && className)
}

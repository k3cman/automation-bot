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

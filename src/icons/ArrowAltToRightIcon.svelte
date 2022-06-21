<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-alt-to-right {customClass}"><path d="M21.768 11.448a.774.774 0 0 1 0 1.104l-4.418 4.361c-.498.492-1.35.143-1.35-.552V13H1a1 1 0 0 1 0-2h15V7.639c0-.695.852-1.044 1.35-.552l4.418 4.361ZM23 3a1 1 0 0 0-1 1v16a1 1 0 1 0 2 0V4a1 1 0 0 0-1-1Z"/></svg>
  
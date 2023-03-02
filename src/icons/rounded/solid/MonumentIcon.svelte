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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1ZM17.378 5a5.011 5.011 0 0 0-1.368-2.646l-1.183-1.182c-1.511-1.512-4.146-1.512-5.656 0L7.988 2.354A5.011 5.011 0 0 0 6.62 5h10.757ZM21 18h-2.065L17.641 7h-4.64v10a1 1 0 0 1-2 0V7H6.36L5.066 18H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2Z"/></svg>
  
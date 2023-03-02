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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.835 2.165a7.389 7.389 0 0 0-10.451 0l-9.219 9.219a7.39 7.39 0 1 0 10.451 10.451l9.219-9.219a7.389 7.389 0 0 0 0-10.451zm-9.128 14.542-3 3a1 1 0 0 1-1.414-1.414l.793-.793L6.5 14.914l-.793.793a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 1.414l-.793.793 2.586 2.586.793-.793a1 1 0 0 1 1.414 1.414zm7-7-3 3a1 1 0 0 1-1.414-1.414l.793-.793L13.5 7.914l-.793.793a1 1 0 0 1-1.414-1.414l3-3a1 1 0 1 1 1.414 1.414l-.793.793L17.5 9.086l.793-.793a1 1 0 0 1 1.414 1.414z"/></svg>
  
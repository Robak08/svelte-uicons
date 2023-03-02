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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.008 24a3.007 3.007 0 0 1-2.681-1.636L9.2 15.66l-3.542 3.093A1 1 0 0 1 4 18V2.98A3 3 0 0 1 8.989.734l10.7 10.238a1 1 0 0 1-.6 1.719l-4.468.407 3.065 6.569A3 3 0 0 1 15.008 24z"/></svg>
  
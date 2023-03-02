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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24.009 4H-.009A4.012 4.012 0 0 1 4 0h16a4.012 4.012 0 0 1 4.009 4Zm-.555 2H.534A13.814 13.814 0 0 0 11 11.965V22H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4V11.965A13.8 13.8 0 0 0 23.454 6Z"/></svg>
  
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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.379 14.424C20.09 13.293 22 10.616 22 7.5 22 3.364 18.636 0 14.5 0H7C4.243 0 2 2.243 2 5v18a1 1 0 1 0 2 0v-8h10.5c.298 0 .591-.022.881-.056l4.745 8.542a1 1 0 1 0 1.748-.97l-4.495-8.091ZM4 13V5c0-1.654 1.346-3 3-3h7.5C17.532 2 20 4.468 20 7.5S17.532 13 14.5 13H4Z"/></svg>
  
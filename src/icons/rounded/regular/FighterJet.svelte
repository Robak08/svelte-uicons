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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.583 8.558 11.581 2H13a1 1 0 0 0 0-2S9.643.005 9.53.037A3.005 3.005 0 0 0 7 3v6H5.537L4.44 7.343C3.39 5.547.075 5.445 0 7.938v8.124c.073 2.495 3.415 2.394 4.459.584L5.54 15H7v6a3.005 3.005 0 0 0 2.528 2.963C9.617 23.988 13 24 13 24a1 1 0 0 0 0-2h-1.416l4-6.531c11.259-.569 11.261-6.378-.001-6.911Zm-.646 4.95a1 1 0 0 0-.79.476l-4.773 7.8A1 1 0 0 1 9 21v-7a1 1 0 0 0-1-1H5a1 1 0 0 0-.836.451l-1.376 2.1a1.267 1.267 0 0 1-.788.511L1.938 8a1 1 0 0 1 .834.448l1.4 2.1A1 1 0 0 0 5 11h3a1 1 0 0 0 1-1V3a1 1 0 0 1 .373-.778l4.773 7.82a1 1 0 0 0 .794.478c3.138.188 6.327.873 6.994 1.481-.664.61-3.855 1.308-6.997 1.507Z"/></svg>
  
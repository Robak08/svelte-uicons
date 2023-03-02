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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.61 16.085C18.381 14.56 10.213 12 3.007 12H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2.008c7.196 0 15.358-2.479 19.583-3.956.853-.298 1.405-1.072 1.409-1.973s-.541-1.681-1.39-1.986ZM13 19H8a1 1 0 1 1 0-2h5a1 1 0 1 1 0 2Zm-4.439-8.586c.26-.247.512-.512.739-.814l5.85-7.799A4.518 4.518 0 0 1 18.75 0h.298a2.48 2.48 0 0 1 1.982.977c.477.621.635 1.411.433 2.168l-2.562 9.608c-3.003-.908-6.633-1.825-10.34-2.339Z"/></svg>
  
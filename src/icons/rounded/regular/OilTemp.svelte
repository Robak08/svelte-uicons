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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 18a4 4 0 0 0 1-7.858V6h3a1 1 0 0 0 0-2h-3V3a1 1 0 0 1 1-1h2a1 1 0 0 0 0-2h-2a3 3 0 0 0-3 3v7.142A4 4 0 0 0 12 18Zm0-6a2 2 0 0 1 0 4 2 2 0 0 1 0-4Zm11.744 9.565a1 1 0 0 1-.076 1.413 4.185 4.185 0 0 1-5.668-.2 4.334 4.334 0 0 1-6 0 4.334 4.334 0 0 1-6 0 4.185 4.185 0 0 1-5.668.2 1 1 0 0 1 1.336-1.489 2.2 2.2 0 0 0 3.39-.822 1 1 0 0 1 1.884 0 2.279 2.279 0 0 0 4.116 0 1 1 0 0 1 1.884 0 2.279 2.279 0 0 0 4.116 0 1 1 0 0 1 1.884 0 2.2 2.2 0 0 0 3.39.822 1 1 0 0 1 1.412.076ZM18.4 17.119a1 1 0 0 1 1.2-1.6 2.2 2.2 0 0 0 2.73-.032 1 1 0 0 1 1.336 1.489 4.15 4.15 0 0 1-5.266.143ZM.332 16.978a1 1 0 0 1 1.336-1.489 2.193 2.193 0 0 0 2.73.032 1 1 0 0 1 1.2 1.6 4.149 4.149 0 0 1-5.266-.143Z"/></svg>
  
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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.01 7.77a2.604 2.604 0 0 1 3.68 0l1.04 1.04c.23.23.62.23.85 0l5.95-5.95A5.006 5.006 0 0 0 19.01 0H10C7.24 0 5 2.24 5 5v6c0 1.07.34 2.06.91 2.87l6.1-6.1ZM9.5 3c.83 0 1.5.67 1.5 1.5S10.33 6 9.5 6 8 5.33 8 4.5 8.67 3 9.5 3Zm2.83 20.82-8.67-2.41a5.005 5.005 0 0 1-3.48-6.16l1.61-5.78c.23-.82.65-1.54 1.21-2.12v3.66c0 3.87 3.13 7 7 7h9.14l-.65 2.34a5.005 5.005 0 0 1-6.16 3.48ZM24 5.21V11c0 2.76-2.24 5-5 5h-9c-.97 0-1.87-.28-2.64-.75l6.06-6.06a.61.61 0 0 1 .85 0l1.04 1.04c.98.98 2.69.98 3.67 0L24 5.21Z"/></svg>
  
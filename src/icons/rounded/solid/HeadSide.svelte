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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.8 4.42C17.36 1.16 13.49-.45 9.45.11 4.46.79.5 4.95.05 9.98c-.25 2.77.54 5.5 2.21 7.69.48.62.74 1.46.74 2.35v.97c0 1.65 1.35 3 3 3h7c1.65 0 3-1.35 3-3h.49c2.5 0 4.63-1.87 4.96-4.34l.22-1.66H22c1.3 0 2-1.03 2-2 0-1.42-2.93-7.01-4.2-8.58Z"/></svg>
  
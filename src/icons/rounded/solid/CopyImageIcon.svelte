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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2h-9C7.24 2 5 4.24 5 7v6c0 1.07.34 2.06.91 2.87l6.1-6.1a2.604 2.604 0 0 1 3.68 0l1.04 1.04c.23.23.62.23.85 0l5.95-5.95A5.006 5.006 0 0 0 19.01 2ZM9.5 8C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8ZM24 7.21V13c0 2.76-2.24 5-5 5h-9c-.97 0-1.87-.28-2.64-.75l6.06-6.06a.61.61 0 0 1 .85 0l1.04 1.04c.98.98 2.69.98 3.67 0L24 7.21ZM18 20a5.01 5.01 0 0 1-4 2H5c-2.76 0-5-2.24-5-5v-6c0-2.06 1.25-3.83 3.03-4.59-.02.2-.03.39-.03.59v6c0 3.87 3.13 7 7 7h8Z"/></svg>
  
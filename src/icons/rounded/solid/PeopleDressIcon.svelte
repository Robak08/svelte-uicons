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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M3.52 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0Zm6.6 7.12C9.86 7.56 8.1 6 6.02 6s-3.84 1.56-4.1 3.62l-.88 7.01c-.11.85.16 1.71.73 2.36.34.39.77.67 1.25.84V23c0 .55.45 1 1 1s1-.45 1-1v-3h2v3c0 .55.45 1 1 1s1-.45 1-1v-3.17c.48-.17.91-.46 1.25-.84.57-.64.83-1.5.73-2.36l-.88-7.01ZM18 5a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Zm4.98 11.63-.88-7.01C21.84 7.56 20.08 6 18 6s-3.84 1.56-4.1 3.62l-.88 7.01c-.11.85.16 1.71.73 2.36.34.39.77.67 1.25.84V23c0 .55.45 1 1 1s1-.45 1-1v-3h2v3c0 .55.45 1 1 1s1-.45 1-1v-3.17c.48-.17.91-.46 1.25-.84.57-.65.83-1.5.73-2.36Z"/></svg>
  
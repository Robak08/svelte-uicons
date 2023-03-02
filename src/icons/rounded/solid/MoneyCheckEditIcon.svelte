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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.27 19.48A4.334 4.334 0 0 0 12 22.545V24h1.455c1.15 0 2.252-.457 3.065-1.27l6.807-6.807a2.299 2.299 0 0 0-3.25-3.25L13.27 19.48Zm-1.414-1.414L16.923 13h-1.922c-1.308-.006-1.307-1.995 0-2h3.978c1.369-1.188 3.513-1.328 5.022-.326V7c0-2.757-2.243-5-5-5H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h5.027a6.285 6.285 0 0 1 1.829-3.934ZM15.001 7h4c1.308.006 1.307 1.995 0 2h-4c-1.308-.006-1.307-1.995 0-2ZM7 19a1 1 0 0 1-1-1v-1h-.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 1 1 1.73-1.001c.179.308.511.5.867.5h2.268c.997.065 1.442-1.55.356-1.76l-3.041-.507C1.812 12.084 2.566 6.98 5.999 7V6c.006-1.308 1.995-1.307 2 0v1h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 1 1-1.73 1.001 1.004 1.004 0 0 0-.867-.5H6c-.997-.065-1.442 1.55-.356 1.76l3.041.507c3.502.649 2.748 5.753-.685 5.733v1a1 1 0 0 1-1 1Z"/></svg>
  
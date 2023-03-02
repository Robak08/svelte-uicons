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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.27 19.48A4.334 4.334 0 0 0 12 22.545V24h1.455c1.15 0 2.252-.457 3.065-1.27l6.807-6.807a2.299 2.299 0 0 0-3.25-3.25L13.27 19.48Zm-1.414-1.414L16.923 13h-1.922c-1.308-.006-1.307-1.995 0-2h3.978c1.369-1.188 3.513-1.328 5.022-.326V7c0-2.757-2.243-5-5-5H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h5.027a6.285 6.285 0 0 1 1.829-3.934ZM15.001 7h4c1.308.006 1.307 1.995 0 2h-4c-1.308-.006-1.307-1.995 0-2ZM3 14v-1c-1.308-.006-1.307-1.995 0-2v-1c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3-.006 1.308-1.995 1.308-2 0 0-.551-.448-1-1-1H6c-.552 0-1 .449-1 1v1h2c1.308.006 1.307 1.995 0 2H5v1c0 .551.448 1 1 1h2c.552 0 1-.449 1-1 .005-1.308 1.995-1.308 2 0 0 1.654-1.346 3-3 3H6c-1.654 0-3-1.346-3-3Z"/></svg>
  
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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.27 19.48A4.334 4.334 0 0 0 12 22.545V24h1.455c1.15 0 2.252-.457 3.065-1.27l6.807-6.807a2.299 2.299 0 0 0-3.25-3.25L13.27 19.48ZM24 8H0V7c0-2.757 2.243-5 5-5h1V1a1 1 0 1 1 2 0v1h8V1a1 1 0 1 1 2 0v1h1c2.757 0 5 2.243 5 5v1ZM0 10h21.357c-.839.101-1.667.482-2.392 1.207l-7.207 7.207A5.958 5.958 0 0 0 10 22.657V24H5a5 5 0 0 1-5-5v-9Z"/></svg>
  
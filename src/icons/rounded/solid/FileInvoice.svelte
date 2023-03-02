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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 7V.46a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486A6.954 6.954 0 0 1 21.54 8H15c-.552 0-1-.449-1-1Zm1.5 8h-7a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Zm6.5-4.515V19c0 2.757-2.243 5-5 5H7c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h4.515c.163 0 .324.013.485.024V7c0 1.654 1.346 3 3 3h6.976c.011.161.024.322.024.485ZM6 6a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H7a1 1 0 0 0-1 1Zm0 4a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2H7a1 1 0 0 0-1 1Zm12 5.5c0-1.378-1.122-2.5-2.5-2.5h-7A2.503 2.503 0 0 0 6 15.5v2C6 18.878 7.122 20 8.5 20h7c1.378 0 2.5-1.122 2.5-2.5v-2Z"/></svg>
  
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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 7V.46a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486A6.954 6.954 0 0 1 21.54 8H15c-.552 0-1-.449-1-1Zm8 3.485V19c0 2.757-2.243 5-5 5H7c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h4.515c.163 0 .324.013.485.024V7c0 1.654 1.346 3 3 3h6.976c.011.161.024.322.024.485ZM9 18c-.006-1.308-1.994-1.307-2 0v2c.006 1.308 1.994 1.307 2 0v-2Zm4-5c-.006-1.308-1.994-1.307-2 0v7c.006 1.308 1.994 1.307 2 0v-7Zm4 3c-.006-1.308-1.995-1.307-2 0v4c.006 1.308 1.995 1.307 2 0v-4Z"/></svg>
  
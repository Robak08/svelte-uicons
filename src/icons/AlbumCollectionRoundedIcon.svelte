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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-album-collection {customClass}"><path d="M19 24H5c-2.76 0-5-2.24-5-5v-6c0-2.76 2.24-5 5-5h14c2.76 0 5 2.24 5 5v6c0 2.76-2.24 5-5 5ZM5 10c-1.65 0-3 1.35-3 3v6c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-6c0-1.65-1.35-3-3-3H5Zm18.66-2.9c.41-.37.45-1 .09-1.41A4.993 4.993 0 0 0 20 4H4C2.57 4 1.2 4.62.25 5.69A.989.989 0 0 0 .34 7.1c.41.36 1.05.33 1.41-.09.57-.65 1.39-1.02 2.25-1.02h16c.86 0 1.68.37 2.25 1.02.2.22.47.34.75.34.23 0 .47-.08.66-.25Zm0-4c.41-.37.45-1 .09-1.41A4.993 4.993 0 0 0 20 0H4C2.57 0 1.2.62.25 1.69A.989.989 0 0 0 .34 3.1c.41.36 1.05.33 1.41-.09.57-.65 1.39-1.02 2.25-1.02h16c.86 0 1.68.37 2.25 1.02.2.22.47.34.75.34.23 0 .47-.08.66-.25ZM12 20c-3.98 0-8-1.37-8-4s4.02-4 8-4 8 1.37 8 4-4.02 4-8 4Zm0-6c-3.72 0-6 1.29-6 2s2.28 2 6 2 6-1.29 6-2-2.28-2-6-2Zm0 3c.83 0 1.5-.45 1.5-1s-.67-1-1.5-1-1.5.45-1.5 1 .67 1 1.5 1Z"/></svg>
  
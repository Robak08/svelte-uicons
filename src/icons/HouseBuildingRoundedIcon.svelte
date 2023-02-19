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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-house-building {customClass}"><path d="M19 15h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm1 3a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM16 6a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1Zm4 0a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1Zm0 4a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1Zm4 9V5c0-2.757-2.243-5-5-5h-5c-2.757 0-5 2.243-5 5a1 1 0 1 0 2 0c0-1.654 1.346-3 3-3h5c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3h-1a1 1 0 1 0 0 2h1c2.757 0 5-2.243 5-5Zm-8 .5v-4.152a4.972 4.972 0 0 0-1.919-3.938l-3-2.349a4.993 4.993 0 0 0-6.162 0l-3 2.348A4.97 4.97 0 0 0 0 15.347v4.152c0 2.481 2.019 4.5 4.5 4.5h7c2.481 0 4.5-2.019 4.5-4.5Zm-6.151-8.863 3 2.348A2.986 2.986 0 0 1 14 15.348V19.5c0 1.379-1.121 2.5-2.5 2.5h-7A2.502 2.502 0 0 1 2 19.5v-4.152c0-.929.42-1.79 1.151-2.363l3-2.347a2.993 2.993 0 0 1 3.698-.001ZM10 18v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1Z"/></svg>
  
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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-ticket-airline {customClass}"><path d="M23 10a1 1 0 0 0 1-1V8c0-2.757-2.243-5-5-5H5C2.243 3 0 5.243 0 8v8c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-1a1 1 0 0 0-1-1c-1.103 0-2-.897-2-2s.897-2 2-2Zm-1 5.873V16c0 1.654-1.346 3-3 3H6a1 1 0 0 0-1.986-.167A3.005 3.005 0 0 1 2 16V8c0-1.309.843-2.424 2.014-2.833A1 1 0 0 0 6 5h13c1.654 0 3 1.346 3 3v.127c-1.724.444-3 2.013-3 3.873s1.276 3.429 3 3.873ZM17 12a1 1 0 0 1-1 1h-1.5l-1.911 2.421a1.111 1.111 0 0 1-.975.579h-.32a.543.543 0 0 1-.506-.74l.879-2.26h-1.32a1.5 1.5 0 0 1-1.147-.533l-1.096-1.3a.78.78 0 0 1 1.228-.939l1.11.772h1.241l-.891-2.258A.543.543 0 0 1 11.297 8h.298c.407 0 .781.222.975.579L14.499 11h1.5a1 1 0 0 1 1 1ZM6 9v1a1 1 0 1 1-2 0V9a1 1 0 1 1 2 0Zm0 5v1a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0Z"/></svg>
  
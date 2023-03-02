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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 9a1 1 0 0 0 1-1V7c0-2.757-2.243-5-5-5H9C6.243 2 4 4.243 4 7v8c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5v-1a1 1 0 0 0-1-1c-1.103 0-2-.897-2-2s.897-2 2-2Zm-1 5.873V15c0 1.654-1.346 3-3 3H9c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v.127c-1.723.444-3 2.013-3 3.873s1.277 3.429 3 3.873ZM19 23a1 1 0 0 1-1 1H9a8.945 8.945 0 0 1-6.364-2.636A8.943 8.943 0 0 1 0 15V9a1 1 0 1 1 2 0v6a6.95 6.95 0 0 0 2.05 4.949A6.957 6.957 0 0 0 9 22h9a1 1 0 0 1 1 1Zm-2-12a1 1 0 0 1-1 1h-1.5l-1.911 2.421a1.111 1.111 0 0 1-.975.579h-.138a.543.543 0 0 1-.506-.74l.879-2.26h-1.501a1.5 1.5 0 0 1-1.147-.533l-1.096-1.3a.78.78 0 0 1 1.228-.939l1.11.772h1.423l-.891-2.258A.543.543 0 0 1 11.48 7h.117c.407 0 .781.222.975.579L14.501 10h1.5a1 1 0 0 1 1 1Z"/></svg>
  
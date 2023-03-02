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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 11c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1Zm1.54 8-1.33 2h11.6l-1.33-2H7.54Zm2.28-7h4.37c-.11-.31-.18-.65-.18-1s.07-.69.18-1H9.82c.11.31.18.65.18 1s-.07.69-.18 1ZM24 8v8c0 2.37-1.67 4.36-3.89 4.87l-2.28-3.42c-.19-.28-.5-.45-.83-.45H7c-.33 0-.65.17-.83.45l-2.28 3.42C1.67 20.36 0 18.38 0 16V8c0-2.76 2.24-5 5-5h14c2.76 0 5 2.24 5 5Zm-4 3c0-1.65-1.35-3-3-3H7c-1.65 0-3 1.35-3 3s1.35 3 3 3h10c1.65 0 3-1.35 3-3Zm-3-1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z"/></svg>
  
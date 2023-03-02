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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 14.038v2a1 1 0 1 1-2 0V14h-1a1 1 0 0 1 0-2h6.663c-.022-.081-.036-.164-.065-.243L20.897 4.33a5.013 5.013 0 0 0-4.698-3.292H7.802a5.013 5.013 0 0 0-4.698 3.291L.402 11.756c-.029.08-.043.163-.065.244H7a1 1 0 0 1 0 2H6v2.038a1 1 0 1 1-2 0v-2H0V16a5.003 5.003 0 0 0 3 4.576V22a2 2 0 1 0 4 0v-1h10v1a2 2 0 1 0 4 0v-1.424A5.003 5.003 0 0 0 24 16v-1.962h-4Zm-5.269-2.548-1.881 3.037a1 1 0 0 1-1.7-1.054L12.683 11h-2.068c-.509 0-.994-.244-1.297-.653s-.396-.943-.249-1.43c.025-.082 2.079-3.441 2.079-3.441a.999.999 0 1 1 1.703 1.047l-1.523 2.476h2.067c.592 0 1.133.324 1.413.846s.25 1.151-.077 1.645Z"/></svg>
  
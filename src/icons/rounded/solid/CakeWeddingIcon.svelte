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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 23.01a.991.991 0 0 1-1 .99H1a1 1 0 1 1 0-1.99h1v-2.385A4.359 4.359 0 0 0 3.75 20a4.194 4.194 0 0 0 2.75-1 4.309 4.309 0 0 0 5.5.015A4.309 4.309 0 0 0 17.5 19a4.194 4.194 0 0 0 2.75 1 4.359 4.359 0 0 0 1.75-.375v2.385h1a1 1 0 0 1 1 1ZM9 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm6 0a1 1 0 1 0-1-1 1 1 0 0 0 1 1ZM3.75 18c1.068 0 1.75-.657 1.75-1a1 1 0 0 1 2 0c0 .306.661 1 1.75 1 1.068 0 1.75-.657 1.75-1a1 1 0 0 1 2 0c0 .306.661 1 1.75 1 1.068 0 1.75-.657 1.75-1a1 1 0 0 1 2 0c0 .306.661 1 1.75 1S22 17.306 22 17a5.006 5.006 0 0 0-5-5H7a5.006 5.006 0 0 0-5 5c0 .306.661 1 1.75 1ZM17 10a6.956 6.956 0 0 1 2 .295V10a2.991 2.991 0 0 0-2.179-2.872l-.66-3.328a1 1 0 0 0-.981-.8h-.36a1 1 0 0 0-.981.8L13.2 7h-2.95L11 4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1l.756 3.025A2.99 2.99 0 0 0 5 10v.3a6.956 6.956 0 0 1 2-.3Z"/></svg>
  
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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 22.01h-1V17a5 5 0 0 0-3-4.576V12a4.98 4.98 0 0 0-2-3.975L16.161 3.8a1 1 0 0 0-.981-.8h-.36a1 1 0 0 0-.981.8L13.2 7h-2.95L11 4a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1l.873 3.493A4.993 4.993 0 0 0 5 12v.424A5 5 0 0 0 2 17v5.01H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM10 9h4a3 3 0 0 1 3 3H7a3 3 0 0 1 3-3Zm-3 5h10a3 3 0 0 1 3 3v.98c-.936-.1-1.5-.7-1.5-.98a1 1 0 0 0-2 0c0 .344-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 0 0-2 0c0 .344-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 0 0-2 0c0 .316-.579.888-1.5.981V17a3 3 0 0 1 3-3Zm-3 5.979A4.156 4.156 0 0 0 6.5 19a4.309 4.309 0 0 0 5.5.015A4.309 4.309 0 0 0 17.5 19a4.156 4.156 0 0 0 2.5.978v2.032H4Z"/><circle cx="9" cy="1" r="1"/><circle cx="15" cy="1" r="1"/></svg>
  
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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.976 12h-5.352a3.091 3.091 0 0 0-1.716.52l-1.959 1.306a1 1 0 0 1-.555.168H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h11.537a11.97 11.97 0 0 0 11.309-8.112A2.984 2.984 0 0 0 20.976 12ZM4 20a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1ZM1 12a2.962 2.962 0 0 0-1 .184V9h10a1 1 0 0 0 0-2H0V4.861a1 1 0 0 1 1-1h2.392l-.321-1.218A2.106 2.106 0 0 1 5.107 0a2.107 2.107 0 0 1 2.037 1.569l.6 2.292H10A5.04 5.04 0 0 1 13.179 5a25.492 25.492 0 0 1 4.44 5h-1.974a5.224 5.224 0 0 0-2.822.84L11.092 12Z"/></svg>
  
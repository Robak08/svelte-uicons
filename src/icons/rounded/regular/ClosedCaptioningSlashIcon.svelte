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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m21.65 20.24 2.05 2.05a.996.996 0 0 1-.71 1.7c-.26 0-.51-.1-.71-.29l-6.94-6.94c-1.4-.55-2.35-1.98-2.35-3.76v-2c0-2.28 1.56-4 3.62-4h.29c1.16 0 2.26.66 2.94 1.76.29.47.14 1.09-.33 1.38-.47.29-1.09.14-1.38-.33-.32-.51-.76-.81-1.23-.81h-.29c-.96 0-1.62.82-1.62 2v2c0 1.18.67 2 1.62 2h.29c.47 0 .92-.29 1.23-.81a1.004 1.004 0 0 1 1.71 1.05c-.43.69-1.02 1.21-1.7 1.5l2.02 2.02A2.992 2.992 0 0 0 21.98 16V8c0-1.65-1.35-3-3-3H6.41l2.05 2.05c.95.17 1.82.78 2.39 1.71.29.47.14 1.09-.33 1.38-.47.29-1.09.14-1.38-.33C8.82 9.3 8.38 9 7.91 9h-.29C6.66 9 6 9.82 6 11v2c0 1.18.67 2 1.62 2h.29c.47 0 .92-.29 1.23-.81.29-.47.91-.62 1.38-.33.47.29.62.91.33 1.38-.68 1.1-1.77 1.76-2.94 1.76h-.29C5.55 17 4 15.28 4 13v-2c0-1.62.79-2.96 1.99-3.6L.29 1.71C-.1 1.32-.1.68.29.29s1.03-.39 1.42 0L4.42 3h14.59c2.76 0 5 2.24 5 5v8c0 1.76-.92 3.34-2.35 4.24ZM15 19H5c-1.65 0-3-1.35-3-3V8c0-.25.03-.51.09-.75.14-.54-.19-1.08-.72-1.22-.54-.14-1.08.19-1.22.72-.1.41-.16.83-.16 1.25v8c0 2.76 2.24 5 5 5H15c.55 0 1-.45 1-1s-.45-1-1-1Z"/></svg>
  
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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 15c0 .55-.45 1-1 1h-7c-.55 0-1 .45-1 1s.45 1 1 1h3c1.65 0 3 1.35 3 3s-1.35 3-3 3H1c-.55 0-1-.45-1-1s.45-1 1-1h18c.55 0 1-.45 1-1s-.45-1-1-1h-3c-1.65 0-3-1.35-3-3s1.35-3 3-3h7c.55 0 1 .45 1 1ZM.29 19.71c-.24-.24-.35-.6-.27-.94l1.64-7.01c.33-1.41 1.4-2.56 2.78-3l3.7-1.16L14.88.88c1.13-1.13 3.11-1.13 4.24 0 .57.57.88 1.32.88 2.12s-.31 1.55-.88 2.12l-6.72 6.72-1.16 3.7a4.152 4.152 0 0 1-3 2.78l-7.01 1.64c-.08.02-.15.03-.23.03-.26 0-.52-.1-.71-.29ZM10 8.59 11.41 10l6.29-6.29c.19-.19.29-.44.29-.71s-.1-.52-.29-.71c-.38-.38-1.04-.38-1.41 0L10 8.58Zm-6.38 3.63-.84 3.59 2.52-2.52a.996.996 0 1 1 1.41 1.41l-2.52 2.52 3.59-.84c.73-.17 1.32-.72 1.54-1.43l1.01-3.2-2.08-2.08-3.2 1.01c-.71.22-1.26.82-1.43 1.54Z"/></svg>
  
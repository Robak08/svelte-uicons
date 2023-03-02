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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.87 22.51-5-9c-.07-.12-.16-.23-.27-.31l-3.86-2.89-1.33-2.04a4.975 4.975 0 0 0-4.18-2.26h-.96c-1.73 0-3.31.87-4.23 2.33L.79 13.47c-.29.47-.16 1.08.31 1.38.47.29 1.08.16 1.38-.31l3.24-5.13c.09-.14.18-.26.28-.38v4.11c0 1.36.68 2.61 1.82 3.36l3.41 2.21 2.57 4.77c.18.34.53.53.88.53.16 0 .32-.04.47-.12.49-.26.67-.87.41-1.35l-2.69-5a.98.98 0 0 0-.34-.36l-.54-.35V9.79l1.16 1.78c.06.1.14.18.24.25l3.83 2.87 4.9 8.81c.18.33.52.51.88.51.16 0 .33-.04.48-.13.48-.27.66-.88.39-1.36Zm-14.95-7.7c-.57-.37-.91-1-.91-1.68V8.01c.08 0 .17-.01.25-.01h.96c.27 0 .53.04.78.1v7.41l-1.08-.7ZM6.01 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0Zm1.63 16.66-.65 4A1 1 0 0 1 6 24c-.05 0-.11 0-.16-.01-.54-.09-.92-.6-.83-1.15l.65-4c.09-.55.6-.91 1.15-.83.54.09.92.6.83 1.15Z"/></svg>
  
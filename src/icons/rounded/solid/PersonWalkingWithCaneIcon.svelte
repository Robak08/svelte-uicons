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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6.01 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0Zm17.48 21.37c-.15.09-.32.13-.48.13-.35 0-.69-.19-.88-.51l-4.9-8.81-3.83-2.87c-.09-.07-.17-.16-.24-.25l-1.43-2.19c-.2-.3-.45-.57-.73-.77 0 0 0 7.52-.01 7.57l1.56 1.01c.14.09.26.22.34.36l2.69 5c.26.49.08 1.09-.41 1.35a.988.988 0 0 1-1.35-.41l-2.57-4.77-3.41-2.21c-1.14-.74-1.82-2-1.82-3.36V9.03c-.1.12-.2.24-.28.38L2.5 14.54c-.29.47-.91.61-1.38.31a.992.992 0 0 1-.31-1.38l3.24-5.13a4.97 4.97 0 0 1 4.23-2.33h.96c1.69 0 3.26.85 4.18 2.26l1.33 2.04 3.86 2.89c.11.08.21.19.27.31l5 9c.27.48.09 1.09-.39 1.36ZM6.82 18.01a.998.998 0 0 0-1.15.83l-.65 4c-.09.55.28 1.06.83 1.15.05 0 .11.01.16.01.48 0 .91-.35.99-.84l.65-4a.998.998 0 0 0-.83-1.15Z"/></svg>
  
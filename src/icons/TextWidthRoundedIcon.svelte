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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-text-width {customClass}"><path d="M4 6V4.5C4 2.02 6.02 0 8.5 0h7C17.98 0 20 2.02 20 4.5V6c0 .55-.45 1-1 1s-1-.45-1-1V4.5A2.5 2.5 0 0 0 15.5 2H13v12c0 .55-.45 1-1 1s-1-.45-1-1V2H8.5A2.5 2.5 0 0 0 6 4.5V6c0 .55-.45 1-1 1s-1-.45-1-1Zm20 13v-.01c0-.51-.2-1.02-.58-1.4l-2.75-2.75a.996.996 0 1 0-1.41 1.41L21.01 18H3l1.75-1.75a.996.996 0 1 0-1.41-1.41L.59 17.59c-.39.38-.59.89-.59 1.4v.02c0 .51.2 1.02.58 1.4l2.75 2.75c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41L3 20h18l-1.75 1.75a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l2.75-2.75c.39-.39.58-.9.58-1.4V19Z"/></svg>
  
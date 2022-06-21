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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-chat-arrow-grow {customClass}"><path d="M22.5 3.976h-3.086a1 1 0 0 0-.707 1.707l1.086 1.086-3.586 3.585a1.024 1.024 0 0 1-1.415 0l-.17-.171a3.071 3.071 0 0 0-4.243 0l-5.1 5.1A1 1 0 1 0 6.7 16.7l5.1-5.1a1.023 1.023 0 0 1 1.415 0l.17.171a3.073 3.073 0 0 0 4.243 0l3.586-3.586L22.3 9.271a1 1 0 0 0 1.7-.709V5.476a1.5 1.5 0 0 0-1.5-1.5Z"/><path d="M23 21.976H5a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v17.976a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2Z"/></svg>
  
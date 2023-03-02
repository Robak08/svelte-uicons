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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0a9 9 0 0 0-3.946 17.086 4.962 4.962 0 0 0 1.41 2.792L11 21.414V23a1 1 0 0 0 2 0v-1.586l1.535-1.536a4.959 4.959 0 0 0 1.41-2.792A9 9 0 0 0 12 0Zm3 5a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm-2 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm-2 3a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm2.121 7.464L12 19.586l-1.122-1.122a3.022 3.022 0 0 1-.8-1.464h3.85a3.016 3.016 0 0 1-.807 1.464ZM15 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm2-3a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"/></svg>
  
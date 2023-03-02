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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 13a3.987 3.987 0 0 0-2 7.444v2.833a.721.721 0 0 0 1.231.51l.769-.768.769.768a.721.721 0 0 0 1.231-.51v-2.833A3.987 3.987 0 0 0 18 13z"/><path d="M12 17a5.993 5.993 0 0 1 9-5.191V5a5.006 5.006 0 0 0-5-5H8a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h6v-.54A5.975 5.975 0 0 1 12 17zM8 4h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0 4h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm3 6H8a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z"/></svg>
  
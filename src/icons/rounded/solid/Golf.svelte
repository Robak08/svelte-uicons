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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 10a21.7 21.7 0 0 0-2 .1V17a1 1 0 0 1-2 0l-.022-8.885 5.009-2.076a2 2 0 0 0 .271-3.4C13.226 2.61 8.9.212 8.9.212A2 2 0 0 0 6 2v8.922C2.392 12.115 0 14.361 0 17c0 3.925 5.271 7 12 7s12-3.075 12-7-5.271-7-12-7zm4 9a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"/></svg>
  
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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 14c4.276 0 7.634-6.292 8.665-10.055a4.966 4.966 0 0 0-3.14-2.988A18.329 18.329 0 0 0 12 0a18.367 18.367 0 0 0-5.525.956 4.97 4.97 0 0 0-3.14 2.989C4.366 7.708 7.724 14 12 14ZM10 3h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Zm11 5.585C19.109 12.323 15.971 16 12 16s-7.109-3.677-9-7.415v7.592a5 5 0 0 0 1.325 3.39l-1.249 3.054a1 1 0 1 0 1.851.757L6 20.745A13.583 13.583 0 0 0 12 22a13.573 13.573 0 0 0 6-1.255l1.077 2.633a1 1 0 1 0 1.852-.757l-1.25-3.054A5 5 0 0 0 21 16.177ZM12 20a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"/></svg>
  
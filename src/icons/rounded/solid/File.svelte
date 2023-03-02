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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M320 170.667h139.52a148.346 148.346 0 0 0-33.941-52.565l-74.325-74.368a148.836 148.836 0 0 0-52.587-33.92v139.52c0 11.781 9.551 21.333 21.333 21.333z"/><path d="M468.821 213.333H320c-35.346 0-64-28.654-64-64V.512C252.565.277 249.131 0 245.653 0h-96.32C90.452.071 42.737 47.786 42.667 106.667v298.667c.07 58.88 47.785 106.596 106.666 106.666h213.333c58.881-.07 106.596-47.786 106.667-106.667V223.68c0-3.477-.277-6.912-.512-10.347z"/></svg>
  
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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512.008 512.008"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m172.399 117.448 62.421-62.443-.149 329.344c0 11.782 9.551 21.333 21.333 21.333 11.782 0 21.333-9.551 21.333-21.333l.149-328.981 62.123 62.144c8.475 8.185 21.98 7.951 30.165-.524 7.985-8.267 7.985-21.374 0-29.641L301.273 18.76c-24.986-25.002-65.508-25.015-90.51-.029l-.029.029-68.501 68.523c-8.185 8.475-7.951 21.98.524 30.165 8.267 7.985 21.374 7.985 29.642 0z"/><path d="M490.671 341.341c-11.782 0-21.333 9.551-21.333 21.333v85.333c0 11.782-9.551 21.333-21.333 21.333h-384c-11.782 0-21.333-9.551-21.333-21.333v-85.333c0-11.782-9.551-21.333-21.333-21.333-11.782 0-21.333 9.551-21.333 21.333v85.333c0 35.346 28.654 64 64 64h384c35.346 0 64-28.654 64-64v-85.333c-.002-11.782-9.553-21.333-21.335-21.333z"/></svg>
  
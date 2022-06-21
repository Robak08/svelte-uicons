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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-usb-pendrive {customClass}"><path d="M19 9.026V4a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v5.026A4.977 4.977 0 0 0 3 13v2a9 9 0 0 0 18 0v-2a4.977 4.977 0 0 0-2-3.974ZM7 8V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4H7Zm12 7a7 7 0 0 1-14 0v-2a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3Z"/><circle cx="10" cy="5" r="1"/><circle cx="14" cy="5" r="1"/></svg>

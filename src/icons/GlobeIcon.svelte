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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-globe {customClass}"><path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm8.647 7h-3.221a19.676 19.676 0 0 0-2.821-4.644A10.031 10.031 0 0 1 20.647 7zM16.5 12a10.211 10.211 0 0 1-.476 3H7.976a10.211 10.211 0 0 1-.476-3 10.211 10.211 0 0 1 .476-3h8.048a10.211 10.211 0 0 1 .476 3zm-7.722 5h6.444A19.614 19.614 0 0 1 12 21.588 19.57 19.57 0 0 1 8.778 17zm0-10A19.614 19.614 0 0 1 12 2.412 19.57 19.57 0 0 1 15.222 7zM9.4 2.356A19.676 19.676 0 0 0 6.574 7H3.353A10.031 10.031 0 0 1 9.4 2.356zM2.461 9H5.9a12.016 12.016 0 0 0-.4 3 12.016 12.016 0 0 0 .4 3H2.461a9.992 9.992 0 0 1 0-6zm.892 8h3.221A19.676 19.676 0 0 0 9.4 21.644 10.031 10.031 0 0 1 3.353 17zm11.252 4.644A19.676 19.676 0 0 0 17.426 17h3.221a10.031 10.031 0 0 1-6.042 4.644zM21.539 15H18.1a12.016 12.016 0 0 0 .4-3 12.016 12.016 0 0 0-.4-3h3.437a9.992 9.992 0 0 1 0 6z"/></svg>

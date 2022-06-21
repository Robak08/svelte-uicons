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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-redo {customClass}"><path d="M0 23v-7a9.01 9.01 0 0 1 9-9h4.83V5.414A2 2 0 0 1 17.244 4l5.88 5.879a3 3 0 0 1 0 4.242L17.244 20a2 2 0 0 1-3.414-1.414V17H8a6.006 6.006 0 0 0-6 6 1 1 0 0 1-2 0ZM15.83 8a1 1 0 0 1-1 1H9a7.008 7.008 0 0 0-7 7v1.714A7.984 7.984 0 0 1 8 15h6.83a1 1 0 0 1 1 1v2.586l5.879-5.879a1 1 0 0 0 0-1.414L15.83 5.414Z"/></svg>

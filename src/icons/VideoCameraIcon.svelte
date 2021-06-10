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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-video-camera {customClass}"><path d="M22.9 8.955a1.987 1.987 0 0 0-2.092.184L18.975 10.5A5.007 5.007 0 0 0 14 6h-.085L9.793 1.879A2.976 2.976 0 0 0 7.672 1H1a1 1 0 0 0 0 2h6.672a1.006 1.006 0 0 1 .707.293L11.086 6H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h9a5.007 5.007 0 0 0 4.975-4.5l1.83 1.364a2 2 0 0 0 3.2-1.6v-8.521A1.988 1.988 0 0 0 22.9 8.955zM17 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3H14a3 3 0 0 1 3 3zm5 .257-3-2.236v-4.042l3-2.236z"/></svg>

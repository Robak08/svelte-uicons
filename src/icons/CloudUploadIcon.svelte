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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-cloud-upload {customClass}"><path d="M18.4 7.376a1.129 1.129 0 0 1-.768-.754 8 8 0 1 0-15.1 5.238 1.044 1.044 0 0 1-.31 1.24 5.5 5.5 0 0 0-2.167 5.2A5.624 5.624 0 0 0 5.683 23H11a1 1 0 0 0 1-1 1 1 0 0 0-1-1H5.683a3.615 3.615 0 0 1-3.647-2.981A3.458 3.458 0 0 1 3.412 14.7a3.022 3.022 0 0 0 .988-3.562 6.119 6.119 0 0 1-.074-4.126 5.962 5.962 0 0 1 4.889-3.966A6.314 6.314 0 0 1 9.987 3a5.985 5.985 0 0 1 5.757 4.281 2.977 2.977 0 0 0 2.01 1.99 5.935 5.935 0 0 1 .779 11.092.977.977 0 0 0-.531.888.989.989 0 0 0 1.388.916c4.135-1.988 6.381-7.216 2.88-12.266a6.941 6.941 0 0 0-3.87-2.525z"/><path d="m18.709 15.291-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.415L14 15.413V23a1 1 0 0 0 2 0v-7.587l1.3 1.293a1 1 0 1 0 1.414-1.415z"/></svg>

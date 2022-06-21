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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-rhombus {customClass}"><path d="M12 23.928a4.99 4.99 0 0 1-3.536-1.462l-6.93-6.931a5 5 0 0 1 0-7.07l6.93-6.931a5.008 5.008 0 0 1 7.072 0l6.93 6.931a5 5 0 0 1 0 7.07l-6.93 6.931A4.99 4.99 0 0 1 12 23.928Zm0-21.857a2.992 2.992 0 0 0-2.122.877l-6.93 6.931a3 3 0 0 0 0 4.242l6.93 6.931a3 3 0 0 0 4.244 0l6.93-6.931a3 3 0 0 0 0-4.242l-6.93-6.931A2.992 2.992 0 0 0 12 2.071Z"/></svg>
